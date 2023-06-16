import React from "react";
import "./publication.css";
import "./research.css";
import {Row, Col} from "react-bootstrap"

export default function PublicationBody(){
    return(
        <div className="publicationbody">
           
            <p className="research-text">List of Publications</p>
        <Row>

                    <Col xs={12} md={12} lg={12}>
                    <div className="list-research">
    
    <p style={{color:"#6ec4e8", fontSize: 22}}><u>Conference Papers</u></p>
   
        <ul style={{margin:15}}>
     <p style={{color: "yellow"}}><u>2022</u></p>
            <li> <h style={{color:"aqua"}}>S. Afsha </h>, M. Haque and H. Nyeem, “Machine Learning Models for Content Classification in Film
Censorship and Rating,” 2022 International Conference on Innovations in Science, Engineering and
Technology, 2022, pp. 396-401. [ <a  style={{color: "#cf2e2e", textDecoration: "none"}} href="https://ieeexplore.ieee.org/document/9775816" target="_blank"><i><u>Paper</u> </i> </a>]
<i> ( Cite: <a   style={{color: "#cf2e2e", textDecoration: "none"}} href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Machine+Learning+Models+for+Content+Classification+in+Film+Censorship+and+Rating&btnG=" target="_blank"><u>Scholar</u> </a> )</i>
</li>
<li>M. Haque, <h style={{color:"aqua"}}>S. Afsha </h> and H. Nyeem, “Developing BrutNet: A New Deep CNN Model with GRU for
Realtime Violence Detection,” 2022 International Conference on Innovations in Science, Engineering and
Technology, 2022, pp. 390-395. [ <a style={{color: "#cf2e2e", textDecoration: "none"}}href="https://ieeexplore.ieee.org/document/9775874" target="_blank"> <i><u>Paper</u> </i> </a> ]

<i> ( Cite: <a   style={{color: "#cf2e2e", textDecoration: "none"}} href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Developing+BrutNet%3A+A+New+Deep+CNN+Model+with+GRU+for+Realtime+Violence+Detection&btnG=" target="_blank"><u>Scholar</u> </a> )</i></li>
<br/>
<p style={{color: "yellow"}}><u>2021</u></p>
<li>M. Haque, <h style={{color:"aqua"}}>S. Afsha </h>, T. B. Ovi and H. Nyeem, “Improving Automatic Sign Language Translation with
Image Binarisation and Deep Learning,” 2021 5th International Conference on Electrical Engineering and
Information Communication Technology (ICEEICT), 2021, pp. 1-5. [ <a   style={{color: "#cf2e2e", textDecoration: "none"}} href="https://ieeexplore.ieee.org/document/9667804" target="_blank"><i><u>Paper</u> </i></a> ] <i>( Cite:  <a   style={{color: "#cf2e2e", textDecoration: "none"}} href="https://scholar.google.com/scholar?hl=en&q=Improving+Automatic+Sign+Language+Translation+with+Image+Binarisation+and+Deep+Learning&as_sdt=0" target="_blank"><u>Scholar</u>  </a>)</i>
</li>
        </ul>
    
</div>
<div className="list-research1">
<h style={{color:"#6ec4e8" , fontSize: 22}}><u> Undergraduate Thesis</u></h><br/>

<p>Detection and Classification of Sensitive Audio-Visual Content for Automated Film Censorship and
Rating. ( <a style={{color: "#cf2e2e"}} href="https://www.researchgate.net/publication/359704298_Detection_and_Classification_of_Sensitive_Audio-Visual_Content_for_Automated_Film_Censorship_and_Rating" target="_blank"><i>Link</i></a> )</p>
</div>
 </Col>
         
 </Row>
 </div>

    )}
