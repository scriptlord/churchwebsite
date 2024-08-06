import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import Image from 'next/image';

const ImageCard = ({ title, src, isSelected, onClick }) => (
  <Card 
    className={`contact-card-item text-white border-0 ${isSelected ? 'selected' : ''}`} 
    onClick={onClick}
    style={{ height: '150px' }}
  >
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src={src} alt="" fill style={{objectFit: "cover"}}/>
    </div>
    <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
      <Card.Title className="contact-card-title">{title}</Card.Title>
    </Card.ImgOverlay>
  </Card>
);



const ContactUs = () => {
  const formContainerRef = useRef(null);
   const [selectedCard, setSelectedCard] = useState(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const [showHiddenContent, setShowHiddenContent] = useState(false);

 useEffect(() => {
  const checkScroll = () => {
    if (formContainerRef.current) {
      const { scrollHeight, clientHeight } = formContainerRef.current;
      setShowScrollArrow(scrollHeight > clientHeight);
    }
  };

  const handleCardClick = (title) => {
    setSelectedCard(title === selectedCard ? null : title);
  };

  const handleResize = () => {
    checkScroll();
    setShowHiddenContent(false); 
  };

  checkScroll();
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const handleScroll = () => {
  if (formContainerRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = formContainerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 20) { // 20px threshold
      setShowHiddenContent(true);
    }
  }
};
  
  return (
    <Container className="contact-container mt-5">
      <Row>
        <Col lg={6} className="mb-4 mb-lg-0">
          <h1 className="contact-category px-2">Select a category</h1>
            <Row>
                <Col md={4} className="mb-4 cursor-pointer">
                    <ImageCard title="Volunteer" src="/images/volunteer.svg"/>
                </Col>
                <Col md={4} className="mb-4 cursor-pointer">
                    <ImageCard title="Join Discipleship Group" src="/images/pastor.svg" />
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4 cursor-pointer">
                    <ImageCard title="Prayer Requests" src="/images/prayer.svg" />
                </Col>
                <Col md={4} className="mb-4 cursor-pointer">
                    <ImageCard title="Join Discipleship Group" src="/images/disciple.svg" />
                </Col>
            </Row>
        </Col>
        <Col lg={6}>
          <div className="form-container" ref={formContainerRef}>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name here" />
              </Form.Group>
              <Form.Group controlId="formLastName" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name here" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email here" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message here" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email here" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message here" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email here" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message here" />
              </Form.Group>
              {showScrollArrow && <div className="scroll-arrow"></div>}
               <Button variant="primary" type="submit" className="pen-button mt-4 fw-bold">
                Submit
              </Button>
            </Form>
          </div>
           
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
