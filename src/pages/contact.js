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
          <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="R46ZM63WASRWE" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_CH/i/scr/pixel.gif" width="1" height="1" />
</form>

        </div>
      <ContactUs/>
      
    </>
  )
}

export default Contact

// [11:35 PM, 8/22/2024] Chizzy: Chizzy123@
// [11:36 PM, 8/22/2024] Chizzy: ibemeruchizzy@gmail.com