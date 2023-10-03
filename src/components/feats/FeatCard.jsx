import React from 'react'
import { Card } from 'react-bootstrap'
import FeatDesc from './FeatDesc'

const FeatCard = ({name, prerequisite, effects_desc}) => {
  return (
    <Card className='m-2' bg="dark" text='white'>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2"></Card.Subtitle>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        <FeatDesc 
        prerequisite={prerequisite}
        effects_desc={effects_desc} />  
        </Card>
  )
}

export default FeatCard