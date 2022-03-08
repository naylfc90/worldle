import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import NavBar from "./NavBar";
import Popup from "./Popup";
import Map from "./Map";
import WordGame from "./wordGame";
import "../styles/App.css";

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5);
  }, []);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />

      <NavBar />

      {/* <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/word-game" component={WordGame} />
      </Switch> */}

      <div className="toggle">
        <label onClick={switchTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </label>
      </div>
      <Map />
      <WordGame />
    </div>
  );
}

export default App;
