import { SubscriberEntity } from "../entities/subscriber.entity";

export interface ISubscriberRepo {
  // Define methods for subscriber repository
  createSubscriber(subscriber: SubscriberEntity): Promise<SubscriberEntity>;
}
