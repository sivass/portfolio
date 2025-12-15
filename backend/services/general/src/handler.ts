import serverless from "serverless-http";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import subscriberRoutes from "./interfaces/routes/subscriber.routes";
import contactRoutes from "./interfaces/routes/contact.routes";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Register routes
app.use("/api/subscribe", subscriberRoutes);
app.use("/api/contact", contactRoutes);

// Export the app wrapped in serverless-http
export const handler = serverless(app);
