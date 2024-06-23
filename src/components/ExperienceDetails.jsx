import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";

const ExperienceDetails = ({ formData, setFormData }) => {
  const { nextStep, previousStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-primary">Experience Details</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Organization 1</Form.Label>
          <Form.Control
            type="text"
            name="exp1_org"
            placeholder="Organization 1"
            value={formData.exp1_org}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Position</Form.Label>
          <Form.Control
            type="text"
            name="exp1_pos"
            placeholder="Position"
            value={formData.exp1_pos}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Description</Form.Label>
          <Form.Control
            type="text"
            name="exp1_desc"
            placeholder="Description"
            value={formData.exp1_desc}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Duration</Form.Label>
          <Form.Control
            type="text"
            name="exp1_dur"
            placeholder="Duration"
            value={formData.exp1_dur}
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

export default ExperienceDetails;
