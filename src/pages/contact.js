import ContactUs from '@/components/contact-form/contact-form'
import React from 'react'
import {  Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
       <div className='faq-title-details'>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="d-flex flex-column justify-content-center align-items-center">
              <h1 className='faq'>Contact us</h1>
              <h4 className="faq-sub-title">We are ready to attend to your concerns anytime.</h4>
            </Col>
          </Row>
        </div>
      <ContactUs/>
      
    </>
  )
}

export default Contact