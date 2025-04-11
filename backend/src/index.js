const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const httpStatus = require("http-status");
const http = require("http");
const router = require("./routes/index.routes");
const { errorHandler } = require("./middlewares");
const connectDB = require("./DB/connection");

dotenv.config();

// Initialize Express
const app = express();
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
    app.get("/", (req, res) => {
      res.status(httpStatus.OK).json({
        success: true,
        message: "Hello World, Welcome to Finverse API",
      });
    });

    app.use("/api", router);

    // 404 Handler
    app.use((req, res, next) => {
      const error = new Error(`Not Found - ${req.originalUrl}`);
      error.status = httpStatus.NOT_FOUND;
      next(error);
    });

    // Error Handler
    app.use(errorHandler);

    // Start the server ONLY after DB connects
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1); // Crash the app if DB connection fails
  }
})();

module.exports = server;
