import React from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'reactstrap'

const IJMBsidenav = () => {
    return (
        <Col sm="12" md={{ size: 3 }} className="ijmb-side">
            <ListGroup>
                <Link to="/ijmb"><ListGroupItem>IJMB Progam</ListGroupItem></Link>
                <Link to="/ijmb/mission"><ListGroupItem>Vision & Mission</ListGroupItem></Link>
                <Link to="/ijmb/staffs"><ListGroupItem>Source of Academic Staffs</ListGroupItem></Link>
                <Link to="/ijmb/structure"><ListGroupItem>Structure</ListGroupItem></Link>
                <Link to="/ijmb/academics"><ListGroupItem>Academics</ListGroupItem></Link>
            </ListGroup>
        </Col>
    )
}

export default IJMBsidenav
