// src/app.ts
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import subscriberRoutes from "./interfaces/routes/subscriber.routes";
import contactRoutes from "./interfaces/routes/contact.routes";
import { errorMiddleware } from "./interfaces/middleware/error.middleware";
import config from "./config";

export const app = express();

/**
 * Middlewares
 */
app.use(
  cors({
    origin: [config.crossOrigin],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Routes
 */
app.use("/api/subscribe", subscriberRoutes);
app.use("/api/contact", contactRoutes);

/**
 * Global error handler (LAST)
 */
app.use(errorMiddleware);
