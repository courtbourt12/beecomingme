import React from "react";
import AddCommentForm from "../components/AddCommentForm";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../scss/MyGoalDisplay.scss";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

export default function GoalDisplay() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const userId = savedUser._id;

  let url = window.location.href;
  let ownerId = url.substring(url.length - 24, url.length);
  let goalId = url.substring(url.length - 56, url.length - 32);
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { user_id: ownerId },
  });
  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const userData = data?.user.goals || {};
  console.log("loading ", loading);
  console.log("userData ", userData);

  const thisGoal = userData.filter((goals) => {
    if (goals._id === goalId) {
      return goals;
    }
  });

  console.log("thisGoal ", thisGoal);
  return (
    <div className="myGoalDisplay">
      <div className="goalContainer">
        <h2 className="goalTitle">{thisGoal[0].title}</h2>
        <p className="goalDescription">{thisGoal[0].description}</p>
        <div className="friendsContainer">
          <h1>Friends </h1>
          <h2 className="addFriends">
            {/* make friends a block element so it's above the list */}
            <ul>
              {thisGoal[0].friends.map((friend) => {
                return (
                  <>
                    <li>
                      <h5 className="friends">{friend.username}</h5>
                    </li>
                  </>
                );
              })}
            </ul>
          </h2>
        </div>
        <div className="stepsContainer">
          <h2 className="addSteps">
            <span>Steps: </span>
            <ul></ul>
          </h2>
          {thisGoal[0].steps.map((step) => {
            let status;
            switch (step.status) {
              case 1:
                status = "Not Started";
                break;
              case 2:
                status = "In Progress";
                break;
              case 3:
                status = "Completed";
                break;
              default:
                status = "";
                break;
            }
            return (
              <Card className="homeCard stepStatusCard">
                <Card.Header className="editStep">
                  <span>{step.title}</span>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {Date("en-US", step.due).substring(0, 15)}
                  </Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                  <Button variant="success">{status}</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Accordion defaultActiveKey="0" className="commentCard" flush>
                    <Accordion.Header className="commentHeader">
                      Comment
                      <AddCommentForm />
                    </Accordion.Header>
                    {thisGoal[0].steps[0].comments.map((comment) => {
                      return (
                        <Accordion.Item eventKey="0">
                          <Accordion.Body>
                            <Card className="singleCommentCard">
                              <ListGroup>
                                <ListGroup.Item>
                                  <span className="commentUsername">
                                    {comment.username}
                                  </span>
                                  <span className="commentBody">
                                    {comment.description}
                                  </span>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
