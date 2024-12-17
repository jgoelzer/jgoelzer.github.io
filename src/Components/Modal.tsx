import { ReactNode } from "react"
import type { ComponentPropsWithoutRef } from "react";


interface Props extends ComponentPropsWithoutRef<"div"> {
  visible?: boolean;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ visible, children, ...rest }) => {

  return (
    <div {...rest} className={`inline-flex fixed justify-center align-middle 
      p-2 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 
      transition duration-300 ease-in-out 
      ${visible ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {children}
    </div>
  );
}

export default Modal;