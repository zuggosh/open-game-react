import './style/main.scss';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="container open-game">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default App;
