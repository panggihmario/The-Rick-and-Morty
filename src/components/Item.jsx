import {styled} from "styled-components";

const Card = styled.li`
  background-color : #282c34;
  height :350px;
  color : black;
  transition: 0.5s all ease 0s;
  border-radius : 10px;
  position : relative;
  list-style : none;
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
    display : block;
    border-radius : 10px;
  }
  & div {
    position : absolute;
    bottom : 0;
    color : white;
    width: -webkit-fill-available;
    border-radius : 0 0 10px 10px;
    background-color : rgba(0,0,0,0.5);
    padding : 10px;
  }
`

const Item = ({item}) => {
  return (
    <Card>
      <img alt="" src={item.image} />
      <div>{item.name}</div>
    </Card>
  )
}

export default Item