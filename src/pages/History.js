import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";
import styles from "../styles/Contact.module.css"

const History = props => {
  const tableBody = useMemo(() => {
    return props.launches?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return <tr key={String(launch.flightNumber)}>
          <td>
            <span style={
              {color: launch.success ? "greenyellow" : "red"}
            }>█</span>
          </td>
          <td>{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customers?.join(", ")}</td>
        </tr>;
      });
  }, [props.launches]);

  return <article id="history">
     <Paragraph className={styles.myTechStackContainerHeading}>
        <span style={{ color: "#ffff" }} className={styles.myTechStack}>
          &nbsp; Contact me &nbsp;
        </span>
      </Paragraph>
    <Appear animate show={props.entered}>
      <Paragraph> {`Thank you for taking the time to visit my portfolio and explore my work.`}</Paragraph>
       <Paragraph>{`If you have any questions, feedback, or just want to say hi, please don't hesitate to get in touch!`}</Paragraph>
       <Paragraph>{` You can reach me through the contact number on my website or connect with me on social media. I'm always happy to chat and discuss potential collaborations or new opportunities.`}</Paragraph>
       <Paragraph>{`  Thanks again for your interest and I look forward to hearing from you soon!`}</Paragraph>
       <Paragraph style={{textAlign:"right", color:"#01c104"}}>{`  Mobile number: `}<span style={{color:"#fff", fontSize:"large"}}>7317852229</span></Paragraph>
       {/* <Paragraph style={{textAlign:"right", color:"#01c104"}}>{`  Email: `}<span style={{color:"#fff", fontSize:"large"}}>vikrant753@gmail.com</span></Paragraph> */}
       <Paragraph style={{textAlign:"right", color:"#01c104"}}>{`  Email: `}<a href="mailto:youremail@example.com" style={{color:"#fff", fontSize:"large", textDecoration:"none"}}>vikrant753@gmail.com</a></Paragraph>
       <Paragraph style={{textAlign:"right", color:"#01c104"}}>{`  Linkedin: `}<a href="https://www.linkedin.com/in/vikrant-tiwari-077490145/" style={{color:"#fff", fontSize:"large", textDecoration:"none"}}>https://www.linkedin.com/in/vikrant-tiwari-077490145/</a></Paragraph>
       
     
       {/* <Table animate>
        <table style={{tableLayout: "fixed"}}>
          <thead>
            <tr>
              <th style={{width: "2rem"}}></th>
              <th style={{width: "3rem"}}>No.</th>
              <th style={{width: "9rem"}}>Date</th>
              <th>Mission</th>
              <th style={{width: "7rem"}}>Rocket</th>
              <th>Customers</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </Table> */}
    </Appear>
  </article>;
}
  
export default History;