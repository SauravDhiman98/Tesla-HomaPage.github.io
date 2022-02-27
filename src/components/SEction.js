import { getByTitle } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Bounce from 'react-reveal/Bounce';

function SEction({ title, description, leftbutton, rightbutton, backgroundImg }) {
    console.log(backgroundImg);
    return (

        <Wrap bgImage={backgroundImg}>
            <Bounce bottom>
                <ItemText>
                    <h1>
                        {title}
                    </h1>

                    <p>
                        {description}
                    </p>
                </ItemText>
            </Bounce>
            <Buttons>
                <Bounce bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftbutton}
                        </LeftButton>
                        {rightbutton &&
                            <RightButton>
                                {rightbutton}
                            </RightButton>
                        }

                    </ButtonGroup>
                </ Bounce>
                <DownArrow src="/Images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}


export default SEction

const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   // background-image: url("/Images/model-3.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between; // Vertical 
     align-items: center; // horizontal
     background-image: ${props => `url(${props.bgImage})`};;
`
const ItemText = styled.div`
     padding-top: 15vh;
     text-align: center;
     z-index: -1;
`

const ButtonGroup = styled.div`
       display: flex;
       margin-buttom: 30px;
       @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;    
`
const RightButton = styled(LeftButton)`
 background-color: white;
 opacity: 0.65;
 color: black;
`

const DownArrow = styled.img`
   height:40px; 
   margin-top: 20px;
   animation: animateDown infinite 1.5s;
   overflow-x: hidden;
   
`

const Buttons = styled.div`
   
`