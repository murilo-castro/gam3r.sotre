import Installment from "./installment";

export default class Calculateinstallment {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUMBER_INSTALLMENTS,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {}
}
