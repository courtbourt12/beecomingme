import React from "react";
import AddCommentForm from "../components/AddCommentForm";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function GoalDisplay() {
  return (
    <div>
      <h1>My Friends' Goals</h1>
      <Card className="text-center" style = {{ width: "60%", marginLeft: "auto", marginRight: "auto"}}>
        <Card.Header style= {{background: "rgba(245, 206, 78, 0.5)"}}>Username</Card.Header>
        <Card.Body className="goalDescription" style= {{background: "rgba(240, 227, 186, 0.5)"}}>
          <Card.Title>Goal Title</Card.Title>
          <Card.Text>
            Goal Description
          </Card.Text>
          <Card.Text>
            Due Date
          </Card.Text>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header style= {{background: "rgba(255, 255, 255, 0.822)"}}>Steps</Accordion.Header>
              <Accordion.Body>
              <Card className="text-center">
                <Card.Header style= {{background: "rgba(245, 206, 78, 0.5)"}}>Step Title</Card.Header>
                <Card.Body className="goalDescription" style= {{background: "rgba(240, 227, 186, 0.5)"}}>
                  <Card.Title>Due Date</Card.Title>
                  <Card.Text>
                    Step Description
                  </Card.Text>
                      <h4>Comments</h4>
                      <AddCommentForm />
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header style= {{background: "rgba(255, 255, 255, 0.822)"}}>Comments</Accordion.Header>
                      <Accordion.Body>
                      <Card>
                        <Card.Header style= {{background: "rgba(245, 206, 78, 0.5)"}}>Username</Card.Header>
                          <Card.Body style= {{background: "rgba(240, 227, 186, 0.5)"}}>
                            <blockquote className="blockquote mb-0">
                              <p>
                                {' '}
                                Comment{' '}
                              </p>
                            </blockquote>
                          </Card.Body>
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}
