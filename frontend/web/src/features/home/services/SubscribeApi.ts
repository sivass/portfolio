import { axiosClient } from "@/core/services/axiosClient";
import { SubscriberInput } from "../utils/SubscriberSchema";

export async function subscribeApi(payload: SubscriberInput): Promise<void> {
  await axiosClient.post("/api/subscribe/submit", payload);
}