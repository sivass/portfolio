import { contactApi } from "../services/ContactApi";
import { ContactInput, ContactSchema } from "../utils/ContactSchema";

export async function contactUseCase(input: ContactInput) {
  const validated = ContactSchema.parse(input);
  await contactApi(validated);
}

export default contactUseCase;
