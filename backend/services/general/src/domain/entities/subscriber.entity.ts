export interface SubscriberProps {
  id?: string;
  email: string;
  name?: string;
  subscribedAt?: Date;
  source?: string;
  meta?: Record<string, any> | null;
  isActive?: boolean | true;
}

export class SubscriberEntity {
  private readonly props: SubscriberProps;

  constructor(props: SubscriberProps) {
    this.props = {
      ...props,
      subscribedAt: props.subscribedAt ?? new Date(),
      isActive: props.isActive ?? true,
    };
    Object.freeze(this.props); // Ensure immutability
  }

  get id(): string | undefined {
    return this.props.id;
  }

  get email(): string {
    return this.props.email;
  }
  get name(): string | undefined {
    return this.props.name;
  }
  get subscribedAt(): Date {
    return this.props.subscribedAt!;
  }
  get source(): string | undefined {
    return this.props.source;
  }
  get meta(): Record<string, any> | null | undefined {
    return this.props.meta;
  }
  get isActive(): boolean | true {
    return this.props.isActive!;
  }
}
