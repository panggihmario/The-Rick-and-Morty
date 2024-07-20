import { screen,render, fireEvent} from '@testing-library/react'
import Item from "./Item"

describe('Item Component', () => {
  it('should have props', async () => {

    const testProps = {
      image : 'url image',
      name : 'name char'
    }

    render(<Item item={testProps} />)
    const divElement = await screen.getByTestId('instance-name')
    const imageElement = await screen.getByTestId('instance-img');
    expect(divElement).toHaveTextContent(testProps.name)
    expect(imageElement).toHaveAttribute('src', testProps.image);
  })
})