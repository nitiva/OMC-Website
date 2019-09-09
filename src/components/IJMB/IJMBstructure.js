import React from 'react';
import IJMBsidenav from './IJMBsidenav';
import './IJMB.css';
import { Container, Row, Col } from 'reactstrap';

const IJMBstructure = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Program Structure</p>
                        <p>The IJMB Centre develop its academic programmes in a structured, carefully planned and well-balanced manner to ensure that adequate and material resources are always mobilized, allocated and utilized to guarantee quality, prudence and accountability.</p>

                        <p>A fully equipped Computer and Internet Center is put in place to enhance research and exchange of informational material, technological transfer of information as well as to make the work of staff and students a lot easier in the pursuit of real academic development and advancement. The IJMB Centre will therefore in due course procure and install more Computer systems and Internet network systems to enhance qualitative teaching, learning and research among students and staff of the IJMB Centre. </p>
                        <p>The Centre is already covered by the services of 9mobile, Airtel, MTN and Glo networks. In the same vein, effective communication network through intercom is also provided within the offices of the Study Centre, which will also be complemented by the Internet access to be provided through the Computer Centre. This Unit is responsible for connecting the Study Centre Community to the national and international super highway networks, for easy information access and transmission.</p>

                        <p className="header-001">Our Facilities</p>
                        <ul>
                            <li>Computer/Information Technology unit with internet connectivity.</li>
                            <li>Boarding Facilities</li>
                            <li>E-learning Facilities</li>
                        </ul>

                        <p className="header-001">Physical Structure</p>
                        <p>The conviction that an educational conducive environment void of distractions is a prerequisite for serious academic pursuit</p>
                        <p>Aside from the conducive environment void of noisy distraction and a spacious blocks of classroom, we also have standard one story building examination hall which have been beautifully planned and designed with capacity to accommodate on the average of 500 students</p>

                        <p className="header-001">Mode of Operation in Training and Teaching</p>
                        <p>The mode is based on adult learning methodology, combining lecturing, teaching, case studies, experimental learning approaches, practical hands-on-experiment etc. followed by tests and internal examinations before the final external examinations.</p>

                        <p className="header-001">Departments</p>
                        <ul>
                            <li>Department of Science (DS)</li>
                            <li>Department of Arts and Social Sciences (DASS)</li>
                            <li>Department of Information and Communication Technology (DICT)</li>
                            <li>Department of Remedial Studies (DRS)</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default IJMBstructure
