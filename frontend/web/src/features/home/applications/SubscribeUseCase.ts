import { SubscriberSchema, SubscriberInput } from "../utils/SubscriberSchema";
import { subscribeApi } from "../services/SubscribeApi";

export async function subscribeUseCase(input: SubscriberInput) {
  const validated = SubscriberSchema.parse(input);
  await subscribeApi(validated);
}

export default subscribeUseCase;