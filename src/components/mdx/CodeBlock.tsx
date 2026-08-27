import { cn } from "@/utils"

export function CodeBlock({ className, ...props }: React.ComponentProps<'pre'>) {
  return <pre {...props} className={cn("p-4 overflow-x-auto text-sm leading-relaxed", className)} />
}
