import { FieldHookConfig, useField } from "formik";

type TextFieldProps = { label: string } & FieldHookConfig<string>;
const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <div className="input-group">
        <input
          {...field}
          placeholder={props.placeholder}
          id={props.name}
          type="text"
          className={`box ${meta.touched && meta.error ? "error-border" : ""}`}
        />
        {meta.touched && meta.error && (
          <div className="error-message">{meta.error}</div>
        )}
      </div>

      <style jsx>
        {`
          .input-group {
            position: relative;
            flex-grow: 1;
          }
          input {
            width: 100%;
          }
          .error-border {
            border: 1px solid var(--error);
            outline-color: var(--error);
          }
          .error-message {
            font-size: 0.75rem;
            color: var(--error);
            margin: 0.2rem 0;
            position: absolute;
            top: -1.25rem;
            left: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default TextField;
