import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const Secondary = () => {
    const principal = process.env.PUBLIC_URL + '/images/principal.jpeg';
    const sec = process.env.PUBLIC_URL + '/images/landing3.jpeg';
    return (
        <React.Fragment>
                    <div style={{ backgroundImage: "url(" + sec + ")", minHeight: "130px", backgroundPosition: "left", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
        </div>
        <Container>
            <Row>
                <Col sm="12" md={{ size: 9 }}>
                    <div className="main-panel">
                        <p className="header-001">Secondary School</p>
                        <p>The secondary school addresses the needs of early adolescents by appropriately designing their curricular and co-curricular experiences with an interdisciplinary approach, 
                        thematic ideas and questions;</p>
                        <p>For the early graders(JSS1) it is “Beyond Boundaries” and “Exploring Borders,” for the seventh graders(JSS2), the question of “Who am I?” is woven into discussions, 
                        while in the eighth grade(JSS3), students examine “Who am I in this world?”</p>
                        <p>The students, after being guided through there subjects of interest are presented to the Junior Secondary School Certifate Examination Board to be examined for quality before admitting them into the upper and final stage of their secondary school education.</p>
                        <p>The whole-child emphasis of the secondary school program is based on building study and thinking skills, learning to taking responsibilities, and developing self-confidence and a sense of moral responsibility.</p>
                        <p>Students are exposed to a wide variety of sciences, technologies, business, arts and athletic co-curricular activities as well as assemblies and age-appropriate events throughout the years of study.</p>
                        <p>After successfully passing through our citadel of learning, our students are guaranteed ready to excel in any higher institution globally.</p>
                        <p>While providing an exceptional academic and moral value to her environ, her school fees is set in line with the nation's economy reality, very moderate and affordable without compromising quality.</p>
                            <p>With a flexible payment plan put in place, the fees could be paid in two installments, with 70% on the first installment and 30% on the second installment with 0% interest</p>

                    </div>
                </Col>
                <Col sm="12" md="3">
                    <div className="main-panel">
                        <div className="side-image" style={{ backgroundImage: "url(" + principal + ")", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
                        <p className="header-003" style={{ textAlign: "center" }}> Mr Oyebamiji</p>
                        <p className="header-002" style={{ textAlign: "center" }}> Principal</p>
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
export default Secondary
