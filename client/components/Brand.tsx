import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

const Brand = () => (
  <>
    <Link href="/">
      <div className="brand" role="link">
        <div className="logo">
          <Image src={logo} alt="a video camera as the movy logo" />
        </div>

        <h1 className="title">Movy</h1>
      </div>
    </Link>

    <style jsx>
      {`
        .brand {
          display: flex;
          align-items: flex-end;
          gap: 2rem;
          width: min-content;
          margin: 0 auto 1rem auto;
          cursor: pointer;
        }
        .logo {
          width: 10vh;
        }
        .title {
          font-size: 3rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        @media (min-width: 768px) {
          .logo {
            width: 15vh;
          }
          .title {
            font-size: 3.5rem;
          }
        }
      `}
    </style>
  </>
);

export default Brand;
