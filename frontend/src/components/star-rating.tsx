import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  outOf?: number;
}

export default function StarRating({ rating, outOf = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1 text-accent">
      {Array.from({ length: outOf }).map((_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <Star
            key={index}
            className={`h-4 w-4 ${filled ? "fill-current" : "stroke-current text-muted-foreground"}`}
            aria-hidden="true"
          />
        );
      })}
      <span className="ml-1 text-sm font-medium text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}
