import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { searchSpell } from '../services/service'

const Searchbar = ({setSpells}) => {
    const [value, setValue] = useState('')

    const search = async () => {
        try {
            await searchSpell(value).then(res => setSpells(res.results))
        }
        catch (err) {console.error(err)}
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search();
        }
    }


  return (
    <Form className="d-flex">
    <Form.Control
      type="text"
      placeholder="Fireball..."
      className="me-2"
      aria-label="Search"
      value={value}
      onChange={(e) => {console.log(e.target.value); setValue(e.target.value)}}
      onKeyDown={handleKeyPress}
    />
    <Button variant="outline-primary" onClick={search}>Search</Button>
  </Form>
  )
}

export default Searchbar