interface Props {
  title?: string;
  description?: string;
  tags?: string;
}

const OverviewText: React.FC<Props> = ({ title, description, tags }) => {

  return (
    <div className="w-full flex flex-col">
      {title ? <h2 className="font-semibold pb-2">{title}</h2> : null}
      {description ? <p className="text-sm pb-2">{description}</p> : null}
      {tags ? <p className="text-sm">{tags}</p> : null}
    </div>
  )
}

export default OverviewText
