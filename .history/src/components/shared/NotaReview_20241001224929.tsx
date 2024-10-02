import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface ScoreReviewProps {
  score: number;
  tamanho?: number;
}

export default function scoreReview(props: ScoreReviewProps) {
  function scoreParaEstrelas(score: number) {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        estrelas.push(<IconStarFilled size={props.tamanho ?? 12} />);
      } else if (score >= i - 0.5) {
        estrelas.push(<IconStarHalfFilled size={props.tamanho ?? 12} />);
      } else {
        estrelas.push(<IconStar size={props.tamanho ?? 12} />);
      }
    }
    return estrelas;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {scoreParaEstrelas(props.score)}
    </div>
  );
}
