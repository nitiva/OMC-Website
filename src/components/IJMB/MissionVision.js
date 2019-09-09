import React from 'react';
import IJMBsidenav from './IJMBsidenav';
import './IJMB.css';
import { Container, Row, Col } from 'reactstrap';

const MissionVision = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Our Vision</p>
                        <p>To bring qualitative and competitive higher educational standard into Ilorin Metropolis, to add more value in ranking of the parent university amongst the best Advance Studies Centre in the world and to develop individuals that will be equipped to make positive impacts on themselves, the nation and the global world through the provision of highly qualitative education with good moral and academic excellence.</p>

                        <p className="header-001">Our Mission </p>
                        <p>To provide all round education, towards intellectual, physical and character development of our human capital product, taking cognizance of their ability and personality. Our product are expected to have a sense of self-esteem and the pride of belonging to a first class institution.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MissionVision
