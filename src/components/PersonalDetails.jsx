import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";

const PersonalDetails = ({ formData, setFormData }) => {
  const { nextStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-primary">Personal Details</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2 align-self-end">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Button variant="primary" onClick={nextStep}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
