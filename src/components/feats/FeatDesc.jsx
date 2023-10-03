import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const FeatDesc = ({prerequisite, effects_desc, desc}) => {

  const isPrerequisiteNull = prerequisite === null;

  return (
    <>
     {prerequisite !== null && (
  <OverlayTrigger 
    trigger="click" 
    placement="bottom" 
    overlay={
        <Popover id="popover-basic">
        <Popover.Header as="h3"></Popover.Header>
        <Popover.Body>
          {prerequisite}
        </Popover.Body>
      </Popover>
    }
    >
    <Button variant="primary">Prerequisite</Button>
  </OverlayTrigger>
     )}

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