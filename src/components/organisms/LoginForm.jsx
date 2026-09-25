import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import PrimaryButton from '../atoms/PrimaryButton.jsx';
import FormField from '../molecules/FormField.jsx';

const INITIAL_FIELDS = { email: '', password: '' };

function validate(fields) {
  const errors = {};
  const email = fields.email.trim();

  if (!email) {
    errors.email = 'Ingresa tu correo electrónico.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Escribe un correo con formato válido.';
  }

  if (!fields.password) {
    errors.password = 'Ingresa tu contraseña.';
  }

  return errors;
}

function LoginForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setMessage('Revisa los campos indicados para continuar.');
      return;
    }

    setFields((current) => ({ ...current, password: '' }));
    setMessage('Formulario validado. El acceso real estará disponible cuando se integre el backend.');
  }

  return (
    <section className="login-panel" aria-labelledby="login-heading">
      <div className="login-panel__intro">
        <p className="eyebrow">TU CUENTA · LEVEL-UP GAMER</p>
        <h1 id="login-heading">Inicia sesión<span className="accent">.</span></h1>
        <p className="login-panel__description">Ingresa tus datos para continuar tu experiencia de juego.</p>
      </div>

      <Form noValidate onSubmit={handleSubmit}>
        {message && (
          <Alert aria-live="polite" className="form-message" variant={Object.keys(errors).length ? 'danger' : 'info'}>
            {message}
          </Alert>
        )}

        <FormField
          autoComplete="email"
          error={errors.email}
          id="login-email"
          label="Correo electrónico"
          name="email"
          onChange={handleChange}
          type="email"
          value={fields.email}
        />
        <FormField
          autoComplete="current-password"
          error={errors.password}
          id="login-password"
          label="Contraseña"
          name="password"
          onChange={handleChange}
          type="password"
          value={fields.password}
        />
        <PrimaryButton type="submit">Continuar</PrimaryButton>
        <p className="form-note">Demostración académica: no ingreses una contraseña real.</p>
      </Form>
    </section>
  );
}

export default LoginForm;
