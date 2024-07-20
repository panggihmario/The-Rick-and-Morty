import { styled } from "styled-components"
import titleimg from "../assets/rickmorty.png"
const Container = styled.div`
  display  : flex;
  justify-content : center;
  & img {
    height : 120px;
  }
`

const ImageTitle = () => {
  return (
    <Container>
      <img alt="" src={titleimg}  />
    </Container>
  )
}

export default ImageTitle