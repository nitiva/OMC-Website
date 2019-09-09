import React from 'react';
import IJMBsidenav from './IJMBsidenav';
import './IJMB.css';
import { Container, Row, Col } from 'reactstrap';

const Staffs = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Source of Staffs</p>
                        <p>The center is located in Ilorin, the capital of Kwara State which house three(3) of the four(4) universities in the state. </p>
                        <p>The service of lecturers from such universities are engaged in running the program, of which lecturers from other higher institutions in the neigbouring town are also members of the academic team.</p>
                        <p>The minimum qualification for the academic staff involved in the running of the program is a masters degree, this is to put the quality of knowledge passed on per to the same quality they will recieve from our partnered university after successful completion of the program</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Staffs
