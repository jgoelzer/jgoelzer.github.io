import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProjectTitle: React.FC<Props> = ({ children }) => {

  return (
    <div className="container text-center">
      <h1 className="text-xl py-5">{children}</h1>
    </div>
  )
}

export default ProjectTitle