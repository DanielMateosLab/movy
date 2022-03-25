import { render, screen } from "@testing-library/react";
import AppHeader from "components/AppHeader";
import SearchForm from "components/SearchForm";
import ShowSummariesContainer from "components/ShowSummariesContainer";

describe("AppHeader", () => {
  it("renders Movy brand and logo", () => {
    render(<AppHeader />);

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

describe("SearchForm", () => {
  it("has a form to search by show title and type", () => {
    render(
      <SearchForm
        {...{
          called: false,
          loading: false,
        }}
      />
    );

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

  it("shows an informational message if no results are found", () => {
    render(
      <SearchForm
        {...{
          called: true,
          loading: false,
          data: undefined,
        }}
      />
    );

    const informationText = screen.getByText(
      "Could not found any show! Try with other search parameters."
    );

    expect(informationText).toBeInTheDocument();
  });

  it("shows the results and a pagination if there are results", () => {
    const mockPage = 1;
    const mockResultsCount = 25;

    render(
      <SearchForm
        {...{
          called: true,
          loading: false,
          data: {
            showsByTitle: {
              page: mockPage,
              totalResults: mockResultsCount,
              result: ["mock"] as any,
            },
          },
        }}
      />
    );

    const pageInfo = screen.getByText("Page " + mockPage);
    const resultsCount = screen.getByText(`${mockResultsCount} shows found.`);

    expect(pageInfo).toBeInTheDocument();
    expect(resultsCount).toBeInTheDocument();
  });

  it("has links to change page if there are many", () => {
    // We will be in the second page of three in total
    const mockPage = 2;
    const mockResultsCount = 25;

    render(
      <SearchForm
        {...{
          called: true,
          loading: false,
          data: {
            showsByTitle: {
              page: mockPage,
              totalResults: mockResultsCount,
              result: ["mock"] as any,
            },
          },
        }}
      />
    );

    const previousPageLink = screen.getByRole("link", {
      name: "previous page",
    });
    const nextPageLink = screen.getByRole("link", {
      name: "next page",
    });

    expect(previousPageLink).toBeInTheDocument();
    expect(nextPageLink).toBeInTheDocument();
  });

  describe("ShowSummariesContainer", () => {
    it("shows a loading spinner if result is loading", () => {
      render(<ShowSummariesContainer loading={true} />);

      const spinner = screen.getByTestId("spinner");

      expect(spinner).toBeInTheDocument();
    });
    it("displays the children elements if loading is false", () => {
      render(
        <ShowSummariesContainer loading={false}>
          <span>mock</span>
        </ShowSummariesContainer>
      );

      const mockChildren = screen.getByText("mock");

      expect(mockChildren).toBeInTheDocument();
    });
  });
});
