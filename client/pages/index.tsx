import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "public/logo.svg";
import { Formik, Form, Field, FieldProps } from "formik";
import { searchShowByTitleValidation } from "utils/validation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Movy</title>
        <meta
          name="description"
          content="Get detailed information of your favourite shows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <div className="brand">
            <div className="logo">
              <Image src={logo} alt="a video camera as the movy logo" />
            </div>
            <h1 className="title">Movy</h1>
          </div>
        </header>

        <Formik
          initialValues={{
            title: "",
            type: "",
            page: 1,
          }}
          validationSchema={searchShowByTitleValidation}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="form">
              <Field name="title">
                {({ field, meta }: FieldProps) => (
                  <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      {...field}
                      placeholder="Batman Begins"
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <div>
                <label htmlFor="type">Show Type</label>
                <Field as="select" name="type" id="type">
                  <option value="">All</option>
                  <option value="MOVIE">Movie</option>
                  <option value="SERIES">Series</option>
                  <option value="EPISODE">Episode</option>
                </Field>
              </div>

              <button type="submit">Search</button>
            </div>
          </Form>
        </Formik>
      </main>

      <style jsx>
        {`
          .brand {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem 0;
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

      <style jsx global>
        {`
          .form {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          label {
            margin-right: 0.25rem;
          }
          select,
          input,
          button {
            font-family: "Raleway";
            padding: 0.25rem;
            font-size: 1rem;
          }
          button {
            padding: 0.25rem 0.5rem;
            background: rgb(255, 200, 55);
            border: 1px solid black;
          }
          button:active {
            background: rgb(184, 143, 41);
          }

          .form-field {
            position: relative;
          }
          .error {
            position: absolute;
            font-size: 0.875rem;
            color: rgb(185, 0, 0);
            margin-top: 0.2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
