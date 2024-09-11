import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import NewsModel from '../assets/images/newsletrModel.png'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setValidated(true);
      setShowModal(true);
    } else {
      setValidated(false);
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleConfirm = () => {
    // Perform your data submission here (e.g., API call)
    console.log("Email submitted:", email);
    setShowModal(false);
    // Optionally, reset the form
    setEmail('');
    setValidated(false);
  };

  return (
    <>
      <div className="newsleterSec">
        <div className="container">
          <div className="newsletrpnl">
            <div className="newsletrModel">
              <img src={NewsModel} alt="" />
            </div>
            <div className="newsletrform wow fadeInRight">
              <h3>Newsletter Signup</h3>
              <div className="newsletrrtfrm">
                <form onSubmit={handleSubmit} noValidate validated={validated}>
                  <div className="newsletrrtfrminr">
                    <div className="newsfrm">
                      <span className="icon-Vector-3"></span>
                      <input type="email" id="email" name="email" placeholder="E-Mail" value={email} onChange={handleEmailChange} required isInvalid={!validated && email !== ''}/>
                    </div>
                    <button variant="primary" type="submit" className="defultBtn"><i className="icon-Arrow-2"></i><span>Subscribe</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Email:</strong> {email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Newsletter
