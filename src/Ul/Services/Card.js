import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div`
&:hover {
  box-shadow :0 5px 15px 0px rgba(0,0,0,0.6);
 
}`


const card = (props) => {




  return (
    <>
     <Div>
      <Card style={{height:"300px",textAlign:"justify",border:"none"}} >
        
        <Card.Body>
        <div>{props.Icon}</div>
          <Card.Title>{props.Cont.Name}</Card.Title>
          <Card.Text>
           {props.Cont.content}
      </Card.Text>
          
        </Card.Body>
      </Card>
      </Div>

    </>
  )
};




export default card;