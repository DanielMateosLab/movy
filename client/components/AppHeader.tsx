import Brand from "./Brand";
import SearchForm from "./SearchForm";

const AppHeader: React.FC = () => (
  <header>
    <Brand />
    <SearchForm />

    <style jsx>
      {`
        header {
          padding: 2rem;
          background: white;
          border-bottom: 1px solid grey;
        }
      `}
    </style>
  </header>
);

export default AppHeader;
