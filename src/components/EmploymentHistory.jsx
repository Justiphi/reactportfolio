import React, {useState, useEffect} from "react";
import { Card, Table } from "react-bootstrap";

function EmploymentHistory() {
  
    const [employment, setEmployment] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        // Fetch from the Node.js Express server URL
        fetch('http://localhost:8000/api/experience')
            .then((res) => res.json())
            .then((data) => {
                setEmployment(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data from API:', err);
                setLoading(false);
            });
    }, []);
  
    if (loading) return <p>Loading employment history...</p>;

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
              <th>Year Stated</th>
              <th>Year Ended</th>
            </tr>
          </thead>
          <tbody>
            {employment.filter(e => e.SoftwareBased).map((job, index) => (
              <tr key={index}>
                <td>{job.Title}</td>
                <td>{job.Company}</td>
                <td>{job.Languages}</td>
                <td>{job.Framework}</td>
                <td>{job.StartYear}</td>
                <td>{job.EndYear}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EmploymentHistory;