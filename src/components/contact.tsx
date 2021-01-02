import React from 'react';
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Contact = () => {
    const data = useStaticQuery(
        graphql`
            query {
                image: file(relativePath: { eq: "image2.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }

                instagram: file(relativePath: { eq: "instagram.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    const ContainerStyled = styled.section`
      position: relative;
        width: 100%;
        height: 100vh;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      @media(min-width: 1024px) {
        overflow: hidden;
      }
    `;

    const ParagraphStyled = styled.p`
      font-family: "Teko",sans-serif;
      margin: 20px;
      font-size: 25px;
      color: #242424;
      margin-bottom: 60px;

      @media(min-width: 1024px) {
        font-size: 40px;
      }
    `;
    const ImageStyle = styled(Img)`
    
      width: 70%;
      align-self: flex-start;
      transform: rotate(-60deg);
      position: relative;

      @media (min-width: 1024px) {
        width: 500px;
        height: 500px;
      }
    `;

    const SymbolStyled1 = styled.div`
            
            position: absolute;
      width: 150px;
      height: 150px;
      background: #8cff90;
      transform: rotate(30deg);
      top: 12%;
      left: 1%;
      z-index: -1;

      @media(min-width: 1024px) {
        width: 500px;
        height: 500px;
      }
    `
    const SymbolStyled2 = styled.div`
            
            position: absolute;
      width: 150px;
      height: 150px;
      transform: rotate(30deg);
      background: #8cff90;
      top: 30%;
      right: 5%;
      z-index: -1;

      @media(min-width: 1024px) {
        width: 500px;
        height: 500px;
      }
    `;

    const ButtonStyle = styled.button`
      
      width: 75px;
      height: 75px;
      padding: 0;
      margin: 0;
      background: transparent;
      border: none;
      border-radius: 100%;
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

    const ButtonImageStyle = styled(Img)`
    width: 100%;
      height: 100%;
      z-index: 1;
        
    `;

    const handleClick :React.MouseEventHandler<HTMLButtonElement> = (e) => {

        e.preventDefault()
        const instagramUrl: string = `https://www.instagram.com/symetriapromienista/`
        window.open(instagramUrl,'_blank')
    }

    return (
        <ContainerStyled>
            <SymbolStyled1/>
            <ParagraphStyled>If you are interested in write me DM on Instagram</ParagraphStyled>
            <ButtonStyle onClick={handleClick}>
                <ButtonImageStyle fluid={data.instagram.childImageSharp.fluid}/>
            </ButtonStyle>
            <ParagraphStyled> Every project is individual prepare with passion special for you</ParagraphStyled>
            <ImageStyle fluid={data.image.childImageSharp.fluid}/>
            <SymbolStyled2/>
        </ContainerStyled>
    )
}

export default Contact;