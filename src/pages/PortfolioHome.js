import { useMemo } from "react";
import { 
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";
import cv from "../assets/vikrant_tiwari_resume.pdf";
import mernImage from "../assets/profilepic.jpeg";
import styles from "../styles/aboutme.module.css";
import useTechStackDetails from "../hooks/useTechStackDetails";
import {Link}  from "react-router-dom";


import {saveAs} from 'file-saver';

const PortfolioHome = props => {
  
    
    const {myTechStack} = useTechStackDetails();
    // const navigate = useNavigate();
    console.log("myTechStack", myTechStack)
  // const {classes} = props;
//   const selectorBody = useMemo(() => {
//     return props.planets?.map(planet => 
//       <option value={planet.kepler_name} key={planet.kepler_name}>{planet.kepler_name}</option>
//     );
//   }, [props.planets]);

  const gotoNextPage = () =>{
    // navigate("/projects")
  }

  const saveFile = () => {
    saveAs( cv, "vikrant_tiwari_resume.pdf");
    };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Appear id="launch" animate show={props.entered}>
      <div className={styles.containerAboutMeInfo}>
        <div className={styles.myImageContainer}>
          <img className={styles.profilePic} src={mernImage} alt="my-image" />
        </div>
        <div className={styles.aboutDescription}>
          <Paragraph style={{ color: "#ffff" }}>
            I'm a skilled{" "}
            <span style={{ color: "#00ff00" }}>Web Developer</span> with
            experience in designing and implementing user-centric web
            applications.
          </Paragraph>
          <Paragraph style={{ color: "#ffff" }}>
            Proficient in React.js, Next.js, JavaScript, HTML, and CSS with a
            strong understanding of the React ecosystem and modern frontend
            development tools.
          </Paragraph>
          <div className={styles.resumeButtonContainer}>
            <Clickable>
              <Button
                animate
                show={props.entered}
                type="submit"
                layer="success"
                onClick={saveFile}
              >
                Download Resume ✔
              </Button>
            </Clickable>
          </div>
        </div>
      </div>

      <Paragraph className={styles.myTechStackContainerHeading}>
        <span style={{ color: "#ffff" }} className={styles.myTechStack}>
          &nbsp; My Tech Skills &nbsp;
        </span>
      </Paragraph>

      <div className={styles.cardContainerParent}>
        {myTechStack &&
          myTechStack.map((item) => {
            return (
              <div className={styles.cardContainer}>
                <div className={styles.cardImageContainer}>
                  <img
                    className={styles.cardImage}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className={styles.cardDescriptionContainer}>
                  <Paragraph style={{ color: "#fff", fontSize: "medium" }}>
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            );
          })}
      </div>

      <Paragraph style={{ textAlign: "center", padding: "0px" }}>
        Looking to apply my skills and experience to a challenging new
        opportunity as a React Developer.
      </Paragraph>
      <div className={styles.nextPageButtonContainer}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/projects"
        >
          <Clickable>
            <Button
              animate
              show={props.entered}
              type="submit"
              layer="success"
              // onClick={gotoNextPage}
            >
              Next ➡
            </Button>
          </Clickable>
        </Link>
      </div>
    </Appear>
  );
};

export default PortfolioHome;