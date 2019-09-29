import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const Primary = () => {
    const head_mistress = process.env.PUBLIC_URL + '/images/head_mistress.jpg';
    const bg_image0 = process.env.PUBLIC_URL + '/images/pri.jpeg';
    return (
        <React.Fragment>
            <div style={{ backgroundImage: "url(" + bg_image0 + ")", minHeight: "130px", backgroundPosition: "left", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
            </div>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 9 }}>
                        <div className="main-panel">
                            <p className="header-001">Primary School</p>
                            <p>Prior to her approval by the Kwara State Ministry of ducation in the year 2003, the primary section of the school kickstarted with a total number of six(6) pioneer pupils and some staffs.</p>
                            <p>With an infrastructural strength of 7 blocks of classrooms at inception, Omowumi Group of Schools now has ** blocks of classrooms in her primary section, ** academic staffs and more than ** pupils.</p>
                            <p>Due to her success and achievements in producing high quality students who are ready to explore knowledge beyond boundaries, a need for a citadel of learning which will be capable of modeling the young minds into their various dreams arose, and hence,
                            the secondary section came into existence to serve these purpose.</p>
                            <p>While providing an exceptional academic and moral value to her environ, her school fees is set in line with the nation's economy reality, very moderate and affordable without compromising quality.</p>
                            <p>With a flexible payment plan put in place, the fees could be paid in two installments, with 70% on the first installment and 30% on the second installment with 0% interest</p>

                            {/* <p>The school fee is in line with the nation's economy reality, very moderate & avoidable.</p>
                            <p>The fee could be made on two installmental basis with 70% on the first installment. The school has 42 blocks of class rooms & well equipped laboratories. The school has a big examination hall that has capacity of more than 300 students & a modern ICT room. The school is blessed with qualified teachers who utilised modern instructional methods of teaching. 
                            This could b attested t by d continuous successes recorded over d last six years in public examinations.</p> */}
                        </div>
                    </Col>
                    <Col sm="12" md="3">
                        <div className="main-panel">
                            <div className="side-image" style={{ backgroundImage: "url(" + head_mistress + ")", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
                            <p className="header-003" style={{ textAlign: "center" }}>Mrs ****** *******</p>
                            <p className="header-002" style={{ textAlign: "center" }}>Head Mistress</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

Table.propTypes = {
    striped: PropTypes.bool,
    responsive: PropTypes.bool
};
export default Primary
