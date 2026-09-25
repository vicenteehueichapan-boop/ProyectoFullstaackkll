import Button from 'react-bootstrap/Button';

function PrimaryButton({ children, type = 'button' }) {
  return (
    <Button className="primary-button w-100" type={type}>
      {children}
      <span aria-hidden="true">→</span>
    </Button>
  );
}

export default PrimaryButton;
