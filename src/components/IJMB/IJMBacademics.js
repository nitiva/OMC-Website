import React from 'react';
import IJMBsidenav from './IJMBsidenav';
import './IJMB.css';
import { Container, Row, Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const IJMBacademics = () => {
    return (
        <Container>
            <Row>
                <IJMBsidenav />
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Course Duration</p>
                        <p>A’ Level = 2 years </p>
                        <p>O’ Level and other preparatory programmes = (1 year) </p>
                        <p><b>Note:</b> One year shall be considered appropriate for students to attempt A’ level Examination on request.</p>

                        <Table striped responsive className="text-center">
                            <thead>
                                <tr>
                                    <td colSpan="3" className="header-002">Available Subject Combinations </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>Physics</td>
                                    <td>Chemistry</td>
                                    <td>Biology</td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>Chemistry</td>
                                    <td>Mathematics</td>
                                    <td>Biology</td>
                                </tr>
                                <tr>
                                    <td>#3</td>
                                    <td>Physics</td>
                                    <td>Chemistry</td>
                                    <td>Mathematics</td>
                                </tr>
                                <tr>
                                    <td>#4</td>
                                    <td>Geography</td>
                                    <td>Mathematics</td>
                                    <td>Economics</td>
                                </tr>
                                <tr>
                                    <td>#5</td>
                                    <td>Physics</td>
                                    <td>Geography</td>
                                    <td>Mathematics</td>
                                </tr>
                                <tr>
                                    <td>#6</td>
                                    <td>Physics</td>
                                    <td>Economics</td>
                                    <td>Mathematics</td>
                                </tr>
                                <tr>
                                    <td>#7</td>
                                    <td>Economics</td>
                                    <td>Account</td>
                                    <td>Mathematics</td>
                                </tr>
                                <tr>
                                    <td>#8</td>
                                    <td>Economics</td>
                                    <td>Government</td>
                                    <td>Literature</td>
                                </tr>
                                <tr>
                                    <td>#9</td>
                                    <td>C.R.S</td>
                                    <td>Literature</td>
                                    <td>Government / History</td>
                                </tr>
                                <tr>
                                    <td>#10</td>
                                    <td>I.R.S</td>
                                    <td>Literature</td>
                                    <td>Government / History</td>
                                </tr>
                                <tr>
                                    <td>#11</td>
                                    <td>Literature</td>
                                    <td>Yoruba</td>
                                    <td>History/ Government </td>
                                </tr>
                                <tr>
                                    <td>#12</td>
                                    <td>Management</td>
                                    <td>Account</td>
                                    <td>Economics </td>
                                </tr>
                                <tr>
                                    <td>#13</td>
                                    <td>Account</td>
                                    <td>Geography</td>
                                    <td>Government </td>
                                </tr>
                                <tr>
                                    <td>#15</td>
                                    <td>C.R.S</td>
                                    <td>Economics</td>
                                    <td>Government </td>
                                </tr>
                                <tr>
                                    <td>#16</td>
                                    <td>I.R.S</td>
                                    <td>Economics</td>
                                    <td>Government </td>
                                </tr>
                                <tr>
                                    <td>#17</td>
                                    <td>Yoruba</td>
                                    <td>C.R.S</td>
                                    <td>Government </td>
                                </tr>
                                <tr>
                                    <td>#18</td>
                                    <td>Yoruba</td>
                                    <td>C.R.S</td>
                                    <td>Literature </td>
                                </tr>
                                <tr>
                                    <td>#19</td>
                                    <td>Yoruba</td>
                                    <td>Government</td>
                                    <td>Literature </td>
                                </tr>
                                <tr>
                                    <td>#20</td>
                                    <td>Yoruba</td>
                                    <td>I.R.S</td>
                                    <td>Government </td>
                                </tr>
                                <tr>
                                    <td>#21</td>
                                    <td>Yoruba</td>
                                    <td>I.R.S</td>
                                    <td>Literature </td>
                                </tr>
                            </tbody>
                        </Table>
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
export default IJMBacademics
