import { FaMaximize } from "react-icons/fa6"

interface Props {
  image: string;
  maxamize?(): void;
}

const OverviewImage: React.FC<Props> = ({ image, maxamize }) => {

  const zoomIcon = (
    <div className="w-full h-full" onClick={maxamize}>
      <FaMaximize className="absolute bottom-1 right-1 text-xl text-white bg-black bg-opacity-30" />
    </div>
  );

  return (
    <div className="flex w-full h-full justify-center">
      <div className="inline-flex relative">
        <img src={image} className="rounded-xl max-h-44 sm:max-h-56" />
        {maxamize ? zoomIcon : null}
      </div>
    </div>
  )
}

export default OverviewImage
