import React from 'react'
const ProjectSkeleton = () => {
  return (
      <div className="opacity-30">
        <div className="flex flex-col gap-2 animate-pulse">
          <h2 className="rounded-full h-8 w-4/5 bg-foreground"></h2>
          <div className="max-h-[400px] rounded-lg overflow-hidden bg-foreground w-full h-[400px]"></div>
          <div className="flex items-center flex-wrap gap-3">
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
            <span className="rounded-full mr-1 h-4 w-16 bg-foreground"></span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="h-4 w-full bg-foreground rounded-full"></div>
            <div className="h-4 w-full bg-foreground rounded-full"></div>
            <div className="h-4 w-full bg-foreground rounded-full"></div>
            <div className="h-4 w-full bg-foreground rounded-full"></div>
            <div className="h-4 w-3/5 bg-foreground rounded-full"></div>
          </div>
        </div>
      </div>
  )
}

export default ProjectSkeleton;
