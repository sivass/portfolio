import { ContactEntity } from "../entities/contact.entity";

export interface IContactRepo {
  // Define methods for contact repository
  createContact(contact: ContactEntity): Promise<ContactEntity>;
}
