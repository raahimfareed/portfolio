import Image, { StaticImageData } from "next/image"

interface iPostImageProps {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// Static imports carry their own dimensions and blur placeholder; a plain
// string path out of /public needs width and height supplied by the author.
export function PostImage({ src, alt, caption, width, height, priority }: iPostImageProps) {
  const isStatic = typeof src !== "string";

  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={isStatic ? undefined : width}
        height={isStatic ? undefined : height}
        placeholder={isStatic ? "blur" : undefined}
        priority={priority}
        sizes="(min-width: 1024px) 64ch, 100vw"
        className="w-full h-auto rounded border border-accent shadow"
      />
      {!!caption && (
        <figcaption className="mt-2 text-center text-sm opacity-70">{caption}</figcaption>
      )}
    </figure>
  )
}
