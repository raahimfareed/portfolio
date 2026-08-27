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
      {/* Parent pads content 40px past the rule, so -left-14 (56px) puts the
          32px circle's centre exactly on it: 40 + (-56) + 16 = 0. */}
      <span className="absolute -left-14 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent bg-background text-sm font-bold">
        {number}
      </span>
      <h4 className="font-bold leading-8">{title}</h4>
      <div className="mt-1 text-sm opacity-80 [&>*+*]:mt-2">{children}</div>
    </div>
  )
}
