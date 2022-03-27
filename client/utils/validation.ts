import * as yup from "yup";

export const searchShowByTitleValidation = yup.object({
  title: yup.string().required("A title is required"),
  type: yup.string(),
  page: yup.number().min(1).integer(),
});
