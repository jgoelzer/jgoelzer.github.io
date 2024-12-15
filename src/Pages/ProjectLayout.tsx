import { Outlet } from "react-router";
import ProjectHeading from "./ProjectHeading";

const ProjectLayout: React.FC = () => {

  return (
    <>
      <ProjectHeading/>
      <Outlet/>
    </>
  );
}

export default ProjectLayout;
