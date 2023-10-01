import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap/'
import { searchSpell } from '../services/service'

const Filtri = ({setSpells}) => {
  const [value, setValue] = useState('')

    const search = async () => {
        try {
            await searchSpell(value).then(res => setSpells(res.results))
        }
        catch (err) {console.error(err)}
    }

  return (
    <>
    <div className='h4 text-white'>Filters</div>
    <div>
      <Form className='filtri d-flex'>
        <Form.Select 
          aria-label='Default Filter'
          value={value}
          onChange={(e) => {
            console.log(e.target.value); 
            setValue(e.target.value)
          }}
        >
          <option>Select school...</option>
          <option>abjuration</option>
          <option>conjuration</option>
          <option>divination</option>
          <option>enchantment</option>
          <option>evocation</option>
          <option>illusion</option>
          <option>necromancy</option>
          <option>transmutation</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Select level...</option>
          <option>1st-level</option>
          <option>2nd-level</option>
          <option>3rd-level</option>
          <option>4th-level</option>
          <option>5th-level</option>
          <option>6th-level</option>
          <option>7th-level</option>
          <option>8th-level</option>
          <option>9th-level</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Select Class...</option>
          <option>Bard</option>
          <option>Cleric</option>
          <option>Druid</option>
          <option>Paladin</option>
          <option>Ranger</option>
          <option>Sorcerer</option>
          <option>Warlock</option>
          <option>Wizard</option>
        </Form.Select>
        <Button onClick={search}>Filter</Button>
      </Form>
    </div>
    </>
  )
}

export default Filtri