import React from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'reactstrap'

const AdmissionSidenav = () => {
    return (
        <Col sm="12" md={{ size: 3 }} className="ijmb-side">
            <ListGroup>
                <Link to="/ijmb"><ListGroupItem>Primary School</ListGroupItem></Link>
                <Link to="/ijmb/mission"><ListGroupItem>Secondary School</ListGroupItem></Link>
                <Link to="/ijmb/staffs"><ListGroupItem>IJMB</ListGroupItem></Link>
            </ListGroup>
        </Col>
    )
}

export default AdmissionSidenav
