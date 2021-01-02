import React from 'react';
import styled from "styled-components";
import Img from "gatsby-image";

interface IComponentProp {
    readonly items: {
        id: number,
        name: string,
        image: string
    }
}

export interface IItem {
    readonly id: number,
    readonly name: string,
    readonly image: string
}


const ContainerStyled = styled.section`

    width: 100%;
    height: auto;
  background: #8cff90;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
`;


const ImageStyled = styled(Img)`
  width: 90%;
  height: 90%;
  margin: 20px;
`;

const ButtonStyle = styled.button`
      font-family: "Teko",sans-serif;
      font-size: 20px;
      font-weight: 500;
      width: 150px;
      margin-bottom: 20px;
      background: transparent;
      border-radius: 25px;
      border: 3px solid #242424;
      color: #242424;
      text-align: center;
      text-decoration: unset;
      outline: none;
      transition: transform .3s ease-out;
      cursor: pointer;
      
      &:hover {
        transform: scale(1.1);
        -webkit-appearance: none;
        box-shadow: 0 9px 50px 0 rgba(119, 119, 119, .7);
        -moz-box-shadow: 0 9px 50px 0 rgba(119, 119, 119, .7);
        -webkit-box-shadow: 0 9px 50px 0 rgba(119, 119, 119, .7);
      }
      &:active {
        transform: scale(.8);
      }
    `;

const TextStyled = styled.p`
  font-family: "Teko",sans-serif;
  font-size: 30px;
  font-weight: 500;
  
`


const PortfolioListItem = ({items}: IComponentProp) => {
        return(
            <ContainerStyled key={items.id}>
                <ImageStyled fluid={items.image}/>
                <TextStyled>{items.name}</TextStyled>
                <ButtonStyle>Więcej informacji</ButtonStyle>
            </ContainerStyled>
        )
}
export default PortfolioListItem;