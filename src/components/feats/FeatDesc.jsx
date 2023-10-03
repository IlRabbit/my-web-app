import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Accordion from 'react-bootstrap/Accordion';


const FeatDesc = ({prerequisite, effects_desc, desc}) => {
  return (
    <>
    <Accordion>
      <Accordion.Item className='text-primary bg-black' eventKey="0">
        <Accordion.Header>Prerequisite</Accordion.Header>
        <Accordion.Body>
            {prerequisite}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <OverlayTrigger 
    trigger="click" 
    placement="bottom" 
    overlay={
        <Popover id="popover-basic">
        <Popover.Header as="h3"></Popover.Header>
        <Popover.Body>
            {desc}
            {effects_desc}
        </Popover.Body>
      </Popover>
    }
    >
    <Button variant="primary">Description</Button>
  </OverlayTrigger>
  </>
);
}

export default FeatDesc