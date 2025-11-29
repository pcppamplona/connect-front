export interface CreateCustomerBody {
  name: string;
  email: string;
  cellphone: string;
  taxId: string;
}

export interface Customer {
  id: string;
  metadata: {
    name: string;
    cellphone: string;
    taxId: string;
    email: string;
    zipCode: string;
  };
}

export interface CustomersApiResponse {
  error: string | null;
  data: Customer[];
}

export interface CreateBillingBody {
  customerId: string;
  product: string;
  amount: number;
}

export interface BillingResponse {
  id: string;
  status: string;
  amount: number;
}

export interface CreatePixBody {
  amount: number;
  description: string;
  customer: {
    name: string;
    email: string;
    cellphone: string;
    taxId: string;
  };
  metadata: Record<string, any>;
}

export interface PixResponse {
  data: {
    id: string;
    status: string;
    brCode: string;
    brCodeBase64: string;
  };
}
