import React from "react";
import styled from "styled-components";

import PortfolioListItem, {IItem} from "./PortfolioListItem";


interface WorksListProps {
    works: Array<IItem>
}

const ListStyled = styled.section`
  display: grid;
  margin: 10px;
  
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    margin: 50px;
  }
    
`

const Portfolio = ({works}: WorksListProps) => {
    return (
        <ListStyled>
            {works.map(work => {
                return <PortfolioListItem items={work}/>
            })

            }
        </ListStyled>
    )
}

export default Portfolio