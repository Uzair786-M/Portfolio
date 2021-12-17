import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  &:hover {
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.6);
  }
`;

const card = (props) => {
  return (
    <>
      <Div>
        <Card style={{ height: "300px", textAlign: "justify", border: "none" }}>
          <Card.Body>
            <div>{props.Icon}</div>
            <Card.Title style={{ fontWeight: "bold" }}>
              {props.Cont.Name}
            </Card.Title>
            <Card.Text>{props.Cont.content}</Card.Text>
          </Card.Body>
        </Card>
      </Div>
    </>
  );
};

export default card;
