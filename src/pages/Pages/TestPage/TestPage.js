import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';

const TestPage = () => {
    document.title="TestPage | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="TestPage" pageTitle="Pages" />
          <Row>
            <Col xs={12}>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TestPage;