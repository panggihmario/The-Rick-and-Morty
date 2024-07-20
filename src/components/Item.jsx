import {styled} from "styled-components";

const Card = styled.li`
  background-color : #282c34;
  height :350px;
  color : black;
  transition: 0.5s all ease 0s;
  border-radius : 10px;
  &:hover {
    transform : scale(1.1);
    z-index : 3;
    transition: 0.5s all ease 0s;
    box-shadow : 0 0 20px 20px rgba(0,0,0,1);
  }
  & img {
    width : 100%;
    height : 100%;
    object-fit : cover;
    dispaly : block;
    border-radius : 10px;
  }
`

const Item = ({item}) => {
  return (
    <Card>
      <img alt="" src={item.image} />
    </Card>
  )
}

export default Item