import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const IJMB = () => {
    const head_mistress = process.env.PUBLIC_URL + '/images/head_mistress.jpg';
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 12 }}>
                    <div className="main-panel">
                        <p className="header-001">IJMB Program</p>
                        <p>As an educational institution, we have accumulated considerable experience over the last fifteen (15) years.
                        As a result of the excellent performance in moral and educational upbringing of Primary and Secondary students, through Omowumi Nursery/Primary and Model College,
                        which was reflected in the overall quality of students graduated from the schools.</p>
                        <p>With several awards and recognition in both in academic and sporting activities.
                        We have since nurtured so many promising future leaders who have graduated in various Universities, Polytechnics, Colleges of Education and other tertiary institutions of learning across the world in different professions. </p>
                        <p>In continuous persuit to providing educational services to her immediate community and humanity at large, Omowumi Model School partnered with the Interm Joint Matriculation Board(IJMB) to open a center for Advance Level Programme which is intended for
                        students aspiring to secure admission into any Nigerian university without UTME through Direct Entry(DE)</p>
                        <p>The programme is opened to all interested students nationwide and any course can be offered be it Science,Art or Social Science and Management Studies.</p>
                        <p>The IJMB Centre organizes its academic activities along collegiate lines. Its academic programme offerings is taught in a serene environment of interdisciplinary collaboration. For administrative convenience, teaching activities, though interdisciplinary approach, is organized on the basis of the single subject Department being the basic academic unit. Each of such Departments is headed by a resourceful and competent hands.</p>
                        <p>It conform to the academic directive from the main campus as dictated by the Parent Universities with a well-defined Minimum Academic Standards (MAS) for academic programmes, and keep abreast of modern information and communication technology driven environment worthy of a World-Class IJMB Centre. The overall goal of the IJMB Centre is to epitomize the noble tradition of qualitative higher education in its long achievement of intellectual, cultural and moral excellence through the pursuit of academic excellence by ensuring that qualified academic staff and that the standards of teaching is in tune with global trends.</p>
                        
                        <p className="header-001">Program Structure</p>
                        <p>The IJMB Centre develop its academic programmes in a structured, carefully planned and well-balanced manner to ensure that adequate and material resources are always mobilized, allocated and utilized to guarantee quality, prudence and accountability.</p>

                        <p>A fully equipped Computer and Internet Center is put in place to enhance research and exchange of informational material, technological transfer of information as well as to make the work of staff and students a lot easier in the pursuit of real academic development and advancement. The IJMB Centre will therefore in due course procure and install more Computer systems and Internet network systems to enhance qualitative teaching, learning and research among students and staff of the IJMB Centre. </p>
                        <p>The Centre is already covered by the services of 9mobile, Airtel, MTN and Glo networks. In the same vein, effective communication network through intercom is also provided within the offices of the Study Centre, which will also be complemented by the Internet access to be provided through the Computer Centre. This Unit is responsible for connecting the Study Centre Community to the national and international super highway networks, for easy information access and transmission.</p>

                        <p className="header-001">Our Vision</p>
                        <p>To bring qualitative and competitive higher educational standard into Ilorin Metropolis, to add more value in ranking of the parent university amongst the best Advance Studies Centre in the world and to develop individuals that will be equipped to make positive impacts on themselves, the nation and the global world through the provision of highly qualitative education with good moral and academic excellence.</p>
                        
                        <p className="header-001">Our Mission </p>
                        <p>To provide all round education, towards intellectual, physical and character development of our human capital product, taking cognizance of their ability and personality. Our product are expected to have a sense of self-esteem and the pride of belonging to a first class institution.</p>
                        
                        <p className="header-001">Our Facilities</p>
                        <ul>
                            <li>Computer/Information Technology unit with internet connectivity.</li>
                            <li>Boarding Facilities</li>
                            <li>E-learning Facilities</li>
                        </ul>

                        <p className="header-001">Course Duration</p>
                        <p>A’ Level = 2 years </p>
                        <p>O’ Level and other preparatory programmes = (1 year) </p>
                        <p><b>Note:</b> One year shall be considered appropriate for students to attempt A’ level Examination on request.</p>

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
            </Row>
        </Container>
    )
}

Table.propTypes = {
    striped: PropTypes.bool,
    responsive: PropTypes.bool
};
export default IJMB
