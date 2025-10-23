import { ButtonHTMLAttributes, ReactNode } from "react";
import { LucideIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export default function Button({
  variant = "default",
  children,
  icon: Icon = Play,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-md text-lg font-bold tracking-tighter transition-all duration-300 overflow-hidden group";

  const variants = {
    default:
      "bg-primary text-foreground hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-primary/20",
    primary:
      "bg-secondary text-foreground hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-secondary/20",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <Icon className="w-3 h-3 fill-current transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}
