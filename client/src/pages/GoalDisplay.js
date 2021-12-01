import React from "react";
import AddCommentForm from "../components/AddCommentForm";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../scss/MyGoalDisplay.scss";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import {
  ADD_COMMENT,
} from "../utils/mutations";

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
          <h2 className="addFriends">
            {/* make friends a block element so it's above the list */}
            <h1>Friends </h1>
            <ul>
              {thisGoal[0].friends.map((friend) => {
                return (
                  <>
                    <li>
                      <h5 className="friends">
                        {friend.username}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </h5>
                    </li>
                  </>
                );
              })}
            </ul>

          </h2>
          <ul></ul>
        </div>
        <div className="stepsContainer">
          <h2 className="addSteps">
            <span>Steps: </span>
            <ul></ul>

          </h2>
          {thisGoal[0].steps.map((step) => {
            return (
              <Card className="homeCard stepStatusCard">
                <Card.Header className="editStep">
                  <span>{step.title}</span>

                </Card.Header>
                <Card.Body>
                  <Card.Title>{step.due}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                  <Button variant="success">{step.status}</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {step.comments.map((comment) => {
                    return (
                      <Accordion
                        defaultActiveKey="0"
                        className="commentCard"
                        flush
                      >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="commentHeader">
                            Comment
                          </Accordion.Header>
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
                      </Accordion>
                    );
                  })}
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
    // <div>
    //   <h1>My Friends' Goals</h1>
    //   <Card
    //     className="text-center"
    //     style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
    //   >
    //     <Card.Header style={{ background: "rgba(245, 206, 78, 0.5)" }}>
    //       Username
    //     </Card.Header>
    //     <Card.Body
    //       className="goalDescription"
    //       style={{ background: "rgba(240, 227, 186, 0.5)" }}
    //     >
    //       <Card.Title>Goal Title</Card.Title>
    //       <Card.Text>Goal Description</Card.Text>
    //       <Card.Text>Due Date</Card.Text>
    //       <Accordion defaultActiveKey="1" flush>
    //         <Accordion.Item eventKey="0">
    //           <Accordion.Header
    //             style={{ background: "rgba(255, 255, 255, 0.822)" }}
    //           >
    //             Steps
    //           </Accordion.Header>
    //           <Accordion.Body>
    //             <Card className="text-center">
    //               <Card.Header
    //                 style={{ background: "rgba(245, 206, 78, 0.5)" }}
    //               >
    //                 Step Title
    //               </Card.Header>
    //               <Card.Body
    //                 className="goalDescription"
    //                 style={{ background: "rgba(240, 227, 186, 0.5)" }}
    //               >
    //                 <Card.Title>Due Date</Card.Title>
    //                 <Card.Text>Step Description</Card.Text>
    //                 <h4>Comments</h4>
    //                 <AddCommentForm />
    //                 <Accordion defaultActiveKey="1" flush>
    //                   <Accordion.Item eventKey="0">
    //                     <Accordion.Header
    //                       style={{ background: "rgba(255, 255, 255, 0.822)" }}
    //                     >
    //                       Comments
    //                     </Accordion.Header>
    //                     <Accordion.Body>
    //                       <Card>
    //                         <Card.Header
    //                           style={{ background: "rgba(245, 206, 78, 0.5)" }}
    //                         >
    //                           Username
    //                         </Card.Header>
    //                         <Card.Body
    //                           style={{ background: "rgba(240, 227, 186, 0.5)" }}
    //                         >
    //                           <blockquote className="blockquote mb-0">
    //                             <p> Comment </p>
    //                           </blockquote>
    //                         </Card.Body>
    //                       </Card>
    //                     </Accordion.Body>
    //                   </Accordion.Item>
    //                 </Accordion>
    //               </Card.Body>
    //             </Card>
    //           </Accordion.Body>
    //         </Accordion.Item>
    //       </Accordion>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
}
