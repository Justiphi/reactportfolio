import React, {useState, useEffect} from "react";
import { Card, Table } from "react-bootstrap";

function Qualifications() {

  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Fetch from the Node.js Express server URL
      fetch('/api/getqualifications')
          .then((res) => res.json())
          .then((data) => {
              setQualifications(data);
              setLoading(false);
          })
          .catch((err) => {
              console.error('Error fetching data from API:', err);
              setLoading(false);
          });
  }, []);

  if (loading) return <p>Loading qualifications...</p>;

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
                <td>{qual.Title}</td>
                <td>{qual.Location}</td>
                <td>{qual.Year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Qualifications;