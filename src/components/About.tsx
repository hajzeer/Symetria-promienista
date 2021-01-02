import React from "react";
import styled from "styled-components";
import {useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";


const About = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "imageAbout1.jpg" }) {
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
    
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      
    `;

    const ParagraphStyled = styled.p`
            
      font-family: "Teko",sans-serif;
      margin: 20px;
      font-size: 25px;
      color: #242424;
      
      @media(min-width: 1024px) {
        font-size: 40px;
        width: 50%;
        align-self: flex-start;
        margin-top: 200px;
      }
    `;

    const ImageStyle = styled(Img)`
    
      width: 70%;
      align-self: flex-end;
      transform: rotate(30deg);
      position: relative;
      
      @media (min-width: 1024px) {
        width: 500px;
        height: 500px;
        margin-top: -300px;
      }
      
    `;

    const ButtonStyle = styled.button`
      font-family: "Teko",sans-serif;
      font-size: 20px;
      font-weight: 500;
      width: 100px;
      background: transparent;
      border-radius: 25px;
      border: 3px solid #242424;
      color: #242424;
      align-self: flex-start;
      text-align: center;
      text-decoration: unset;
      margin-left: 20px;
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
      
      
      @media(min-width: 1024px) {
        font-size: 40px;
        width: 400px;
        padding: 10px;
        margin-left: 40px;
      }
    `;
    const SymbolStyled1 = styled.div`
            
            position: absolute;
      width: 200px;
      height: 200px;
      transform: rotate(30deg);
      background: #8cff90;
      top: 5%;
      left: 1%;
      z-index: -1;
      
      @media(min-width: 1024px) {
        width: 500px;
        height: 500px;
      }
    `

    return (
        <ContainerStyled>
            <SymbolStyled1/>
            <ParagraphStyled>
                Hi, <br/>
                Add some color to your life I'm Zuzanna young artist and clothes painter with crazy vision
                I would like to present you my previous works to give you an opportunity to paint you closet
            </ParagraphStyled>
            <ButtonStyle as={Link} to='/portfolio'>Zajrzyj do portfolio</ButtonStyle>
            <ImageStyle fluid={data.file.childImageSharp.fluid}/>
        </ContainerStyled>
    )
}
export default About;