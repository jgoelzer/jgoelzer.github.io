import Modal from "./Modal";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  image: string;
  visible?: boolean;
}

const ModalImage: React.FC<Props> = ({ image, visible, ...rest }) => {

  return (
    <Modal visible={visible} {...rest}>
      <img src={image} className="rounded-3xl object-contain" />
    </Modal>
  );
}

export default ModalImage;