import { MAX_NUMBER_INSTALLMENTS } from "./constants.ts";
import Installment from "./installment";

export default class Calculateinstallment {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUMBER_INSTALLMENTS,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (
      numberOfInstallments < 2 ||
      numberOfInstallments > MAX_NUMBER_INSTALLMENTS
    ) {
      throw new Error(
        `Quantidade máxima de parcelas deve ser ${MAX_NUMBER_INSTALLMENTS} `
      );
    }
  }
}
