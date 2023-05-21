import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px auto", textAlign:"center" }}>
        {/* Welcome to my portfolio, hope you like it. */}
        "I'm thrilled to share my work with you!"
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
