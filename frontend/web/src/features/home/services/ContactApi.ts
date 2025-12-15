import { axiosClient } from "@/core/services/axiosClient";
import { ContactInput } from "../utils/ContactSchema";

export async function contactApi(payload: ContactInput): Promise<void> {
  await axiosClient.post("/api/contact/submit", payload);
}
