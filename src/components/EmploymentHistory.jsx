import React, {useState, useEffect} from "react";
import { Card, Table } from "react-bootstrap";
import Switch from 'react-switch';

function EmploymentHistory() {
  
    const [employment, setEmployment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showNonTechnical, setShowNonTechnical] = useState(false);

    const handleFilterChange = (nonTechnicalShow) => {
      setShowNonTechnical(nonTechnicalShow);
    };
  
    useEffect(() => {

        const params = new URLSearchParams();
        params.append("showAll", showNonTechnical);

        // Fetch from the Node.js Express server URL
        fetch(`/api/getexperience/?${params}`)
            .then((res) => res.json())
            .then((data) => {
                setEmployment(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data from API:', err);
                setLoading(false);
            });

    }, [showNonTechnical]);
  
    if (loading) return <p>Loading employment history...</p>;

  return (
    <Card className="shadow-sm mb-5 bg-dark text-light border-secondary">
      <Card.Header className="bg-secondary text-white position-relative d-flex align-items-center justify-content-center">
        <h2 className="mb-0 h5">Employment History</h2>

        <label className="d-flex align-items-center gap-2 mb-0 position-absolute top-50 end-0 translate-middle-y me-3">
          <span>Show non-technical:</span>
          <Switch
            onChange={handleFilterChange}
            checked={showNonTechnical}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            height={20}
            width={48}
          />
        </label>
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
            {employment.map((job, index) => (
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