import React from 'react'
import { Wrap, ItemText,ButtonGroup, LeftButton,
     Right, DownArrow, Buttons} from '../styles/syleHome'

     import Fade from 'react-awesome-reveal';


const Section = ({title, description, backgroundImg, leftButton,rightBtn  }) => {
  return (
    <Wrap bgImg ={backgroundImg}>
     <Fade top>
      <ItemText>
        <h1>{title}</h1>
        <p>{description} </p>
      </ItemText>
      </Fade>
<Buttons>
  <Fade bottom>
      <ButtonGroup>

            <LeftButton>
              {leftButton}
            </LeftButton>
         {rightBtn &&   
           <Right>
           {rightBtn}
           </Right>
           }

      </ButtonGroup>
      </Fade>

     
     <DownArrow src = "/images/down-arrow.svg"/>

     </Buttons>
    </Wrap>
      
    
  )
}

export default Section
