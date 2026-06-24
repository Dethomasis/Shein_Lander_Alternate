import { StarIcon } from "./star-icon"

const reviews = [
  {
    quote: "Got my $750 gift card in under 24 hours. Legit and super easy!",
    initials: "JS",
    name: "Jessica S. — verified",
  },
  {
    quote: "Was skeptical at first but it actually worked. Already shopping my haul.",
    initials: "MK",
    name: "Maya K. — verified",
  },
  {
    quote: "Took like 10 mins total. Free money for clothes, no brainer.",
    initials: "AR",
    name: "Ariana R. — verified",
  },
]

export function Testimonials() {
  return (
    <div className="mt-8 w-full animate-fade-up" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-accent" />
        ))}
        <span className="text-xs text-muted-foreground ml-1.5 font-medium">4.9/5</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {reviews.map((review) => (
          <div key={review.initials} className="bg-surface border border-border rounded-xl p-3 text-left">
            <p className="text-xs text-foreground leading-relaxed">{`"${review.quote}"`}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-[9px] font-bold text-accent">
                {review.initials}
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">{review.name}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground mt-2.5 text-center">
        Join 12,000+ members who claimed this month
      </p>
    </div>
  )
}
