import LoginForm from '../components/organisms/LoginForm.jsx';
import AppLogo from '../components/atoms/AppLogo.jsx';
import AuthTemplate from '../components/templates/AuthTemplate.jsx';

function LoginPage() {
  return (
    <AuthTemplate
      brand={<AppLogo />}
      footer="© 2026 Level-Up Gamer · Proyecto académico DSY1104"
      visual={(
        <div className="visual-content">
          <p className="visual-content__overline">NUEVA PARTIDA</p>
          <div className="visual-content__symbol" aria-hidden="true">✦</div>
          <h2>Tu próximo nivel comienza aquí.</h2>
          <p>Explora tecnología y accesorios pensados para jugar a tu manera.</p>
          <span className="visual-content__index">01 / 01</span>
        </div>
      )}
    >
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
