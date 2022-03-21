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
  it("has a form to search by show title and type", () => {
    render(<Home />);

    const titleInput = screen.getByLabelText("Title");
    const typeSelect = screen.getByRole("combobox", {
      name: "Show Type",
    });
    const submitButton = screen.getByRole("button", {
      name: /search/i,
    });

    expect(titleInput).toBeInTheDocument();
    expect(typeSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
