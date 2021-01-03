import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components";



const Hero = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "HeroImage.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }  
        `
    )

    const ContainerStyled = styled(BackgroundImage)`
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      
      
      @media(min-width: 1024px) {
        background-size: 200%;
        background-position: 50% 50%;
      }
    `

    const SubjectStyled = styled.h1`
    
        color: #ffffff;
        font-family: "Teko",sans-serif;
      font-size: 30px;
      
      @media(min-width: 1024px) {
        font-size: 100px;
        align-self: flex-start;
        margin-left: 40px;
        font-weight: 600;
      }
        
    `;

    const BlackBacgroundOverlay = styled.div`
      width: 100%;
      height: 100vh;
      background: rgba(0,0,0,.4);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    `

    return (
        <ContainerStyled

            Tag="section"
            fluid={data.file.childImageSharp.fluid}
        >
            <BlackBacgroundOverlay>
                <SubjectStyled>Symetria Promienistra</SubjectStyled>
            </BlackBacgroundOverlay>
        </ContainerStyled>
    )
}
export default Hero;