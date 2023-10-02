import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const SeeDesc = ({desc}) => (
  <OverlayTrigger 
    trigger="click" 
    placement="bottom" 
    overlay={
        <Popover id="popover-basic">
        <Popover.Header as="h3"></Popover.Header>
        <Popover.Body>
            {desc}
        </Popover.Body>
      </Popover>
    }
    >
    <Button variant="primary">See description</Button>
  </OverlayTrigger>
);

export default SeeDesc