import { Calculateinstallment } from "@/core";

export default function useParcelamento(
  valor: number,
  quantidade: number = 12
) {
  const parcelamento = new Calculateinstallment().execute(valor, quantidade);
  return parcelamento;
}
