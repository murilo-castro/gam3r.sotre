import { Calculateinstallment } from "@/core";

export default function useInstallment(value: number, quantity: number = 12) {
  const installment = new Calculateinstallment().execute(value, quantity);
  return installment;
}
