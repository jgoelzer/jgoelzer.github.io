import Modal from "./Modal";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  image: string;
  visible?: boolean;
}

const ModalImage: React.FC<Props> = ({ image, visible, ...rest }) => {

  return (
    <Modal visible={visible} {...rest}>
      <>
        <div className="relative">
          <iframe src="https://player.vimeo.com/video/1039079248?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-0 left-0, w-auto h-auto border-none"
            title="Respicardia_Injection"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </>
    </Modal>
  );
}

export default ModalImage;