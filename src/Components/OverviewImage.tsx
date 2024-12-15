interface Props {
  image: string;
}

const OverviewImage: React.FC<Props> = ({ image }) => {

  return (
    <div className="w-full h-full">
      <img src={image} className="rounded-lg max-h-44 sm:max-h-56 m-auto" />
    </div>
  )
}

export default OverviewImage
