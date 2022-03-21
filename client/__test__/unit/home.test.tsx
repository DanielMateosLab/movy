import { render, screen } from "@testing-library/react";
import Home from "pages/index";

describe("Home", () => {
  it("renders Movy brand and logo", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Movy",
    });
    const logo = screen.getByRole("img", {
      name: /movy logo/,
    });

    expect(heading).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
