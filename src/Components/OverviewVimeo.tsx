
interface Props {
  url: string;
}

const OverviewVimeo: React.FC<Props> = ({ url }) => {

  return (
    <div className="flex w-full h-full justify-center">
      <div className="inline-flex relative">
        <iframe src={url}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="border-none h-44 sm:h-56 w-96 sm:w-96"></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  )
}

export default OverviewVimeo
