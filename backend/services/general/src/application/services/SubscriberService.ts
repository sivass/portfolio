import { SubscriberEntity } from "../../domain/entities/subscriber.entity";
import { SupabaseSubscriberRepo } from "../../infrastructure/repositories/SupabaseSubscriberRepo";

export class SubscriberService {
  private repo: SupabaseSubscriberRepo;

  constructor(subscriberRepo: SupabaseSubscriberRepo) {
    this.repo = subscriberRepo;
  }

  async createSubscriber(
    subscriberRequest: SubscriberEntity
  ): Promise<SubscriberEntity> {
    return this.repo.createSubscriber(subscriberRequest);
  }
}
