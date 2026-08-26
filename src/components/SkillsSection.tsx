import TechPill from "./TechPill"

export const SkillSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 mb-8">
      <h2 className="text-2xl">Languages</h2>
      <div className="flex gap-3 flex-wrap w-full">
        <TechPill type="html" />
        <TechPill type="css" />
        <TechPill type="javascript" />
        <TechPill type="typescript" />
        <TechPill type="php" />
        <TechPill type="python" />
        <TechPill type="bash" />
        <TechPill type="kotlin" />
      </div>
      <h2 className="text-2xl">Frameworks and Libraries</h2>
      <div className="flex gap-3 flex-wrap w-full">
        <TechPill type="laravel" />
        <TechPill type="react" />
        <TechPill type="tailwindcss" />
        <TechPill type="django" />
        <TechPill type="flask" />
        <TechPill type="postcss" />
        <TechPill type="unity" />
        <TechPill type="pycord" />
        <TechPill type="express" />
        <TechPill type="sass" />
        <TechPill type="arduino" />
        <TechPill type="jetpack-compose" />
        <TechPill type="jquery" />
        <TechPill type="Pine" />
      </div>
      <h2 className="text-2xl">Tools and Technologies</h2>
      <div className="flex gap-3 flex-wrap w-full">
        <TechPill type="git" />
        <TechPill type="mysql" />
        <TechPill type="postgresql" />
        <TechPill type="docker" />
        <TechPill type="postman" />
        <TechPill type="jetbrains" />
        <TechPill type="figma" />
        <TechPill type="jira" />
        <TechPill type="neovim" />
        <TechPill type="vscode" />
      </div>
      <h2 className="text-2xl">Soft Skills</h2>
      <div className="flex gap-3 flex-wrap w-full">
        <TechPill type="Adaptability" />
        <TechPill type="Critical Thinking" />
        <TechPill type="Teamwork" />
        <TechPill type="Logical Reasoning" />
        <TechPill type="Multitasking" />
        <TechPill type="Pressure Handling" />
        <TechPill type="Problem Solving" />
        <TechPill type="Team Leading" />
        <TechPill type="Project Management" />
      </div>
    </section>
  )
}

