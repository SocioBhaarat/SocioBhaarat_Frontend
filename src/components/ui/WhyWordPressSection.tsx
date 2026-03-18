"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Rocket, Smartphone, Search } from "lucide-react";

const cards = [
  {
    index: "01",
    title: "Digital Dominance",
    icon: <Rocket className="w-5 h-5" />,
    desc: "Establish a future-ready presence with a highly scalable platform that grows alongside your business without limits.",
  },
  {
    index: "02",
    title: "Edge Performance",
    icon: <Smartphone className="w-5 h-5" />,
    desc: "Responsive layouts optimized for every screen size and device, delivering flawless experiences wherever your users are.",
  },
  {
    index: "03",
    title: "SEO Authority",
    icon: <Search className="w-5 h-5" />,
    desc: "Built-in technical SEO structures to dominate rankings and drive consistent, compounding organic traffic.",
  },
];

function WhyCard({
  card,
  isLast,
}: {
  card: (typeof cards)[0];
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      whileHover="hover"
      // On mobile: fires when card enters viewport. On desktop: stays "rest", only whileHover triggers
      animate={isInView ? "hover" : "rest"}
      initial="rest"
      variants={{ rest: {}, hover: {} }}
      className={cn(
        "relative p-9 md:p-10 cursor-default transition-colors duration-200",
        // bg: mobile uses in-view state via data attr, desktop uses group-hover
        "md:hover:bg-muted/50",
        !isLast && "border-b sm:border-b-0 sm:border-r border-border/50"
      )}
      // Reset animate to "rest" on md+ so only whileHover controls it there
      style={{ ["--is-mobile" as string]: "1" }}
    >
      {/* Mobile-only in-view bg */}
      <div
        className={cn(
          "absolute inset-0 bg-muted/50 transition-opacity duration-300 md:hidden",
          isInView ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-10">
        {/* Index */}
        <span className="block font-serif text-[4rem] font-normal text-border/40 leading-none mb-8">
          {card.index}
        </span>

        {/* Icon */}
        <motion.div
          variants={{
            rest: { backgroundColor: "transparent", borderColor: "var(--border)" },
            hover: { backgroundColor: "#2563EB", borderColor: "#2563EB" },
          }}
          transition={{ duration: 0.25 }}
          className="w-[46px] h-[46px] rounded-xl border border-border bg-muted flex items-center justify-center mb-6"
        >
          <motion.span
            variants={{
              rest: { color: "var(--muted-foreground)" },
              hover: { color: "#ffffff" },
            }}
            transition={{ duration: 0.25 }}
          >
            {card.icon}
          </motion.span>
        </motion.div>

        {/* Text */}
        <h3 className="text-2xl font-semibold text-foreground mb-3 leading-snug">
          {card.title}
        </h3>
        <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
          {card.desc}
        </p>

        {/* Accent line */}
        <motion.div
          variants={{
            rest: { width: 0 },
            hover: { width: 40 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-orange-500"
        />
      </div>
    </motion.div>
  );
}

export function WhyWordPressSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10 px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-lg">
            Why your brand needs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              WordPress
            </span>
          </h2>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-right sm:max-w-[220px] leading-relaxed">
            Engineering the backbone of modern digital commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border border-border/50 rounded-3xl overflow-hidden">
          {cards.map((card, i) => (
            <WhyCard key={i} card={card} isLast={i === cards.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}