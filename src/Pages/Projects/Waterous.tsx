import { useState } from 'react';

import ProjectTitle from "../../Components/ProjectTitle"
import OverviewBlock from "../../Components/OverviewBlock"
import OverviewImage from "../../Components/OverviewImage"
import OverviewVimeo from '../../Components/OverviewVimeo';
import ProjectText from "../../Components/ProjectText"
import ModalImage from "../../Components/ModalImage"

import WaterousImage1 from '/Waterous1.png'
import WaterousImage2 from '/Waterous2.png'


const Waterous: React.FC = () => {
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

  const vimeoUrl1 = "https://player.vimeo.com/video/1040526879?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&muted=1";

  return (
    <>
      <ProjectTitle>Waterous Endurance Interactive</ProjectTitle>

      <OverviewBlock>
        <OverviewImage image={WaterousImage1} maxamize={() => maxamizeClicked(WaterousImage1)} />
        <ProjectText>
          Product visualization with the highest visual quality while still targeting
          business class hardware requirements. Attention was given to every detail. The engineers at
          Waterous would keep us in check every step of the way. Every bolt, chain link,
          and gear tooth was accounted for.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
        <OverviewImage image={WaterousImage2} maxamize={() => maxamizeClicked(WaterousImage2)} />
        <OverviewVimeo url={vimeoUrl1} />
      </OverviewBlock>

      <ModalImage visible={showModal} onClick={modalClicked} image={modalImageSrc} />
    </>
  )
}

export default Waterous
