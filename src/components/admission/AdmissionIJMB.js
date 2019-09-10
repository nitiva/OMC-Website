import React from 'react';
import IJMBsidenav from './AdmissionSidenav';
import { Container, Row, Col } from 'reactstrap';

const AdmissionIJMB = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Admission Requirement for IJMB</p>
                        <p>The programme is open to all candidates nationwide and any curse can be offered, be it Science, Art or Social Science.</p>
                        <p>The basic requirements are as follow</p>
                        <ul>
                            <li>O'Level Result (Maximum of 2 sittings)</li>
                            <li>Four(4) Passport Photographs</li>
                            <li>Birth Certificate</li>
                            <li>Certificate of State of Origin (Optional)</li>
                        </ul>
                        <p>However note that</p>
                        <ul>
                            <li>No JAMB / PUTME score is requiredfor admission</li>
                            <li>Awaiting Result Candidates can also Apply</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AdmissionIJMB
