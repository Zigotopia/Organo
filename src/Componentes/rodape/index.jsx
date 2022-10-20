/* eslint-disable jsx-a11y/anchor-has-content */
import "./rodape.css";
import facebook from "../../img/fb.png";
import twitter from "../../img/tw.png";
import instagram from "../../img/ig.png";
import logo from "../../img/logo.png";

export const Rodape = () => {
  return (
    <div className="rodape">
      <div className="rodape_social">
        <ul className="rodape_lista">
          <li>
            <a className="rodape_item" href="facebook.com"></a>
            <img
              className="rodape_imagem"
              src={facebook}
              alt="logo do facebook"
            />
          </li>
          <li>
            <a href="twitter.com"></a>{" "}
            <img
              className="rodape_imagem"
              src={twitter}
              alt="logo do twitter"
            />
          </li>
          <li>
            <a href="instagram.com"></a>{" "}
            <img
              className="rodape_imagem"
              src={instagram}
              alt="logo do instagram"
            />
          </li>
        </ul>
      </div>
      <div className="rodape_logo">
        <img className="logo_imagem" src={logo} alt="logo da organo" />
      </div>
      <div className="rodape_dev">
        <p>Desenvolvido por Zigotopia</p>
      </div>
    </div>
  );
};
