import React from "react";
import { Card, Table } from "react-bootstrap";

const Qualifications = () => {
  // Placeholder data - replace with your actual qualifications
  const qualifications = [
    {
      title: "B.Sc. in Computer Science",
      awardedBy: "University of Technology",
      year: "2018",
    },
    {
      title: "Full Stack Web Development Certification",
      awardedBy: "Online Academy",
      year: "2019",
    },
  ];

  return (
    <Card className="shadow-sm mb-5 bg-dark text-light border-secondary">
      <Card.Header className="bg-secondary text-white">
        <h2 className="mb-0 h5">Qualifications</h2>
      </Card.Header>
      <Card.Body>
        <Table variant="dark" striped hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Qualification Title</th>
              <th>Awarded By</th>
              <th>Year Awarded</th>
            </tr>
          </thead>
          <tbody>
            {qualifications.map((qual, index) => (
              <tr key={index}>
                <td>{qual.title}</td>
                <td>{qual.awardedBy}</td>
                <td>{qual.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Qualifications;