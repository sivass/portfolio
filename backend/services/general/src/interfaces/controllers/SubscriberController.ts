import { Request, Response, NextFunction } from "express";
import { SubscriberService } from "../../application/services/SubscriberService";
import { SupabaseSubscriberRepo } from "../../infrastructure/repositories/SupabaseSubscriberRepo";

const subscriberRequestService = new SubscriberService(
  new SupabaseSubscriberRepo()
);

export class SubscriberRequestController {
  async createSubscriberRequest(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const subscriberRequest = req.body;
      const subscriber = await subscriberRequestService.createSubscriber(
        subscriberRequest
      );
      res.status(201).json(subscriber);
    } catch (error) {
      next(error);
    }
  }
}
