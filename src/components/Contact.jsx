import React from "react";
import { Card, Table } from "react-bootstrap";

function Contact() {

  const contactDetails = [
    {
      Title: "Email",
      Value: "traviswylie58@gmail.com"
    },
    {
      Title: "Phone",
      Value: "(+64) 022 100 5064",
    }
  ];

  return (
    <Card className="shadow-sm mb-5 bg-dark text-light border-secondary">
      <Card.Header className="bg-secondary text-white">
        <h2 className="mb-0 h5">Contact Information</h2>
      </Card.Header>
      <Card.Body>
        <Table variant="dark" striped hover responsive className="mb-0">
          <tbody>
            {contactDetails.map((con, index) => (
              <tr key={index}>
                <td>{con.Title}</td>
                <td>{con.Value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Contact;