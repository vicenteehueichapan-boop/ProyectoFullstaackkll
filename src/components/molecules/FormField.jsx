import Form from 'react-bootstrap/Form';
import TextInput from '../atoms/TextInput.jsx';

function FormField({ autoComplete, error, id, label, name, onChange, type, value }) {
  const errorId = `${id}-error`;

  return (
    <Form.Group className="form-field">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <TextInput
        autoComplete={autoComplete}
        describedBy={errorId}
        id={id}
        invalid={Boolean(error)}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && (
        <Form.Control.Feedback id={errorId} type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default FormField;
