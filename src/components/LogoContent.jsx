import logo from './img/logo.svg';
import './css/App.css';

// APP.JS - Brother Router List
const LogoContent = () =>{
  return (
    <div className="App-container App-image-container">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
};

export default LogoContent;