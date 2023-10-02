import React from 'react'
import {Card} from 'react-bootstrap'
import SeeDesc from './SeeDesc';

const SpellCard = ({name, school, level, dnd_class, desc}) => {
  return (
        <Card className='m-3' bg="dark" text='white'>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2">{school} - {level}</Card.Subtitle>
            <Card.Text>
              {dnd_class}
            </Card.Text>
          </Card.Body>
          <SeeDesc desc={desc}/>
        </Card>
      );
}

export default SpellCard