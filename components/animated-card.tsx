"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import type React from "react" // Added import for React

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  category?: "experience" | "education" | "engagement" | "reference"
  logo?: string
  delay?: number
  onClick?: () => void
}

export function AnimatedCard({ children, className, category, logo, delay = 0, onClick, ...props }: AnimatedCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categoryStyles = {
    experience: "bg-blue-50/50 hover:bg-blue-50",
    education: "bg-amber-50/50 hover:bg-amber-50",
    engagement: "bg-green-50/50 hover:bg-green-50",
    reference: "bg-purple-50/50 hover:bg-purple-50",
  }

  return (
    <Card
      ref={ref}
      onClick={onClick}
      className={cn(
        "transition-all duration-300 ease-in-out",
        "hover:shadow-lg hover:scale-[1.02]",
        onClick && "cursor-pointer",
        "opacity-0 translate-y-4",
        inView && "animate-fade-up opacity-100 translate-y-0",
        category && categoryStyles[category],
        className,
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
      {...props}
    >
      <div className="flex items-center p-4">
        {logo && (
          <img src={logo || "/placeholder.svg"} alt="Company logo" width="100" height="100" />
        )}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </Card>
  )
}

