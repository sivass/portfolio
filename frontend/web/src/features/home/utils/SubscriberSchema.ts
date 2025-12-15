import { z } from "zod";

export const SubscriberSchema = z.object({
  email: z.string().email(),
});

export type SubscriberInput = z.infer<typeof SubscriberSchema>;
