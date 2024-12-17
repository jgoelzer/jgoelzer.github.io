import OverviewBlock from "../Components/OverviewBlock"
import OverviewImage from "../Components/OverviewImage"
import OverviewText from "../Components/OverviewText"

import respicardiaImage from '/ZOLLRemede.png'
import vivaImage from '/Viva.png'
import reellImage from '/ReellHinge1.png'

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
          title="ZOLL remedē System"
          description="Interactive training tool for implantation of the remedē System."
          tags="Unity"/>
      </OverviewBlock>

      <OverviewBlock link="projects/viva">
        <OverviewImage image={vivaImage} />
        <OverviewText 
          title="VIVA"
          description="Virtual tradeshow"
          tags="Babylon.js"/>
      </OverviewBlock>

      <OverviewBlock link="projects/reell">
        <OverviewImage image={reellImage} />
        <OverviewText 
          title="Reell Hinge Selection Guide"
          description=""
          tags="React Native / Ruby on Rails"/>
      </OverviewBlock>
    </>
  )
}

export default Home
