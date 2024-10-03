import { IconTag } from "@tabler/icons-react";
import { Product } from "@/core";
import Tag from "@/components/shared/Tag";

export interface SpecificationsProps {
  produto: Product;
}

export default function Specifications(props: SpecificationsProps) {
  const { produto } = props;
  return produto ? (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag label={produto.specification.emphasis!} icone={IconTag} outlined />
      </div>
      {produto?.specification &&
        Object.keys(produto.specification)
          .filter((k) => k !== "emphasis")
          .map((key_atribute) => (
            <div key={key_atribute} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">
                {key_atribute}
              </span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {produto.specification[key_atribute]}
              </span>
            </div>
          ))}
    </div>
  ) : null;
}
