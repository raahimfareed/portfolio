import React, { CSSProperties } from 'react'
import { LinkPreview } from './ui/link-preview'
import { LinkIcon } from '@heroicons/react/24/outline'
import Image, { StaticImageData } from 'next/image';
import TechPill from './TechPill';
import { cleanString } from '@/utils';
import { TechType } from '@/types';
interface iProjectComponentProps {
  name: string;
  url?: string;
  image: StaticImageData | string;
  imageStyle?: CSSProperties;
  techStack: TechType[];
  description: string | React.ReactNode;
}
const ProjectComponent = ({ name, url, image, imageStyle, techStack, description }: iProjectComponentProps) => {
  return (
    <div className="flex flex-col gap-2" id={cleanString(name)}>
      <h2 className="text-2xl text-foreground">
        {!!url
          ? <LinkPreview url={url} className="text-foreground inline-flex items-center gap-3">
            {name} <LinkIcon className="w-4" />
          </LinkPreview>
          : <>{name}</>
        }
      </h2>
      <div className="h-[400px] w-full relative rounded-lg overflow-hidden bg-transparent">
        <Image
          src={image}
          alt={name}
          fill={true}
          objectFit="contain"
          unoptimized
          style={imageStyle}
          layout="fixed" />
      </div>
      <div className="flex items-center flex-wrap gap-3">
        <strong className="mr-1">Tech Stack:</strong>
        {techStack.map((techName, index) => {
          return (
            <TechPill key={`tech-stack-pill-${index}`} type={techName} />
          )
        })}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default ProjectComponent
