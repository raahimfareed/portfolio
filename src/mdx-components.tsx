import React from 'react'
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/mdx/Callout'
import { StepCard } from '@/components/mdx/StepCard'
import { Steps } from '@/components/mdx/Steps'
import { CodeBlock } from '@/components/mdx/CodeBlock'
import { slugify } from '@/utils'

const toText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(toText).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return toText(node.props.children)
  return ''
}

const heading = (Tag: 'h2' | 'h3') => {
  const Heading = ({ children, ...props }: React.ComponentProps<'h2'>) => (
    <Tag id={slugify(toText(children))} {...props}>{children}</Tag>
  )
  Heading.displayName = `Mdx${Tag.toUpperCase()}`
  return Heading
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Steps,
    StepCard,
    h2: heading('h2'),
    h3: heading('h3'),
    pre: CodeBlock, // intercept every code fence
    ...components,
  }
}
