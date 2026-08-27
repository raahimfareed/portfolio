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

  return (
    <div className={`rounded border shadow p-4 my-6 flex flex-row gap-3 ${className}`}>
      <Icon className="w-5 h-5 shrink-0 mt-0.5 opacity-80" aria-hidden />
      <div className="min-w-0">
        {title && <p className="font-bold mb-1">{title}</p>}
        <div className="text-sm opacity-90 [&>*+*]:mt-2">{children}</div>
      </div>
    </div>
  )
}
