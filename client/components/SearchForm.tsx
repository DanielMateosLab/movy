import { useReactiveVar } from "@apollo/client";
import { Field, Form, Formik, FormikConfig } from "formik";
import { useEffect } from "react";
import { showsByTitleArgs } from "utils/apolloClient";
import { Type } from "utils/graphqlTypes";
import { SearchFormValues } from "utils/types";
import { searchShowByTitleValidation } from "utils/validation";
import Button from "./Button";
import SearchInfo from "./SearchInfo";
import TextField from "./TextField";

const SearchForm = () => {
  const handleSubmit: FormikConfig<SearchFormValues>["onSubmit"] = async (
    { title, type },
    { setSubmitting }
  ) => {
    showsByTitleArgs({ page: showsByTitleArgs().page, title, type });
    setSubmitting(false);
  };

  // TODO: use the loading flag to disable the submit button

  return (
    <>
      <Formik
        initialValues={
          {
            title: "",
            type: Type.All,
          } as SearchFormValues
        }
        validationSchema={searchShowByTitleValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <section className="form">
              <div className="form-element">
                <TextField
                  name="title"
                  label="Title"
                  placeholder="Batman begins"
                />
              </div>

              <div className="form-element">
                <label htmlFor="type">Show Type</label>
                <Field as="select" name="type" id="type" className="box">
                  <option value="ALL">All</option>
                  <option value="MOVIE">Movie</option>
                  <option value="SERIES">Series</option>
                  <option value="EPISODE">Episode</option>
                </Field>
              </div>

              <div className="form-element">
                <Button type="submit" disabled={isSubmitting}>
                  Search
                </Button>
              </div>
            </section>

            <section className="form-footer">
              {/* <SearchInfo result={result} /> */}
            </section>
          </Form>
        )}
      </Formik>

      <style global jsx>
        {`
          label {
            margin-right: 0.2rem;
          }
          .box {
            padding: 0.25rem;
            font-family: "Raleway";
            font-size: 1rem;
            flex-grow: 1;
          }
        `}
      </style>

      <style jsx>
        {`
          .form {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1rem;
          }
          .form-element {
            display: flex;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;
            padding-top: 1.25rem;
          }
          .form-footer {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
          }

          @media (min-width: 768px) {
            .form-element {
              width: initial;
            }
          }
        `}
      </style>
    </>
  );
};

export default () => <SearchForm />;
