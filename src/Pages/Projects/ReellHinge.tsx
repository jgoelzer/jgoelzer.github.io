import { useState } from 'react';

import ProjectTitle from "../../Components/ProjectTitle"
import OverviewBlock from "../../Components/OverviewBlock"
import OverviewImage from "../../Components/OverviewImage"
import ProjectText from "../../Components/ProjectText"
import ModalImage from "../../Components/ModalImage"

import ReellImage1 from '/ReellHinge1.png'
import ReellImage2 from '/ReellHinge2.png'
import ReellImage3 from '/ReellHinge3.png'
import ReellImage4 from '/ReellHinge4.png'
import ReellImage5 from '/ReellHinge5.png'



const ReellHinge: React.FC = () => {
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

  return (
    <>
      <ProjectTitle>Reell Hinge Selection Guide</ProjectTitle>
      <div className="text-sm text-center">
        <a href="https://hingeguide.reell.com" target="_blank"> hingeguide.reell.com</a>
      </div>

      <OverviewBlock>
        <OverviewImage image={ReellImage2} maxamize={() => maxamizeClicked(ReellImage2)} />
        <ProjectText>
          Reell's Hinge Selection Guide helps facilitate their sales efforts and allows users to
          identify which products will best suit their needs.
          <br /><br />
          The app was implemented using React Native and React Native for Web allowing for a single
          codebase to be deployed for iOS, Android, and web. Redux was used for managing
          application state and calls to the back-end api.
        </ProjectText>
      </OverviewBlock>

      <OverviewBlock>
        <OverviewImage image={ReellImage1} maxamize={() => maxamizeClicked(ReellImage1)} />
        <OverviewImage image={ReellImage3} maxamize={() => maxamizeClicked(ReellImage3)} />
      </OverviewBlock>

      <OverviewBlock>
        <div className="flex flex-col gap-2 w-full h-full justify-center">
          <OverviewImage image={ReellImage4} maxamize={() => maxamizeClicked(ReellImage4)} />
          <OverviewImage image={ReellImage5} maxamize={() => maxamizeClicked(ReellImage5)} />
        </div>
        <ProjectText>
          Ruby on Rails back-end is built using ActiveAdmin and exposes API endpoints for the React front-end.
          <br/><br/>
          Localization for the app is also stored within the back-end allowing Reell to quickly update not only
          the products and their filter criteria but any UI text as well. 
          <br/><br/>
          The app is hosted on a Linode VPS running AlmaLinux 9, Apache, MariaDB, and is managed in-house. 
          Capistrano is used for deployment.
        </ProjectText>
      </OverviewBlock >

      <ModalImage visible={showModal} onClick={modalClicked} image={modalImageSrc} />
    </>
  )
}

export default ReellHinge
