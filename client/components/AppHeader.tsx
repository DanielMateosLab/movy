import Brand from "./Brand";

const AppHeader: React.FC = ({ children }) => (
  <header>
    <Brand />

    {children}

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
