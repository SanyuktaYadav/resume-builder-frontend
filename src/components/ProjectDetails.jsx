import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";

const ProjectDetails = ({ formData, setFormData }) => {
  const { nextStep, previousStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-primary">Project Details</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Project 1 Title</Form.Label>
          <Form.Control
            type="text"
            name="proj1_title"
            placeholder="Project 1 Title"
            value={formData.proj1_title}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Project 1 Link</Form.Label>
          <Form.Control
            type="text"
            name="proj1_link"
            placeholder="Project 1 Link"
            value={formData.proj1_link}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Project 1 Description</Form.Label>
          <Form.Control
            type="text"
            name="proj1_desc"
            placeholder="Project 1 Description"
            value={formData.proj1_desc}
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

export default ProjectDetails;
