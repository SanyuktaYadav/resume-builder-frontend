import React, { useState } from "react";
import { Wizard } from "react-use-wizard";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import PersonalDetails from "./PersonalDetails";
import ProjectDetails from "./ProjectDetails";
import Skills from "./Skills";
import ExtraDetails from "./ExtraDetails";
import { Container } from "react-bootstrap";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",
    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",
    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",
    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",
    extra_1: "",
    extra_2: "",
  });

  return (
    <Container style={{ maxWidth: "60%", margin: "0 auto" }} fluid>
      <Wizard>
        <PersonalDetails className="h-40" formData={formData} setFormData={setFormData} />
        <EducationDetails className="h-40" formData={formData} setFormData={setFormData} />
        <ExperienceDetails className="h-40" formData={formData} setFormData={setFormData} />
        <ProjectDetails className="h-40" formData={formData} setFormData={setFormData} />
        <Skills className="h-40" formData={formData} setFormData={setFormData} />
        <ExtraDetails className="h-40" formData={formData} setFormData={setFormData} />
      </Wizard>
    </Container>
  );
};

export default Form;
