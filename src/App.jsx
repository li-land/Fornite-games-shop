import React from "react";
import "./scss/App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { ContextProvider } from "./context";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ContextProvider>
          <Main />
        </ContextProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
