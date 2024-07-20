import {styled} from "styled-components";

const CardContainer = styled.ul`
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  margin : 0 auto;
  gap : 20px;
  width : 100%;
  padding : 0;
  @media(max-width :1000px) {
     grid-template-columns : repeat(3, 1fr);
  }
  @media(max-width :500px) {
    grid-template-columns : repeat(1, 1fr);
  }
`

export default CardContainer