import { CrossCircledIcon, ExclamationTriangleIcon, InfoCircledIcon } from '@radix-ui/react-icons'

const variants = {
  info: { className: 'border-accent bg-secondary/50', Icon: InfoCircledIcon },
  warning: { className: 'border-accent bg-accent/25', Icon: ExclamationTriangleIcon },
  danger: { className: 'border-destructive bg-destructive/10', Icon: CrossCircledIcon },
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: keyof typeof variants
  title?: string
  children: React.ReactNode
}) {
  const { className, Icon } = variants[type]

  // With a title the icon shares a centred row with it; without one it sits
  // beside the body instead, so it never floats on a line of its own.
  if (title) {
    return (
      <div className={`my-6 rounded border p-4 shadow ${className}`}>
        <div className="flex flex-row items-center gap-2">
          <Icon className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
          <p className="font-bold leading-5">{title}</p>
        </div>
        <div className="mt-2 text-sm opacity-90 [&>*+*]:mt-2">{children}</div>
      </div>
    )
  }

  return (
    <div className={`my-6 flex flex-row gap-2 rounded border p-4 shadow ${className}`}>
      <Icon className="mt-[0.15rem] h-5 w-5 shrink-0 opacity-80" aria-hidden />
      <div className="min-w-0 text-sm opacity-90 [&>*+*]:mt-2">{children}</div>
    </div>
  )
}
