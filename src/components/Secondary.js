import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const Secondary = () => {
    const head_mistress = process.env.PUBLIC_URL + '/images/head_mistress.jpg';
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 8 }}>
                    <div className="main-panel">
                        <p className="header-001">Secondary School</p>
                        <p>The secondary school have a total number of *** classes, approximately *** students and *** staffs.</p>


                        <p className="header-001">School Fees</p>
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <td>CLASS</td>
                                    <td>FIRST TERM</td>
                                    <td>SECOND TERM</td>
                                    <td>THIRD TERM</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JSS 1</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                    <td>JSS 2</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                    <td>JSS 3</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                    <td>SS 1</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                    <td>SS 2</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                                <tr>
                                    <td>SS 3</td>
                                    <td>#</td>
                                    <td>#</td>
                                    <td>#</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col sm="12" md="4">
                    <div className="main-panel">
                        <div className="side-image" style={{ backgroundImage: "url(" + head_mistress + ")", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
                        <p className="header-003" style={{ textAlign: "center" }}> Mr Oyebamiji</p>
                        <p className="header-002" style={{ textAlign: "center" }}> Principal</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

Table.propTypes = {
    striped: PropTypes.bool,
    responsive: PropTypes.bool
};
export default Secondary
