import React from "react"
import {render, screen} from "@testing-library/react";
import Home from "../Home";

describe("should test home component", ()=>{
    beforeEach(()=>{
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Home/>)
    })
    it("should verify title in component", ()=>{
        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText(/my new hobby/i))
    })
})