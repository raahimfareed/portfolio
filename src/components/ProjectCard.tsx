import React, { CSSProperties } from 'react'
import Image from 'next/image';
import { cleanString } from '@/utils';
import { Project } from '@/types';
import Link from 'next/link';
import { Button } from './ui/button';
import clsx from 'clsx';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
interface iProjectCardProps {
  project: Project;
  imageStyle?: CSSProperties;
  className?: string;
}

export const ProjectCard = ({ project, imageStyle, className }: iProjectCardProps) => {
  return (
    <div className={clsx("flex flex-col gap-2 w-full bg-background overflow-hidden rounded shadow", className)} id={cleanString(project.name)}>
      {/* Image */}
      <div className="h-[200px] w-full relative overflow-hidden bg-transparent">
        <Image
          src={project.image!}
          alt={project.name}
          fill={true}
          className="object-cover"
          unoptimized
          style={imageStyle} />
      </div>

      {/* Body */}
      <div className="flex flex-wrap flex-col gap-3 p-4 flex-grow">
        <h2 className="text-2xl text-foreground">
          {project.name}
        </h2>
        <div>
          {project.shortDescription ?? project.description.slice(0, 64)}
        </div>
        {!!project.notice &&
          <div>
            <strong>Disclaimer:</strong> {project.notice}
          </div>
        }
      </div>

      {/* Footer */}
      <div className='p-4 flex flex-row gap-2'>
        {!!project.url && (
          <Button asChild className='w-full'>
            <Link href={project.url}>View Project</Link>
          </Button>
        )}
        {!!project.gitUrl && (
          <Button asChild variant="outline">
            <Link href={project.gitUrl} target='_blank'><GitHubLogoIcon /></Link>
          </Button>
        )}
      </div>
    </div>
  )
}
