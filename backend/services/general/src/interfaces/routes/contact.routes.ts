import { Router } from "express";
import { ContactRequestController } from "../controllers/ContactController";

const router = Router();

router.post(
  "/submit",
  ContactRequestController.prototype.createContactRequest
);
export default router;
