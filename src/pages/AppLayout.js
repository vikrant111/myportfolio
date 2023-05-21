import {
  useState,
} from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

// import usePlanets from "../hooks/usePlanets";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PortfolioHome from "./PortfolioHome";
import History from "./History";
import Projects from "./Projects";

const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "auto",
  },
  centered: {
    flex: 1,
    paddingTop: "20px",
    paddingBottom: "10px",
  },
});

const AppLayout = props => {
  const { sounds, classes } = props;

  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  
  return <div className={classes.content}>
    <Header onNav={animateFrame} />
    <Centered className={classes.centered}>
      <Frame animate 
        show={frameVisible} 
        corners={4} 
        style={{visibility: frameVisible ? "visible" : "hidden"}}>
        {anim => (
          <div style={{padding: "20px"}}>
          <Switch>
            <Route exact path="/">
              <PortfolioHome 
                entered={anim.entered}
                onSuccessSound={onSuccessSound} />
            </Route>
            <Route exact path="/aboutme">
              <PortfolioHome
                entered={anim.entered} />
            </Route>
            <Route exact path="/projects">
              <Projects
                entered={anim.entered} />
            </Route>
            <Route exact path="/contact">
              <History entered={anim.entered} />
            </Route>
          </Switch>
          </div>
        )}
      </Frame>
    </Centered>
    <Footer />
  </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));