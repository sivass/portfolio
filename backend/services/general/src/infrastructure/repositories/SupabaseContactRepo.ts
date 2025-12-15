import { ContactEntity } from "../../domain/entities/contact.entity";
import { IContactRepo } from "../../domain/repositories/IContactRepo";
import { SupabaseRepo } from "../supabase/supabase.repo";

export class SupabaseContactRepo implements IContactRepo {
  async createContact(contact: ContactEntity): Promise<ContactEntity> {
    // Implementation for creating a contact in Supabase
    const record = await SupabaseRepo.createContact(contact);
    if (!record) {
      throw new Error("Failed to create contact");
    }
    return new ContactEntity(record);
  }
}
