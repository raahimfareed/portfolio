import React from 'react'
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/mdx/Callout'
import { StepCard } from '@/components/mdx/StepCard'
import { Steps } from '@/components/mdx/Steps'
import { CodeBlock } from '@/components/mdx/CodeBlock'
import { PostImage } from '@/components/mdx/PostImage'
import { slugify } from '@/utils'

const toText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(toText).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return toText(node.props.children)
  return ''
}

const heading = (Tag: 'h2' | 'h3' | 'h4') => {
  const Heading = ({ children, ...props }: React.ComponentProps<'h2'>) => (
    <Tag id={slugify(toText(children))} {...props}>{children}</Tag>
  )
  Heading.displayName = `Mdx${Tag.toUpperCase()}`
  return Heading
}

// Plain markdown image syntax has no dimensions to give next/image, so it
// stays a native img and just picks up the figure styling.
const MdxImage = ({ src, alt, title, ...props }: React.ComponentProps<'img'>) => (
  <figure className="my-8">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt ?? ''} loading="lazy" decoding="async" {...props}
      className="w-full h-auto rounded border border-accent shadow" />
    {!!title && <figcaption className="mt-2 text-center text-sm opacity-70">{title}</figcaption>}
  </figure>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Steps,
    StepCard,
    PostImage,
    img: MdxImage,
    h2: heading('h2'),
    h3: heading('h3'),
    h4: heading('h4'),
    pre: CodeBlock, // intercept every code fence
    ...components,
  }
}
