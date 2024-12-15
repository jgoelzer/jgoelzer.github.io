import OverviewBlock from "../Components/OverviewBlock"
import OverviewImage from "../Components/OverviewImage"
import OverviewText from "../Components/OverviewText"

import respicardiaImage from '/DSC_0216.jpg'

const Home: React.FC = () => {

  return (
    <>
      <div className="container text-center">
        <h1 className="text-xl">JASON GOELZER</h1>
        <h2 className="text-base">SOFTWARE ENGINEER</h2>
        <h3 className="text-xs py-3">DELIVERING AMAZING SOFTWARE SINCE 1994</h3>
      </div>

      <OverviewBlock link="projects/remede">
        <OverviewImage image={respicardiaImage} />
        <OverviewText 
          title="ZOLL remedē® System"
          description="Interactive training tool for implantation of the remedē® System."
          tags="Unity"/>
      </OverviewBlock>

      <OverviewBlock link="test">
        <OverviewImage image={respicardiaImage} />
        <OverviewText 
          title="ZOLL remedē® System"
          description="Interactive training tool for implantation of the remedē® System."
          tags="Unity"/>
      </OverviewBlock>
    </>
  )
}

export default Home
