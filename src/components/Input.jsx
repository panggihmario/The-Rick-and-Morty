import {styled} from "styled-components";

const Input = styled.input`
  display : block;
  padding : 8px 6px;
  margin-bottom : 40px;
  width : 200px;
  border-radius : 4px;
  border : none;
  font-weight : 600;
  &:focus {
    outline : none;
  }
`
const InputField = ({...props}) => {
  return (
    <Input label="input" {...props} />
  )
}

export default InputField