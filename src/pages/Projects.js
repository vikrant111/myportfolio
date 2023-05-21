import { useMemo } from "react";
import { 
  withStyles,
  Appear,
  Link,
  Button,
  Paragraph,
  Table,
  Words,
} from "arwes";

import Clickable from "../components/Clickable";
import useProjectData from "../hooks/useProjectData";
import style from "../styles/projects.module.css";
import mernImage from "../assets/mern.jpg";
import peakalpha from "../assets/peaklogo2.png"
import big4healthlogo from "../assets/big4healthlogo.png"
import ProjectModal from "../components/projectmodal/ProjectModal";
import { useState } from "react";

const styles = () => ({
  link: {
    color: "red",
    textDecoration: "none",
  },
});

const Projects = props => {
  const { 
    entered,
    launches,
    classes,
    abortLaunch,
  } = props;

  const [projectDetails, setProjectDetails] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = (projectData) => {
    setProjectDetails(projectData)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const {projectData} = useProjectData();
  console.log("projectData", projectData)
    
    return <>
    <div id="launch" animate show={props.entered}>


  
    <Paragraph className={style.myTechStackContainerHeading}>
        <span style={{ color: "#ffff" }} className={style.myTechStack}>
          &nbsp; Projects showcase &nbsp;
        </span>
      </Paragraph>


    <div className={style.cardContainerParent}>
        {projectData &&
          projectData.map((item) => {
            return (
              <div className={style.cardContainer}
              onClick={(e)=>handleOpen(item)}
              >
                <div className={style.cardImageContainer}>
                  <img
                    className={style.cardImage}
                    src={item?.logo}
                    alt={"mern_image_test"}
                  />
                </div>
                <span style={{ color: "#fff", fontSize: "large", textAlign:"left", width:"100%"}}>
                   {item?.name}
                  </span>
                <div className={style.cardDescriptionContainer}>
                  <Paragraph style={{ color: "#BAF2BA", fontSize: "15px" }}>
                   {(item?.info?.length > 145) ?item?.info.substr(0, 135) + "...":item?.info}
                  </Paragraph>
                  <Paragraph style={{ color: "#029dbb", fontSize: "large", textAlign:"right"}}>
                   {item?.company}
                  </Paragraph>
                  <Paragraph style={{ color: "#E9F5F7", fontSize: "medium", textAlign:"right", width:"100% !important"}}>
                   {`${item?.from}--${item?.to}`}
                  </Paragraph>
                </div>
                <div className={style.nextPageButtonContainer}>
        {/* <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/projects"
        > */}
          <Clickable>
            <Button
              animate
              show={props.entered}
              type="submit"
              layer="success"
              disabled={props.isPendingLaunch}
              onClick={(e)=>handleOpen(item)}
            >
              Read more ➡
            </Button>
          </Clickable>
        {/* </Link> */}
      </div>
              </div>
            );
          })}
      </div>
      
      </div>
      <ProjectModal
      open = {open}
      setOpen = {setOpen}
      handleOpen = {handleOpen}
      handleClose = {handleClose}
      projectDetails = {projectDetails}
      />
      </>
}

export default withStyles(styles)(Projects);