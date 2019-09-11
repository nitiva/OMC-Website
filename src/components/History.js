import React from 'react';
import './History.css';
import { Container, Row, Col } from 'reactstrap';

const History = () => {
    return (
        <Container>
            <Row>
                {/* <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .offset-md-3</Col> */}
                <Col sm="12" md={{ size: 12}}>
                    <div className="main-panel">
                    <p className="header-001">History</p>
                    <p>The idea to establish the educational institute was concieved in the ealier year 2003 in Ilorin, Kwara State.</p>
                    <p>Construction work commenced at the permanent site and 10 blocks of classrooms were constructed.</p>
                    <p>The school started as a primary school, given a provisional approval by the Kwara State Ministry of Education and Human Capital Development to commence the 2003 academic session.</p>
                    <p>The first academic programme started on the 8<sup>th</sup> of September 2003 with 20 pupils and opened seven(7) classes, they are Pre-Nursery, Nursery I, Nursery II and Primary 1, 2, 3 and 4.
                    The Pre-Nursery class has been divided into KG I, KG II, Nursery I and II & Basics 1-5.</p>
                    <p>Through a manifest effort, the population continued to increase to 150 pupil by the end of the second term of the academic session.</p>
                    <p>In 2007, Omowumi Nursery and Primary School methamophosized into what is now known today as Omowumi Model College. 
                    After a successful expedition in the delivery of Primary qualitative education, as a result of the good result, 
                    Omowumi Group of Schools advanced into the provision of higher certificate programme with the establishment of Omowumi Model College, 
                    which is also situates at the same location in Ganiki, Agunbiade area, Sango, Ilorin, Kwara State where an outstanding physical edifice structured and resources are put in place in addition to the structure in existence.</p>

                    <p className="header-001">Structure of The School</p>
                    <p>Situated in the capital of Kwara State, precisely in Ilorin East Local Government of the state. Omowumi Model School is located in the residential Ganiki area of Sango, a landmark in Ilorin metropolis.</p>
                    <p>With a relative distance to the Kwara State Polytechnic, a mobile police barrack to the south and having the Muyideen College of Education about 10 miles its west, the environment is serene, safe and conducive for academic learning.</p>
                    <p>Presently, The school has 20 blocks of classroom for the College and 22 blocks of class rooms for the primary school.</p>
                    <p>With a total staff strength of ***, busses to convey students and staffs of the school, science laboratories, ICT laboratory, playground and other facilities to enhance the studens both academically and psycologically.</p>
                    
                    <p className="header-001">NECO / WAEC</p>
                    <p>In the year 2013, the school was visited by the accreditation team of the National Examination Council, a body responsible for conducting the Junior and the Senior Secondary Certificate Examination in Nigeria and granted the approval to present her students for the NECO exam. 
                    The West Africa Examination Council, a body which conducts the examinations and award certificates comparable to those of equivalent examining authorities internationally also granted the school approval in the following year.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default History
