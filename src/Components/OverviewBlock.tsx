import { ReactNode } from 'react';
import { Link } from "react-router";

interface Props {
  link?: string;
  children: ReactNode;
}

const OverviewBlock: React.FC<Props> = ({ link, children }) => {
  const Block = (
    <div className="flex flex-col gap-5 my-8 p-4
        sm:flex-row bg-slate-300 dark:bg-slate-800
        rounded-xl">
      {children}
    </div>
  );

  return (
    <div className="container">
      {link ? <Link to={link} className="hover:brightness-[95%]">{Block}</Link> : Block}       
    </div>
  )
}

export default OverviewBlock
