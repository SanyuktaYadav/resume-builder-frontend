import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";

const Skills = ({ formData, setFormData }) => {
  const { nextStep, previousStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-primary">Skills</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Skills</Form.Label>
          <Form.Control
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
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

export default Skills;
