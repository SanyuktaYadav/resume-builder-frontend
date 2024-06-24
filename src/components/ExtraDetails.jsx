import React from "react";
import { useWizard } from "react-use-wizard";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { saveAs } from "file-saver";

const ExtraDetails = ({ formData, setFormData }) => {
  const { previousStep } = useWizard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://resume-builder-backend-iota.vercel.app/api/create-pdf",
        formData
      )
      .then(() =>
        axios.get(
          "https://resume-builder-backend-iota.vercel.app/api/fetch-pdf",
          {
            responseType: "blob",
          }
        )
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "Resume.pdf");
      });
    // Handle form submission
  };

  return (
    <div>
      <h2 className="text-primary">Extra Details</h2>
      <Form>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Extra 1</Form.Label>
          <Form.Control
            type="text"
            name="extra_1"
            placeholder="Extra 1"
            value={formData.extra_1}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Form.Label className="m-2">Extra 2</Form.Label>
          <Form.Control
            type="text"
            name="extra_2"
            placeholder="Extra 2"
            value={formData.extra_2}
            onChange={handleChange}
            className="m-2 w-50"
          />
        </Form.Group>
        <Button variant="secondary" onClick={previousStep} className="m-2">
          Back
        </Button>
        <Button variant="primary" onClick={handleSubmit} className="m-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExtraDetails;
