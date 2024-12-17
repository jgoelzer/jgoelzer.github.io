import { useState } from 'react';

import ProjectTitle from "../../Components/ProjectTitle"
import OverviewBlock from "../../Components/OverviewBlock"
import OverviewImage from "../../Components/OverviewImage"
import OverviewVimeo from '../../Components/OverviewVimeo';
import ProjectText from "../../Components/ProjectText"
import ModalImage from "../../Components/ModalImage"

import VivaImage from '/Viva.png'
import VivaImage1 from '/Viva1.png'


const Viva: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const maxamizeClicked = (image: string) => {
    setModalImageSrc(image);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const modalClicked = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }

  const vimeoUrl1 = "https://player.vimeo.com/video/1040143225?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1";

  return (
    <>
      <ProjectTitle>VIVA Virtual Tradeshow</ProjectTitle>
      <div className="text-sm text-center">Project Demo : 
        <a href="https://viva.propulsion.digital" target="_blank"> viva.propulsion.digital</a>
      </div>

      <OverviewBlock>
        <OverviewImage image={VivaImage} maxamize={() => maxamizeClicked(VivaImage)} />
        <ProjectText>
          During the hight of the COVID pandamic VIVA was searching for ways to increase engangement.
          A virtual 3D tradeshow was created. With user accessibility being paramount, web was the target platform.
          Babylon.js was chosen for it's small deployment size and fast load times.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
      <OverviewImage image={VivaImage1} maxamize={() => maxamizeClicked(VivaImage1)} />
      <OverviewVimeo url={vimeoUrl1} />
      </OverviewBlock>

      <ModalImage visible={showModal} onClick={modalClicked} image={modalImageSrc} />
    </>
  )
}

export default Viva
