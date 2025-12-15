import { ContactEntity } from "../../domain/entities/contact.entity";
import { SupabaseContactRepo } from "../../infrastructure/repositories/SupabaseContactRepo";

export class ContactService {
  private repo: SupabaseContactRepo;

  constructor(contactRepo: SupabaseContactRepo) {
    this.repo = contactRepo;
  }

  async createContact(contact: ContactEntity): Promise<ContactEntity> {
    return this.repo.createContact(contact);
  }
}
