import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaPray, FaHandsHelping, FaEllipsisH } from 'react-icons/fa';
import { MdRateReview, MdMoreHoriz } from 'react-icons/md';
import { Container, Row, Col, Accordion, Tab, Tabs } from 'react-bootstrap';

const FaqBlock = ({ showTabs = true, showHeader = true, showFooter = true }) => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [openItem, setOpenItem] = useState('0');

  const volunteerFAQs = [
    { question: "How can I volunteer?", answer: "You can volunteer by signing up on our website or visiting our office." },
    { question: "What are the requirements to volunteer?", answer: "You must be at least 18 years old and willing to commit a minimum of 5 hours per week." },
    { question: "Are there training sessions for volunteers?", answer: "Yes, we provide comprehensive training sessions for all volunteers." },
  ];

  const testimonyFAQs = [
    { question: "Can I remain anonymous?", answer: "Yes, you have the option to share your testimony anonymously." },
    { question: "How can I share my testimony?", answer: "You can share your testimony by filling out the form on our 'Share Testimony' page." },
    { question: "Will my testimony be made public?", answer: "Your testimony will only be made public with your consent." },
  ];

  const prayerFAQs = [
    { question: "How can I request a prayer?", answer: "You can request a prayer by filling out the form on our 'Request Prayer' page." },
    { question: "Can I request a prayer anonymously?", answer: "Yes, you can request a prayer anonymously." },
    { question: "Will my prayer request be shared publicly?", answer: "Your prayer request will only be shared with your consent." },
  ];

  const otherFAQs = [
    { question: "What are your office hours?", answer: "Our office hours are from 9 AM to 5 PM, Monday to Friday." },
    { question: "Where are you located?", answer: "We are located at 123 Main Street, Anytown, USA." },
    { question: "How can I contact support?", answer: "You can contact support by emailing support@ourwebsite.com or calling (123) 456-7890." },
    { question: "Do you have any upcoming events?", answer: "Yes, we have several events planned. Please check our Events page for more details." },
    { question: "How can I donate?", answer: "You can donate by visiting our Donate page and following the instructions." },
  ];

  return (
    <Container>
      {showHeader && (
        <div className='faq-title-details'>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="d-flex flex-column justify-content-center align-items-center">
              <h1 className='faq'>FAQs</h1>
              <h4 className="faq-sub-title">We have answered any questions that you may have. If there are more, Please reach out to us.</h4>
            </Col>
          </Row>
        </div>
      )}

      <Row>
        {showTabs && (
          <Col md={3}>
            <div className="tabs-container">
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => k ? setActiveTab(k) : void 0}
                className="flex-column tab-list"
              >
                <Tab eventKey="volunteer" title={
                  <div className="d-flex align-items-center">
                    <FaHandsHelping color={activeTab === 'volunteer' ? 'white' : 'grey'} className="me-2" />
                    <span>Volunteer</span>
                  </div>
                } />
                <Tab eventKey="testimony" title={
                  <div className="d-flex align-items-center">
                    <MdRateReview color={activeTab === 'testimony' ? 'white' : 'grey'} className="me-2" />
                    <span>Testimony</span>
                  </div>
                } />
                <Tab eventKey="prayers" title={
                  <div className="d-flex align-items-center">
                    <FaPray color={activeTab === 'prayers' ? 'white' : 'grey'} className="me-2" />
                    <span>Prayer</span>
                  </div>
                } />
                <Tab eventKey="others" title={
                  <div className="d-flex align-items-center">
                    {/* <MdMoreHoriz color={activeTab === 'others' ? 'white' : 'grey'} className="me-2" /> */}
                    <span>Others</span>
                  </div>
                } />
              </Tabs>
            </div>
          </Col>
        )}

        <Col md={showTabs ? 9 : 12} className={showTabs ? '' : 'mx-auto'}>
          <div className="accordion-container">
            <Accordion defaultActiveKey={openItem}>
              {activeTab === 'volunteer' && volunteerFAQs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item-custom">
                  <Accordion.Header onClick={() => setOpenItem(openItem === index.toString() ? '' : index.toString())}>
                    <div className='d-flex justify-content-between align-items-start w-100 header-content'>
                      <span style={{ width: '92%' }}>{faq.question}</span>
                      {openItem === index.toString() ? <AiFillMinusCircle className='icon-style' /> : <AiFillPlusCircle className='icon-style' />}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    <span style={{ width: '92%' }}>{faq.answer}</span>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {activeTab === 'testimony' && testimonyFAQs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item-custom">
                  <Accordion.Header onClick={() => setOpenItem(openItem === index.toString() ? '' : index.toString())}>
                    <div className='d-flex justify-content-between align-items-center w-100 header-content'>
                      {faq.question}
                      {openItem === index.toString() ? <AiFillMinusCircle className='icon-style' /> : <AiFillPlusCircle className='icon-style' />}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {activeTab === 'prayers' && prayerFAQs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item-custom">
                  <Accordion.Header onClick={() => setOpenItem(openItem === index.toString() ? '' : index.toString())}>
                    <div className='d-flex justify-content-between align-items-center w-100 header-content'>
                      {faq.question}
                      {openItem === index.toString() ? <AiFillMinusCircle className='icon-style' /> : <AiFillPlusCircle className='icon-style' />}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {activeTab === 'others' && otherFAQs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item-custom">
                  <Accordion.Header onClick={() => setOpenItem(openItem === index.toString() ? '' : index.toString())}>
                    <div className='d-flex justify-content-between align-items-center w-100 header-content'>
                      {faq.question}
                      {openItem === index.toString() ? <AiFillMinusCircle className='icon-style' /> : <AiFillPlusCircle className='icon-style' />}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="pt-0">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>

      {showFooter && (
        <div className="d-flex justify-content-center align-items-center faq-footer-margin">
          <Row className="w-100 justify-content-center align-items-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h2 className="faq-footer-title">Still have questions?</h2>
              <p className="reach-out-text mx-auto">Reach out to us by clicking the button below.</p>
              <button className="pen-button mx-auto mt-4 fw-bold">Contact Us</button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default FaqBlock;
