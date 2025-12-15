import { Router } from "express";
import { SubscriberRequestController } from "../controllers/SubscriberController";

const router = Router();

router.post("/submit", SubscriberRequestController.prototype.createSubscriberRequest);

export default router;