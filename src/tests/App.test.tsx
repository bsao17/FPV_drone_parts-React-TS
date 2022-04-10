import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from "../components/home/Home"


describe("should testing Home component", () => {

  beforeEach(() => {
    render(<App/>)
  })

  test("should verify home component is called", () => {
    function forEach(items: number[], callback: Function) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }

    const mockCallback = jest.fn(x=>x+x)
    forEach([0, 1, 2], mockCallback)
  })
})
