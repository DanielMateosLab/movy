import { gql, useLazyQuery } from "@apollo/client";
import { Field, FieldProps, Form, Formik, FormikConfig } from "formik";
import { ShowsByTitleSummaryQuery } from "utils/graphqlTypes";
import { SearchFormValues, ShowsByTitleArgs } from "utils/types";
import { searchShowByTitleValidation } from "utils/validation";
import Button from "./Button";
import SearchInfo from "./SearchInfo";
import TextField from "./TextField";

const SHOW_SUMMARIES = gql`
  query ShowsByTitleSummary($title: String!, $type: Type, $page: Int) {
    showsByTitle(title: $title, type: $type, page: $page) {
      totalResults
      page
    }
  }
`;

const SearchForm = () => {
  // TODO: Re-think the data flow in the app. Use reactiveVariables for the query, isolate
  // components, etc
  const [getShows, result] =
    useLazyQuery<ShowsByTitleSummaryQuery>(SHOW_SUMMARIES);

  const handleSubmit: FormikConfig<SearchFormValues>["onSubmit"] = async (
    variables,
    { setSubmitting }
  ) => {
    await getShows({ variables });

    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={
          {
            title: "",
            type: "ALL",
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
              <SearchInfo result={result} />
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
