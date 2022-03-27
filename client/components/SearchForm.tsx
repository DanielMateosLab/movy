import { Field, Form, Formik, FormikConfig } from "formik";
import { useRouter } from "next/router";
import { ShowsByTitleSummaryQuery, Type } from "utils/graphqlTypes";
import { SearchFormValues } from "utils/types";
import { searchShowByTitleValidation } from "utils/validation";
import Button from "./Button";
import SearchInfo from "./SearchInfo";
import TextField from "./TextField";

interface Props {
  called: boolean;
  loading: boolean;
  data?: ShowsByTitleSummaryQuery;
}
const SearchForm: React.FC<Props> = (props) => {
  const router = useRouter();

  const handleSubmit: FormikConfig<SearchFormValues>["onSubmit"] = async (
    { title, type },
    { setSubmitting }
  ) => {
    router.push(
      {
        pathname: "/",
        query: {
          title,
          type,
          page: 1,
        },
      },
      undefined,
      { shallow: true }
    );

    setSubmitting(false);
  };

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
        <Form>
          <section className="form">
            <div className="form-element">
              <TextField
                name="title"
                label="Title"
                placeholder="Batman Begins"
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
              <Button type="submit" disabled={props.loading}>
                Search
              </Button>
            </div>
          </section>

          <section className="form-footer">
            {router.query.title && <SearchInfo {...props} />}
          </section>
        </Form>
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

export default SearchForm;
