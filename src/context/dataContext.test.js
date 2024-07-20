import React from "react";
import { DataContext, DataContextProvider } from "./dataContext";
import { render, screen } from "@testing-library/react";
import axios from 'axios';
import App from "../App";

describe('data context', () => {
  afterEach(() => {
    // jest.restoreAllMocks();
  });
  it('should have items data' , async () => {
    // const mockResp = [{ name: 'test' }]
    // jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResp)
    const TestComponent = () => {
      const { items } = React.useContext(DataContext)
      return (
        <ul >
          {
            items && items.map(item => {
              <li >{item.name}</li>
            })
          }
        </ul>
      )
    }
    render(<DataContextProvider><App/> </DataContextProvider>)
    const list = await screen.findAllByRole("list")
    expect(list).not.toHaveLength(0)
  })
})


