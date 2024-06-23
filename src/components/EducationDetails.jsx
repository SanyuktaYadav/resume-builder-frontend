import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";

const EducationDetails = ({ formData, setFormData }) => {
  const { nextStep, previousStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-primary">Education Details</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">School 1</Form.Label>
          <Form.Control
            type="text"
            name="edu1_school"
            placeholder="School 1"
            value={formData.edu1_school}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Year</Form.Label>
          <Form.Control
            type="text"
            name="edu1_year"
            placeholder="Year"
            value={formData.edu1_year}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Qualification</Form.Label>
          <Form.Control
            type="text"
            name="edu1_qualification"
            placeholder="Qualification"
            value={formData.edu1_qualification}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Description</Form.Label>
          <Form.Control
            type="text"
            name="edu1_desc"
            placeholder="Description"
            value={formData.edu1_desc}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Button variant="secondary" onClick={previousStep} className="m-2">
          Back
        </Button>
        <Button variant="primary" onClick={nextStep} className="m-2">
          Next
        </Button>
      </Form>
    </div>
  );
};

export default EducationDetails;
