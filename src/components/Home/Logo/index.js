import LogoMali from '../../../assets/images/msli-logo.png';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoMali}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo;