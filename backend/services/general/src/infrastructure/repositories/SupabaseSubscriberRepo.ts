import { SubscriberEntity } from "../../domain/entities/subscriber.entity";
import { ISubscriberRepo } from "../../domain/repositories/ISubscriberRepo";
import { SupabaseRepo } from "../supabase/supabase.repo";

export class SupabaseSubscriberRepo implements ISubscriberRepo {
  async createSubscriber(
    subscriberRequest: SubscriberEntity
  ): Promise<SubscriberEntity> {
    const record = await SupabaseRepo.upsertSubscriber(subscriberRequest);
    if (!record) {
      throw new Error("Failed to create subscriber");
    }
    return new SubscriberEntity(record);
  }
}
