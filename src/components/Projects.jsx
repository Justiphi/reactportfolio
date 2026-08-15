import React, {useState, useEffect} from "react";
import { Card, Table } from "react-bootstrap";

function ProjectsList() {
  
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        // Fetch from the Node.js Express server URL
        fetch('http://127.0.0.1:8000/api/projects')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data from API:', err);
                setLoading(false);
            });
    }, []);
  
    if (loading) return <p>Loading projects...</p>;

  return (
    <Card className="shadow-sm mb-5 bg-dark text-light border-secondary">
      <Card.Header className="bg-secondary text-white">
        <h2 className="mb-0 h5">Personal Projects</h2>
      </Card.Header>
      <Card.Body>
        <Table variant="dark" striped hover responsive className="mb-0">
          <thead>
            <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Language(s)</th>
                <th>Framework(s)</th>
                <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.Title}</td>
                <td>{project.Description}</td>
                <td>{project.Languages}</td>
                <td>{project.Framework}</td>
                <td><a href={project.GithubLink} rel="noopener">(Github)</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProjectsList;