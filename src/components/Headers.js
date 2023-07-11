import React from 'react'
import { Container, Menu, RightMenu, CustomMenu, BurgerMenu, CostomClose, CloseWrap} from '../styles/headerStyle'
import { useState } from 'react'
import { selectCars } from '../features/cartSlice/carSlice'
import {useSelector} from 'react-redux'


const Headers = () => {
 

  const [open, setOpen] = useState(false)

   const cars = useSelector(selectCars)


  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt =''/>
      </a>

      <Menu>
        {cars && cars.map((car, index) => (<a key={index} href='#'>{car}</a>)) }
        
        

        
      </Menu>
      
      <RightMenu>
        <a href='#'>Shop</a> 
        <a href='#'>Tesla Account</a>
         <CustomMenu onClick={()=> setOpen(true)}/>

      </RightMenu>

     <BurgerMenu show = {open}> 
     <CloseWrap>
      <CostomClose onClick={()=> setOpen(false)} />
      </CloseWrap>
       
      
     <li><a href='#'>Existing Inventory</a></li>
     <li><a href='#'>Used Inventory</a></li>
     <li><a href='#'>Trade Inventory</a></li>
     <li><a href='#'>Cybertruck</a></li>
     <li><a href='#'>Roadster</a></li>
     <li><a href='#'>Existing Inventory</a></li>
     <li><a href='#'>Existing Inventory</a></li>
     
     

     </BurgerMenu>

    </Container>
      
  
  )
}

export default Headers
