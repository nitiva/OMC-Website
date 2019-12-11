import React from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'reactstrap'

const AdmissionSidenav = () => {
    return (
        <Col sm="12" md={{ size: 3 }} className="ijmb-side">
            <ListGroup>
                <Link to="/admission/primary"><ListGroupItem>Primary School</ListGroupItem></Link>
                <Link to="/admission/secondary"><ListGroupItem>Secondary School</ListGroupItem></Link>
                <Link to="/admission/ijmb"><ListGroupItem>IJMB/JUPEB</ListGroupItem></Link>
            </ListGroup>
        </Col>
    )
}

export default AdmissionSidenav
