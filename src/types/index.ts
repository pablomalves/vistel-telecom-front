export type ContractStatus = "ACTIVE" | "BLOCKED";
export type InvoiceStatus = "OPEN" | "PAID";

export type Invoice = {
  id: string;
  reference: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: InvoiceStatus;
};

export type Contract = {
  number: string;
  status: ContractStatus;
  plan: string;
  address: string;
  startDate: string;
};

export type Customer = {
  id: string;
  name: string;
  cpf: string;
  contract: Contract;
  invoices: Invoice[];
};
