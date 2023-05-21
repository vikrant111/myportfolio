import { 
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";
import Typewriter from "typewriter-effect";



const styles = theme => ({
  parentContainerOfHeader: {
    display: "flex",
    width:"100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoAndIntro: {
    display:"flex",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
    justifyContent: "space-between"
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {
    display: "inherit",
    
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
    color:"#00ff00",
    minWidth:"330px",
    
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    // parentContainerOfHeader: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center"
    // },

    logoAndIntro: {
      display:"none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    },
    nav: {
      display: "flex",
      margin:"auto",
      justifyContent: "space-between"
      
    }
  },
});

const Header = props => {
  const { classes, onNav, ...rest } = props;
  return <ArwesHeader animate>
    <Centered className={classes.root} {...rest}>
    <div className={classes.parentContainerOfHeader}>
      <div className={classes.logoAndIntro}>
      <Logo animate size={50} className={classes.logo} layer="header" />
      <Words className={classes.banner}>
      <Typewriter
      style={{
        fontFamily: 'DM Sans'
      }}
      options={{
        strings: [`Hi! I'm Vikrant Tiwari.`, 'I am a software developer.'],
        autoStart: true,
        loop: true,
      }}
    />
      </Words>
      </div>
     
      <nav className={`${classes.nav}`}>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/myportfolio">
              <i className="material-icons">assignment</i>Profile
            </Link>
          </Highlight>
        </Clickable>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/projects">
            <i className="material-icons">settings</i>Projects</Link>
          </Highlight>
        </Clickable>
        <Clickable className={classes.clickable} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            <Link className={classes.link} to="/contact">
            <i className="material-icons">contacts</i>Contact</Link>
          </Highlight>
        </Clickable>
      </nav>
      
      </div>
    </Centered>
  </ArwesHeader>
};

export default withStyles(styles)(Header);