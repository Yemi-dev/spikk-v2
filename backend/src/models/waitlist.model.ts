import mongoose, { Document, Schema } from "mongoose";

export interface IWaitlist extends Document {
  email: string;
  feature: string;
  alternatives: string;
  success: string;
  otherFinancialApp?: string;
  otherSuccessMetric?: string;
  country: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const WaitlistSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    feature: {
      type: String,
      required: true,
    },
    alternatives: {
      type: String,
      required: true,
    },
    success: {
      type: String,
      required: true,
    },
    otherFinancialApp: {
      type: String,
      default: "",
    },
    otherSuccessMetric: {
      type: String,
      default: "",
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);

export default mongoose.model<IWaitlist>("Waitlist", WaitlistSchema);
