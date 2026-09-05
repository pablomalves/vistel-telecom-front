import type { Customer } from "@/src/types";

export const mockCustomer: Customer = {
  id: "customer-001",
  name: "Cliente Vistel",
  cpf: "00000000000",
  contract: {
    number: "2025-001245",
    status: "ACTIVE",
    plan: "Internet Fibra 500 Mega",
    address: "Rua Exemplo, 100 — Maracanaú/CE",
    startDate: "15/02/2025",
  },
  invoices: [
    {
      id: "invoice-001",
      reference: "09/2026",
      amount: 99.9,
      dueDate: "10/09/2026",
      status: "OPEN",
    },
    {
      id: "invoice-002",
      reference: "08/2026",
      amount: 99.9,
      dueDate: "10/08/2026",
      paidDate: "08/08/2026",
      status: "PAID",
    },
    {
      id: "invoice-003",
      reference: "07/2026",
      amount: 99.9,
      dueDate: "10/07/2026",
      paidDate: "09/07/2026",
      status: "PAID",
    },
    {
      id: "invoice-004",
      reference: "06/2026",
      amount: 99.9,
      dueDate: "10/06/2026",
      paidDate: "09/06/2026",
      status: "PAID",
    }
  ],
};
