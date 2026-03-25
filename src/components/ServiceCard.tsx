
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  gradient?: "orange" | "blue" | "green"
  index?: number
}

const gradientConfig = {
  orange: {
    card: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500",
    bar: "from-orange-500 to-amber-400",
    num: "text-orange-200",
    hover: "group-hover:text-orange-600",
    wm: "#ea580c",
  },
  blue: {
    card: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
    dot: "bg-blue-600",
    bar: "from-blue-600 to-blue-400",
    num: "text-blue-200",
    hover: "group-hover:text-blue-700",
    wm: "#2563eb",
  },
  green: {
    card: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-700",
    dot: "bg-green-600",
    bar: "from-green-600 to-emerald-400",
    num: "text-green-200",
    hover: "group-hover:text-green-700",
    wm: "#16a34a",
  },
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient = "orange",
  index = 0,
}: ServiceCardProps) => {
  const c = gradientConfig[gradient]

  return (
    <div
      className={`group relative flex flex-col rounded-2xl p-7 border-[1.5px] overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.card}`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${c.iconBg}`}
      >
        {icon}
      </div>

      {/* Number */}
      <span className={`text-[10px] font-bold tracking-[.18em] uppercase mb-2 block ${c.num}`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className={`font-display text-lg font-bold text-slate-900 mb-2 leading-snug tracking-tight transition-colors duration-200 ${c.hover}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-800 leading-[1.8] mb-5 font-medium">
        {description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom bar */}
      <div
        className={`h-[2.5px] w-7 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r ${c.bar}`}
      />

      {/* Watermark number */}
      <span
        className="absolute bottom-0 right-2 font-display text-[5rem] font-black italic leading-none pointer-events-none select-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"
        style={{ color: c.wm }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  )
}

export default ServiceCard
