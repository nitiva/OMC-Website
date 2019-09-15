import React from 'react';
import { withScriptjs } from "react-google-maps";
import Map from './helper/Map';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const VisitUs = () => {
    const MapLoader = withScriptjs(Map);

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 7 }}>
                    <div className="main-panel">
                        <p className="header-001">Send us a message</p>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Your Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Your Message Subject" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Your Email Address" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Message </Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col sm="12" md={{ size: 5 }}>
                    <div className="main-panel" style={{ padding: "0" }}>
                        <MapLoader
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7EISCmYTXbrGf23Dpd-LQB_bJM5jLe0A"
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default VisitUs
