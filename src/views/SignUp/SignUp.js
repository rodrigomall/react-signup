import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <>
      <Container>
        <Row className={'bg-image border-bottom ' + (isMobile ? '':'mx-5 px-3')}>
          <Col xs={12} className={'pt-4 font-weight-bold text-size-24 ' +( isMobile ? 'px-3':'px-5')}>
            Sign up for email and updates 
          </Col>
          <Col className={isMobile ? 'p-3' : 'p-5'}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignUp;

