import Image from "next/image"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden flex flex-col">
      <header className="flex items-center justify-center px-5 pt-10 pb-2 relative z-20">
        <Image
          src="/shein-logo.png"
          alt="SHEIN"
          width={240}
          height={80}
          priority
          className="h-20 w-auto animate-logo-reveal"
        />
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-5 pb-10 text-center max-w-sm mx-auto w-full">
        <h1 className="text-display text-5xl leading-[0.95] tracking-tight animate-fade-up font-bold text-balance">
          Claim Your <span className="shine-text">$750</span> Gift Card
        </h1>

        <p className="mt-4 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "160ms" }}>
          Your <span className="font-bold text-foreground">$750 SHEIN</span> gift card is waiting.
        </p>

        <div className="mt-10 w-full animate-fade-up relative" style={{ animationDelay: "320ms" }}>
          <a
            href="/go"
            className="btn-pill w-full text-base py-4 hover:scale-[1.03] active:scale-95 transition-all duration-200 inline-block text-center btn-glow relative z-10"
          >
            Continue
          </a>
        </div>

        <Testimonials />
      </main>

      <footer className="border-t border-border py-3 text-center text-[10px] text-muted-foreground tracking-wider uppercase">
        SHEIN × Rewards
      </footer>
    </div>
  )
}
