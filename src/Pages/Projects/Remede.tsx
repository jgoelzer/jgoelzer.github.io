import ProjectTitle from "../../Components/ProjectTitle"
import OverviewBlock from "../../Components/OverviewBlock"
import OverviewImage from "../../Components/OverviewImage"
import ProjectText from "../../Components/ProjectText"

import respicardiaImage from '/DSC_0216.jpg'

const Remede: React.FC = () => {

  return (
    <>
      <ProjectTitle>ZOLL remedē® System</ProjectTitle>

      <OverviewBlock>
        <OverviewImage image={respicardiaImage} zoom/>
        <ProjectText>
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit id eros eget ultrices. 
          Cras eu fermentum nisl. Vestibulum ac feugiat magna. Aenean libero est, pellentesque et ante ac, 
          posuere ultrices dui. Donec porttitor commodo mi, sed semper mi fermentum sed. 
          Quisque ullamcorper pretium aliquet. Curabitur vel ex porttitor, laoreet lectus vitae, 
          feugiat enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
          ac turpis egestas. Duis sit amet ligula sagittis, feugiat dui maximus, dictum diam. 
          Proin elementum sed eros non luctus. Aliquam erat volutpat. Aenean a arcu dignissim, 
          hendrerit justo vel, molestie dui. Donec vehicula dictum quam ac fringilla. 
          Cras cursus cursus blandit. Morbi eu commodo dui.
          <br/>
          Sed luctus magna nec accumsan ornare. In ligula risus, dignissim id enim eu, aliquet viverra eros. 
          Integer vel ex posuere, ultrices lacus sit amet, imperdiet erat. Phasellus dui nisi, 
          condimentum vel turpis id, tempor malesuada ante. Etiam sodales tempus blandit. 
          Aliquam ultricies aliquet tortor in mollis. In porta vel nulla et interdum. 
          Curabitur sit amet tellus eget justo scelerisque luctus quis sit amet massa. 
          Pellentesque vestibulum quam non porta vestibulum. Quisque quis mi vel erat placerat 
          laoreet eget quis magna. Aenean malesuada pulvinar nulla, nec condimentum risus tempus maximus. 
          Suspendisse at elit nec massa sodales sollicitudin. Pellentesque iaculis purus eget laoreet 
          vestibulum. Nullam efficitur, eros nec suscipit maximus, sapien risus imperdiet massa, 
          a malesuada metus sapien nec quam. Nulla blandit sit amet nulla et venenatis. 
          Vestibulum ultricies est sollicitudin dictum ornare.
          "
          </ProjectText>
      </OverviewBlock>
    </>
  )
}

export default Remede
