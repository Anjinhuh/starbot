import logo from "./img/logo-astr.svg";
import estrelas from "./estrelas";
import "./App.css";
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setSize([window.innerWidth, window.innerHeight]);
      window.location.reload();
      estrelas.generateStars(150, size[0], size[1]);
      setTimeout(() => {console.log('Espera para não travar o browser =) ...')}, 500)
    });
  });
  useEffect(() => {
    estrelas.generateStars(150, size[0], size[1]);
  });
  return (
    <div className="App" id="add-stars">
      <div className="fix-some-errors">
        <div className="comet"></div>
        <div className="comet2"></div>
        <div className="comet3"></div>
      </div>

      <header>
        <content>
          <div className="header-logo">
            <img src={logo} alt="LOGO" />
          </div>
          <div className="header-text">
            <a href='https://github.com/Anjinhuh'>Comunidade</a>
            <a href='https://github.com/Anjinhuh'>Tutorial</a>
            <a href='https://github.com/Anjinhuh'>Open Source</a>
            <a href='https://github.com/Anjinhuh'>Comandos</a>
          </div>

          
        </content>
      </header>


      <div className="item-landing-page">
        <div className="fix-visual-errors">
          <p className="text-principal">Star Bot</p>
          <p className="text-secondary">
            Deixe a sua comunidade anos luz à frente
          </p>
          <button className="btn-add">Me intercepte</button>
        </div>
        <div className="define">
          <iframe
            className="img-bot-astronaut"
            title="astronaut"
            src="https://embed.lottiefiles.com/animation/87952"
          >
          </iframe>
          <div class="grab-cursor"></div>
        </div>
      </div>

      <div className="line-bottom-header"></div>
      <div className="details-bot">
        <p className="text-primary">O que ela faz por você?</p>
        <p className="text-secondary">
          1. O Star Bot te leva para fora desse mundo, com seus comandos de música.
        </p>
        <p className="text-secondary">
          2. Possui alguns sistemas de administração e verificação.
        </p>
        <p className="text-secondary">
          3. Como é um BOT de outro mundo, ele poderá ter tudo que os demais tem!
        </p>
      </div>
      <script src={estrelas}></script>
    </div>
  );
}

export default App;
