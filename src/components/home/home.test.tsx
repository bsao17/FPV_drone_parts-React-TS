import {render, screen} from "@testing-library/react";
import Home from "./Home";

describe("should testHome component", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Home myTitle={"test"}/>);
    });
    it("should verify text present in component", () => {
        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText(/my new hobby/i));
    });
});
