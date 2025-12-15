export interface contactProps {
  id?: string;
  email: string;
  name?: string | null;
  message?: string;
  contactedAt?: Date;
  ipAddress?: string | null;
  userAgent?: string | null;
  isSolved?: boolean;
}

export class ContactEntity {
  private readonly props: contactProps;
  constructor(props: contactProps) {
    this.props = props;
    Object.freeze(this.props); // Ensure immutability
  }
  get id(): string | undefined {
    return this.props.id;
  }
  get email(): string {
    return this.props.email;
  }
  get name(): string | null | undefined {
    return this.props.name;
  }
  get message(): string | undefined {
    return this.props.message;
  }
  get contactedAt(): Date | undefined {
    return this.props.contactedAt;
  }
  get ipAddress(): string | null | undefined {
    return this.props.ipAddress;
  }
  get userAgent(): string | null | undefined {
    return this.props.userAgent;
  }
  get isSolved(): boolean | undefined {
    return this.props.isSolved;
  }
}
