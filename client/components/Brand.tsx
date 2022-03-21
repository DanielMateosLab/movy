import Image from "next/image";
import logo from "public/logo.svg";

const Brand = () => (
  <div className="brand">
    <div className="logo">
      <Image src={logo} alt="a video camera as the movy logo" />
    </div>
    <h1 className="title">Movy</h1>

    <style jsx>
      {`
        .brand {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          gap: 2rem;
        }
        .logo {
          width: 15vh;
        }
        .title {
          font-size: 4rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      `}
    </style>
  </div>
);

export default Brand;
