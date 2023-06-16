import React from "react";
import { Button, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Rest(){
    return(
        <div className="rest">





                      <p style={{color: "white", fontFamily: "serif", fontSize:20}}>To follow my work at <a  style={{ color: "#e3b346"}} href="https://www.researchgate.net/profile/Syma-Afsha" target="_blank">ResearchGate</a>.</p>
                  <Row>
                  <Col xs={4} sm={4} lg={3} >
            <Link style={{color: "white", textDecoration: "none"}} to ="/about"><Button variant="outline-primary" style={{color:"white", fontSize: 18, textAlign: "center", width: 150, height: 50, fontFamily: "serif"}}className="home-button">Read More</Button></Link></Col>
            <Col xs={4} sm={4} lg={3} >
            <a style={{color: "white", textDecoration: "none"}} href="https://drive.google.com/file/d/129mDal8P_cEGxH5xxcqBfxBRQvDptgJE/view?usp=sharing" target="_blank"> <Button variant="outline-primary" style={{color:"white", fontSize: 18, textAlign: "center", width: 150, height: 50, fontFamily: "serif", marginLeft: 25}}className="home-button">My Resume</Button></a></Col>
            
                  </Row>
                      
        </div>
        

    )
}