import './style/main.scss';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import {Provider} from "react-redux";
import store from "./redux/index";

function App() {
  return (
      <Provider store={store}>
          <div className="container open-game">
              <Header/>
              <Body/>
              <Footer/>
          </div>
      </Provider>
  );
}

export default App;
