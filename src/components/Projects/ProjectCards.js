import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi"; 

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <div style={{ marginBottom: "10px", display: "flex", gap: "5px", justifyContent: "center" }}>
          {props.isOngoing && (
            <span style={{ backgroundColor: "#f59e0b", color: "white", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75em", fontWeight: "bold" }}>
              🚧 On-Going
            </span>
          )}
          {props.isScrumMaster && (
            <span style={{ backgroundColor: "#3b82f6", color: "white", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75em", fontWeight: "bold" }}>
              👤 Scrum Master
            </span>
          )}
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.title === "GREEN Depok" ? (
              <>
                <FiFigma /> &nbsp; {"Figma"}
              </>
            ) : (
              <>
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </>
            )}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.title === "GREEN Depok" ? "Maze (Testing)" : "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;