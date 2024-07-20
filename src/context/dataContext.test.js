import React from "react";
import { DataContext, DataContextProvider } from "./dataContext";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from 'axios';
import App from "../App";

describe('DataContext React with use Context', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should have items data' , async () => {
    const mockResp = [{ name: 'test' }]
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResp)
    render(<DataContextProvider><App/> </DataContextProvider>)
    const list = await screen.findAllByRole("list")
    expect(list).not.toHaveLength(0)
  })

  it('should set keyword after keydown enter', async () => {
    const TestComponent = () => {
      const { keywords , handleSearch } = React.useContext(DataContext)
      return (
        <div>
          <div data-testid="test-div" >{keywords}</div>
          <input onKeyDown={handleSearch} />
        </div>
      )
    }
    render(<DataContextProvider><TestComponent/></DataContextProvider>)
    const InputElement = await screen.getByRole('textbox')
    const DivElement = await screen.getByTestId('test-div')
    fireEvent.keyDown(InputElement, { key : 'Enter', code : 'Enter', target : { value : 'testing keyword'}})
    expect(DivElement.textContent).toBe('testing keyword')
  })
})


