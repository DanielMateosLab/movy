import { Field, FieldProps, Form, Formik } from "formik";
import { searchShowByTitleValidation } from "utils/validation";

const SearchForm = () => (
  <>
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
              <div className="form-element form-field">
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

          <div className="form-element">
            <label htmlFor="type">Show Type</label>
            <Field as="select" name="type" id="type">
              <option value="">All</option>
              <option value="MOVIE">Movie</option>
              <option value="SERIES">Series</option>
              <option value="EPISODE">Episode</option>
            </Field>
          </div>

          <div className="form-element">
            <button type="submit">Search</button>
          </div>
        </div>
      </Form>
    </Formik>

    <style jsx>
      {`
        .form {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        label {
          margin-right: 0.25rem;
        }
        :global(select),
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
          width: 100%;
        }
        button:active {
          background: rgb(184, 143, 41);
        }

        .form-element {
          display: flex;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;
        }
        .form-element > input,
        .form-element > :global(select) {
          flex-grow: 1;
        }

        .error {
          font-size: 0.875rem;
          color: rgb(185, 0, 0);
          margin: 0.2rem 0;
        }

        @media (min-width: 768px) {
          .form-element {
            width: initial;
          }
          .form-field {
            position: relative;
          }
          .error {
            position: absolute;
            bottom: -1.5rem;
          }
        }
      `}
    </style>
  </>
);

export default SearchForm;
