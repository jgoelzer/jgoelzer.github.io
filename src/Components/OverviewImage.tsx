import { FaMaximize } from "react-icons/fa6"
import { useState } from 'react'


interface Props {
  image: string;
  zoom?: boolean;
}

const OverviewImage: React.FC<Props> = ({ image, zoom }) => {
  const [showZoom, setShowZoom] = useState(false);

  const zoomClicked = () => {
    setShowZoom(true);
    document.body.style.overflow = 'hidden';
  }
  const fullImageClicked = () => {
    setShowZoom(false);
    document.body.style.overflow = 'unset';
  }

  const zoomIcon = (
    <div className="w-full h-full" onClick={zoomClicked}>
      <FaMaximize className="absolute bottom-1 right-1 text-xl text-white bg-black bg-opacity-30" />
    </div>
  );

  return (
    <div className="flex w-full h-full justify-center">
      <div className="inline-flex relative">
        <img src={image} className="rounded-xl max-h-44 sm:max-h-56" />
        {zoom ? zoomIcon : null}
      </div>
      <div onClick={fullImageClicked} className={`inline-flex fixed justify-center align-middle 
          p-2 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 
          transition duration-300 ease-in-out ${showZoom ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <img src={image} className="rounded-3xl object-contain" />
      </div>
    </div>
  )
}

export default OverviewImage
