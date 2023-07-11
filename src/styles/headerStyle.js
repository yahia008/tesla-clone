import { styled } from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Container =styled.div `
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content :space-between;
padding:0 20px ;
top: 0;
left: 0;
right: 0;
z-index:1;
`


export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a {
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}

  @media (max-width:768px) {
    display:none;
  }

`

export const RightMenu = styled.div`
   
   display: flex;
   align-items: center;
   
  a {
      
    font-weight: 600;
    text-transform:uppercase;
    margin-right: 10px;
     
  @media (max-width:400px) {
    display:none;
  }

    }

 

 
`

export const CustomMenu = styled(MenuIcon)`
 cursor:pointer;

`
export const BurgerMenu = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:250px;
z-index:16 ;
list-style: none;
padding:20px;
display:flex;
flex-direction:column;
align-items:start;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; 
transition:transform 0.5s ;


li {
  padding:15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
    
  a {
    font-weight: 600;
  }

}
`



export const CostomClose = styled(CloseIcon)`
cursor:pointer;
`


export const CloseWrap = styled.div`

  right:0;
  width:100%;
  display:flex;
  justify-content:flex-end; 


  
`