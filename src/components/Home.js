import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SEction  from './SEction'

function Home() {
  return (
    <Container>
        <SEction
        title = "Model S"
        description="Order Online for Touchless Delivery...."
        backgroundImg = "/Images/model-s.jpg"
        leftbutton =  "Custom Order"
        rightbutton = "  Existing Inventory"
        />

        <SEction
        title="Mosel Y"
        description="Order Online for Touchless Delivery...."
        backgroundImg = "/Images/model-y.jpg"
        leftbutton =  "Custom Order"
        rightbutton = "  Existing Inventory"
        />

        <SEction
        title="Model X"
        description="Order Online for Touchless Delivery...."
        backgroundImg = "/Images/model-x.jpg"
        leftbutton =  "Custom Order"
        rightbutton = "  Existing Inventory"
        />

        <SEction
        title="Model 3"
        description="Order Online for Touchless Delivery...."
        backgroundImg = "/Images/model-3.jpg"
        leftbutton =  "Custom Order"
        rightbutton = "  Existing Inventory"
        />

        <SEction
        title="Lowest Cost Solar Panels"
        description="Money Back Guarantee...."
        backgroundImg = "/Images/solar-panel.jpg"
        leftbutton =  "Order Now"
        rightbutton = "Learn More"
        />

        <SEction
        title="Solar Panels for Roof"
        description="Price of Solar Less than New Roof...."
        backgroundImg = "/Images/solar-roof.jpg"
        leftbutton =  "Order Now"
        rightbutton = "Learn More"
        />

        <SEction
        title="Accessories"
        description=""
        backgroundImg = "/Images/accessories.jpg"
        leftbutton =  "Shop Now"
        />
    </Container>
  )
}


export default Home

const Container = styled.div`
  height: 100vh;  
`