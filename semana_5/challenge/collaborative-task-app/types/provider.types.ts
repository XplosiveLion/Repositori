export type ProviderType =
  | 1
  | 2;

export interface Provider {
  id: number;

  business_name: string;

  email: string | null;

  phone: string | null;

  rfc: string | null;

  credit_limit:
    | number
    | null;

  is_archived: boolean;

  type: ProviderType;
}