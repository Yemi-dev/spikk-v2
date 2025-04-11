import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import httpStatus from "http-status";
import http from "http";
import router from "./routes/index.routes";
import { errorHandler } from "./middlewares";
import connectDB from "./DB/connection"; 

dotenv.config();

// Initialize Express
const app: Application = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

// Connect to MongoDB FIRST
(async () => {
  try {
    await connectDB(); // ⚠️ 
    console.log("✅ MongoDB Connected");

    // Middlewares
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    app.use(helmet());
    app.set("trust proxy", 1);

    if (process.env.NODE_ENV !== "test") {
      app.use(morgan("dev"));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.get("/", (req: Request, res: Response) => {
      res.status(httpStatus.OK).json({
        success: true,
        message: "Hello World, Welcome to Finverse API",
      });
    });

    app.use("/api", router);

    // 404 Handler
    app.use((req: Request, res: Response, next: NextFunction) => {
      const error = new Error(`Not Found - ${req.originalUrl}`) as any;
      error.status = httpStatus.NOT_FOUND;
      next(error);
    });

    // Error Handler
    app.use(errorHandler);

    // Start the server ONLY after DB connects
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });

  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1); // Crash the app if DB connection fails
  }
})();

export default server;