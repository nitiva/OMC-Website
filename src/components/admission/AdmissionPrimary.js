import React from 'react';
import IJMBsidenav from './AdmissionSidenav';
import { Container, Row, Col } from 'reactstrap';

const AdmissionPrimary = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Admission Requirement for Primary School</p>
                        <p>To be admitted into our secondary school,
                        an admission form has to be obtained within the school premises ,
                after which an entrance examination date would be communicated to each of the applicant.</p>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AdmissionPrimary
