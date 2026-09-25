import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function AuthTemplate({ brand, children, footer, visual }) {
  return (
    <main className="auth-page">
      <Container className="auth-shell" fluid="lg">
        <Row className="auth-layout g-0">
          <Col xs={12} lg={6} className="auth-layout__content">
            <header className="auth-header">
              {brand}
              <span className="auth-header__tag">ACCESO</span>
            </header>
            <div className="auth-layout__form">{children}</div>
            <footer className="auth-footer">{footer}</footer>
          </Col>
          <Col xs={12} lg={6} className="auth-layout__visual">
            {visual}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default AuthTemplate;
