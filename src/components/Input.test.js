import { screen,render, fireEvent} from '@testing-library/react'
import InputField from './Input'

describe('Input component' ,() => {
  const setup = () => {
    const utils = render(<InputField />)
    const InputElement = screen.getByRole('textbox')
    return {
      InputElement,
      ...utils,
    }
  }
  it('should render input component', () => {
    const {InputElement} = setup()
    expect(InputElement).toBeInTheDocument()
  })

  it('should hav value after enter on keyboard', () => {
    const {InputElement} = setup()
    expect(InputElement).toBeInTheDocument()
    expect(InputElement.value).toBe('')
    fireEvent.keyDown(InputElement, { key : 'Enter', code : 'Enter', target : { value : 'test'}})
    expect(InputElement.value).toBe('test')
    
  })
})
