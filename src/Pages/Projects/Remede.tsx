import { useState } from 'react';

import ProjectTitle from "../../Components/ProjectTitle"
import OverviewBlock from "../../Components/OverviewBlock"
import OverviewImage from "../../Components/OverviewImage"
import OverviewVimeo from '../../Components/OverviewVimeo';
import ProjectText from "../../Components/ProjectText"
import ModalImage from "../../Components/ModalImage"

import ZOLLRemede from '/ZOLLRemede.png'


const Remede: React.FC = () => {
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

  const vimeoUrl1 = "https://player.vimeo.com/video/1039079248?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1";
  const vimeoUrl2 = "https://player.vimeo.com/video/1040072688?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&muted=1";
  const vimeoUrl3 = "https://player.vimeo.com/video/1040131382?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&muted=1";


  return (
    <>
      <ProjectTitle>ZOLL remedē System</ProjectTitle>

      <OverviewBlock>
        <OverviewImage image={ZOLLRemede} maxamize={() => maxamizeClicked(ZOLLRemede)} />
        <ProjectText>
          ZOLL's remedē is an implantable device that helps treat central sleep apnea. 
          Partners at ZOLL recognized that implanting the device had unique challenges and the training
          of physicians would be greatly improved with an interactive tool.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
        <OverviewVimeo url={vimeoUrl2} />
        <ProjectText>
          Six different vein structures were developed which highlight the most common anatomical presentations.
          <br/><br/>
          Anatomy callouts were implemented to asssit with identification and training.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
        <OverviewVimeo url={vimeoUrl1} />
        <ProjectText>
          Simulated contrast injection was a primary requirement. A spline based editor tool was created which 
          generates flow data textures mapped to UVs. These textures are then used by a custom shader to animate the contrast
          through the veins and heart.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
        <OverviewVimeo url={vimeoUrl3} />
        <ProjectText>
          3D artitsts meticulously created animation of the catheters and leads for each anatomical presentation.
          <br/><br/>
          A custom build of Alembic for Unity was implemented to allow for a streamlined, multi-platform 
          animation pipeline which includes iOS.
          <br/><br/>
          Unity timelines and event triggers were implemented for easy management of the 
          scrubbable timeline interface and event points.
        </ProjectText>
      </OverviewBlock>

      <ModalImage visible={showModal} onClick={modalClicked} image={modalImageSrc} />
    </>
  )
}

export default Remede
