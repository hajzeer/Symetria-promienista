import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/PortfolioList";

const ButtonStyled = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  outline: none;
  margin-left: 20px;
  padding: 0;
  z-index: 9999;
  position: fixed;
`;

const BackArrowIcon = styled.i`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    border: 3px solid #242424;
    transition: transform .5s ease-out;
    border-radius: 22px;
  
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 5px;
  }
  &::after {
    width: 10px;
    height: 10px;
    border-bottom: 3px solid #242424;
    border-left: 3px solid #242424;
    transform: rotate(45deg);
    bottom: 7px
  }
  &::before {
    width: 15px;
    height: 2.6px;
    bottom: 10px;
    background: #242424;
  }
  
  &:hover {
    transform: translateX(-15px);
  }
  &:active {
    transform: translateX(-50px);
  }
`

const SubjectStyled = styled.h2`
  text-align: center;
  margin: 20px;
  
  @media(min-width: 1024px) {
    font-size: 40px;
  }
`



const PortfolioPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                image22: file(relativePath: { eq: "custom/image22.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image25: file(relativePath: { eq: "custom/image25.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image29: file(relativePath: { eq: "custom/image29.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image33: file(relativePath: { eq: "custom/image33.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image36: file(relativePath: { eq: "custom/image35.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image39: file(relativePath: { eq: "custom/image39.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image5: file(relativePath: { eq: "custom/image5.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image37: file(relativePath: { eq: "custom/image37.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image1: file(relativePath: { eq: "custom/image1.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image40: file(relativePath: { eq: "custom/image40.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image18: file(relativePath: { eq: "custom/image18.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image15: file(relativePath: { eq: "custom/image15.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image10: file(relativePath: { eq: "custom/image10.jpeg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                image43: file(relativePath: { eq: "custom/image43.jpg" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
   const works: Array<any> = [
       {
           id: 0,
           name: 'FIRE SNAKE',
           image: data.image22.childImageSharp.fluid
       },
      {
          id: 1,
          name: 'KOI FISH',
          image: data.image25.childImageSharp.fluid
      },
      {
          id: 2,
          name: 'THE GREAT WAVE OFF KANAGAWA',
          image: data.image29.childImageSharp.fluid
      },
      {
          id: 3,
          name: 'JAPANESE LANDSCAPE',
          image: data.image33.childImageSharp.fluid
      },
      {
          id: 4,
          name: 'CHILDHOOD',
          image: data.image36.childImageSharp.fluid
      },
      {
          id: 5,
          name: 'PAC MAN',
          image: data.image39.childImageSharp.fluid
      },
      {
          id: 6,
          name: 'FRIENDS',
          image: data.image5.childImageSharp.fluid
      },
      {
          id: 7,
          name: 'FLAMINGO',
          image: data.image37.childImageSharp.fluid
      },
      {
          id: 8,
          name: 'WAKEBOARD',
          image: data.image1.childImageSharp.fluid
      },
      {
          id: 9,
          name: 'POKEDEX',
          image: data.image40.childImageSharp.fluid
      },
      {
          id: 10,
          name: 'LA CASA DE PAPEL',
          image: data.image18.childImageSharp.fluid
      },
      {
          id: 11,
          name: '¿GOD?',
          image: data.image15.childImageSharp.fluid
      },
      {
          id: 12,
          name: 'CYBERPUNK',
          image: data.image10.childImageSharp.fluid
      },
      {
          id: 13,
          name: 'IDEAS',
          image: data.image43.childImageSharp.fluid
      },
    ]
    return(
        <Layout>
            <SEO title="Portfolio" />
            <ButtonStyled as={Link} to='/'>
                <BackArrowIcon/>
            </ButtonStyled>
            <SubjectStyled>Portfolio</SubjectStyled>

            <Portfolio works={works}/>
        </Layout>
        )
}

export default PortfolioPage;
