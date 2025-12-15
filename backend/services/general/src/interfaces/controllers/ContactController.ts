import { NextFunction, Request, Response } from "express";
import { ContactService } from "../../application/services/ContactService";
import { SupabaseContactRepo } from "../../infrastructure/repositories/SupabaseContactRepo";

const contactRequestService = new ContactService(new SupabaseContactRepo());

export class ContactRequestController {
  async createContactRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const contactRequest = req.body;
      const contact = await contactRequestService.createContact(contactRequest);
      res.status(201).json(contact);
    } catch (error) {
      next(error);
    }
  }
}
