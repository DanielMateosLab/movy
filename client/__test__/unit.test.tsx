import { render, screen } from "@testing-library/react";
import AppHeader from "components/AppHeader";
import SearchForm from "components/SearchForm";
import ShowDetailsCard from "components/ShowDetailsCard";
import ShowSummariesContainer from "components/ShowSummariesContainer";
import ShowSummaryCard from "components/ShowSummaryCard";
import { ShowByIdQuery, Type } from "utils/graphqlTypes";

jest.mock("next/dist/client/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {
      title: "mock",
    },
  }),
}));

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

  describe("ShowSummaryCard", () => {
    it("displays the show title, year and type", () => {
      const title = "mockTitle";
      const year = "2022";
      const type = Type.Movie;

      render(
        <ShowSummaryCard
          show={{
            id: "mock",
            poster: "mock",
            title,
            year,
            type,
          }}
        />
      );

      const titleElement = screen.getByRole("heading", {
        name: title,
      });
      const yearElement = screen.getByText(year);
      const typeElement = screen.getByText(type);

      expect(titleElement).toBeInTheDocument();
      expect(yearElement).toBeInTheDocument();
      expect(typeElement).toBeInTheDocument();
    });
  });

  describe("ShowDetailsCard", () => {
    const show: NonNullable<ShowByIdQuery["showById"]> = {
      __typename: "Show",
      poster: "mockImage",
      title: "Mock Title",
      type: Type.Movie,
      year: "2005",
      plot: "Mock Plot",
      genre: "Mock Genre",
      actors: "Mock Actors",
      director: "Mock Director",
      writer: "Mock Writer",
      awards: "Mock Awards",
    };

    render(<ShowDetailsCard show={show} />);

    const { poster, __typename, ...details } = show;

    const posterImage = screen.getByRole("img", {
      name: "show poster",
    });

    expect(posterImage).toBeInTheDocument();

    Object.values(details).forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });
});
