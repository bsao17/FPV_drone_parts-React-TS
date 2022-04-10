import {render, screen} from "@testing-library/react"
import Home from "./Home"

describe("should testHome component", () => {
    beforeEach(() => {
        render(<Home/>)
    })

    it("should verify text present in component", () => {
        expect(screen.getByText(/my new hobby/i))
    })
})