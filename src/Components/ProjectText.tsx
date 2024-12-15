import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const ProjectText: React.FC<Props> = ({ children }) => {

  return (
    <div className="w-full flex flex-col">
      {children}
    </div>
  )
}

export default ProjectText
