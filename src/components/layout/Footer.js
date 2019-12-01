import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container style={{ textAlign: "center" }}>
                <Row>
                    {/* <Col md="2">
                        <img src={process.env.PUBLIC_URL + '/images/omc_logo.png'} width="100%" height="200px" style={{ padding: "10px" }} alt="omc logo" />
                    </Col> */}
                    <Col md="3">
                        <ul className="footer-widget">
                            <li className="title-widget"><i className="shadow-text fa fa-square"></i> Sitemap</li>
                            <Link to="/history"><li><i className="fa fa-angle-double-right"></i> History</li></Link>
                            <Link to="/primary"><li><i className="fa fa-angle-double-right"></i> Primary School</li></Link>
                            <Link to="/secondary"><li><i className="fa fa-angle-double-right"></i> Secondary School</li></Link>
                            <Link to="/ijmb"><li><i className="fa fa-angle-double-right"></i> IJMB</li></Link>
                            <Link to="/admission/primary"><li><i className="fa fa-angle-double-right"></i> Admission</li></Link>
                            <Link to="/"><li><i className="fa fa-angle-double-right"></i> Career</li></Link>
                        </ul>
                    </Col>
                    <Col md="4">
                        <ul className="footer-widget">
                            <li className="title-widget"><i className="shadow-text fa fa-square"></i> Useful Links</li>
                            <Link to="https://kwarastate.gov.ng/ministry-of-education-science-and-technology/"><li><i className="fa fa-globe"></i> Kwara State Min of Education</li></Link>
                            <Link to="http://education.gov.ng/"><li><i className="fa fa-globe"></i> Federal Ministry of Education</li></Link>
                            <Link to="https://www.neco.gov.ng/"><li><i className="fa fa-globe"></i> NECO</li></Link>
                            <Link to="http://www.waecnigeria.org/"><li><i className="fa fa-globe"></i> WAEC</li></Link>
                            <Link to="https://www.ijmb.org.ng"><li><i className="fa fa-globe"></i> IJMB</li></Link>
                        </ul>
                    </Col>
                    <Col md="3">
                        <ul className="footer-widget" style={{ textAlign: "left", listStyle: "none" }}>
                            <li className="title-widget omc-knicker"><i className="shadow-text fa fa-square"></i> Contact Details</li>
                            <li>
                                <address style={{ fontSize: "0.9rem" }}>
                                    info@omowumi.org<br />
                                    (+234) 80-********<br />
                                    <i>Visit us at:</i><br />
                                    Agunbiade Street, Ganiki, Sango,<br />
                                    Ilorin, Kwara State,<br />
                                    Nigeria.<br />
                                </address>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            {/* <span className="pull-right omc-knicker"><small><sup>Powered By</sup> Mutems Technologies</small></span> */}
        </footer>
    )
}
export default Footer;
