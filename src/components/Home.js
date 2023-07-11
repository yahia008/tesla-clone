import React from 'react'
import { Container } from '../styles/syleHome'
import Section from './Section'


const Home = () => {
  return (
    
    <Container>
       
        <Section 
       title= 'Model s'
       description = 'Order Online For Touchless Delivery'
       backgroundImg ='model-s.jpg'
       leftButton = 'Custom Order'
       rightBtn ='Existing Inventory'

       />  
        <Section 
       title= 'Model X'
       description = 'Order Online For Touchless Delivery'
       backgroundImg ='model-x.jpg'
       leftButton = 'Custom Order'
       rightBtn ='Existing Inventory'

       />  
        <Section 
       title= 'Model 3'
       description = 'Order Online For Touchless Delivery'
       backgroundImg ='model-3.jpg'
       leftButton = 'Custom Order'
       rightBtn ='Existing Inventory'

       />  

<Section 
       title= 'Model Y'
       description = 'Order Online For Touchless Delivery'
       backgroundImg ='model-y.jpg'
       leftButton = 'Custom Order'
       rightBtn ='Existing Inventory'

       />  


<Section 
       title= 'Lowest Cost Solar Panels In America '
       description = 'Money-back guarantee'
       backgroundImg ='solar-panel.jpg'
       leftButton = 'Order now'
       rightBtn ='Learn more'

       />  


<Section 
       title= 'Solar for New Roofs'
       description = 'Solar Roof Cost Less than New Roof Plus panels'
       backgroundImg ='solar-roof.jpg'
       leftButton = 'Order now'
       rightBtn ='Learn more'

       />  


<Section 
       title= 'Accessories'
       description = ''
       backgroundImg ='accessories.jpg'
       leftButton = 'Order now'
       

       />  
 
         
    </Container>
    
  )
}

export default Home
