import Form from 'react-bootstrap/Form';

function TextInput({ autoComplete, describedBy, id, invalid, name, onChange, type, value }) {
  return (
    <Form.Control
      aria-describedby={invalid ? describedBy : undefined}
      aria-invalid={invalid || undefined}
      autoComplete={autoComplete}
      id={id}
      isInvalid={invalid}
      name={name}
      onChange={onChange}
      required
      type={type}
      value={value}
    />
  );
}

export default TextInput;
