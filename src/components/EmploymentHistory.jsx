import React from "react";
import { Card, Table } from "react-bootstrap";

const EmploymentHistory = () => {
  // Placeholder data - replace with your actual history
  const history = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      languages: "JavaScript, TypeScript, Python",
      frameworks: "React, Node.js, Django",
      years: "2021 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions",
      languages: "HTML, CSS, JavaScript",
      frameworks: "Vue.js, Bootstrap",
      years: "2018 - 2021",
    },
  ];

  return (
    <Card className="shadow-sm mb-5 bg-dark text-light border-secondary">
      <Card.Header className="bg-secondary text-white">
        <h2 className="mb-0 h5">Employment History</h2>
      </Card.Header>
      <Card.Body>
        <Table variant="dark" striped hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Languages Used</th>
              <th>Frameworks Used</th>
              <th>Years of Employment</th>
            </tr>
          </thead>
          <tbody>
            {history.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.languages}</td>
                <td>{job.frameworks}</td>
                <td>{job.years}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EmploymentHistory;