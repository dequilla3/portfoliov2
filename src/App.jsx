import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectlist/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import React, { useEffect } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    document.title = "Kim Dequilla | Portfolio";
  }, []);
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Intro />
        <About />
        <ProjectList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
