export function StepCard({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="relative pb-8 last:pb-0">
      <span className="absolute -left-[2.05rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent bg-background text-sm font-bold">
        {number}
      </span>
      <h4 className="font-bold mb-1">{title}</h4>
      <div className="text-sm opacity-80 [&>*+*]:mt-2">{children}</div>
    </div>
  )
}
