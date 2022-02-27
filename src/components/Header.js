import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { style } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
 

function Header() {

const [burgerOpen, setClose] = useState(false);

  return (
    <Container>
    
    <a>
      <img src="/Images/logo.svg"/>
    </a>
    <Menu>
      <a href="#">Model S</a>
       <a href="#">Model Y</a>
       <a href="#">Model X</a>
       <a href="#">Model 3</a>
    </Menu>

    <RightMenu>
      <a href="#">Shop</a>
      <a href=" #"> Tesla Account</a>
      <CustomMenu onClick={() => setClose(true)}/>
    </RightMenu>

    <BurgerNav show={burgerOpen}>
      <CloseWrapper>
         <CustomClose onClick={() => setClose(false)}/>
      </CloseWrapper>
      
       <li><a href='#'>Existing Inventory</a></li>
       <li><a href='#'>Used Inventory</a></li>
       <li><a href='#'>Trade-in </a></li>
       <li><a href='#'>CyberTruck</a></li>
       <li><a href='#'>Roadaster</a></li>
       <li><a href='#'>Existing Inventory</a></li>
       <li><a href='#'>Existing Inventory</a></li>

    </BurgerNav>


    </Container>
  )
}

export default Header

const Container = styled.div`
 min-height: 60px;
 position: Fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 20px;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
a  {
  padding: 0 20px;
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;
}
@media (max-width: 768px) {
  display: none;
}
`

const RightMenu = styled.div`
 display: flex;
 align-items: center;
a  {
  margin-right: 20px;
  font-weight: 600;
  text-transform: uppercase;
  
}
`


const CustomMenu = styled(MenuIcon)`
   cursor: pointer;
`


const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translate(0)' : 'translate(100%)'};
  transition: transform .5s ease-in;
  li{ 
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
      font-weight: 600;

    }

  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`


const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`