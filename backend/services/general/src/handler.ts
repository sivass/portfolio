// src/handler.ts
import serverless from "serverless-http";
import { app } from "./app";

// Export the app wrapped in serverless-http
export const handler = serverless(app);
