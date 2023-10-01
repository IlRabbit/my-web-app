import React, {useEffect, useState} from 'react'
import {Form, Button, Pagination, Row, Col} from 'react-bootstrap/'
import Select from 'react-select';


const Filtri = ({query, setQuery}) => {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState(null);
  const [school, setSchool] = useState(null);
  const [classe, setClasse] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (searchClicked) 
      setQuery(
        `?page=${'1'}${search.length > 0 ? '&search=' + search : ''}${level ? '&level_int=' + level : ''}${school ? '&school=' + school : ''}${classe ? '&spell_lists=' + classe : ''}`
      );
    setSearchClicked(false);
    setSearch('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchClicked])

  useEffect(() => {
    setQuery(
      `?page=${'1'}${search.length > 0 ? '&search=' + search : ''}${level ? '&level_int=' + level : ''}${school ? '&school=' + school : ''}${classe ? '&spell_lists=' + classe : ''}`
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, school, classe])

  return (
    <>
    <div className='h4 text-white'>Filters</div>
    <Form className="d-flex">
    <Form.Control
      type="text"
      placeholder="Fireball..."
      className="me-2"
      aria-label="Search"
      value={search}
      onChange={(e) => {console.log(e.target.value); setSearch(e.target.value)}}
    />
    <Button 
      variant="outline-primary"
      onClick={() => {setSearchClicked(true)}}
    >
      Search
    </Button>
  </Form>
    <Row className='mt-5'>
      <Col>
        <Select
          value={school}
          placeholder={school ?? 'All'}
          onChange={(opt) => {setSchool(opt.value)}}
          options={[
            {value: null, label: 'All'},
            {value: 'abjuration', label: 'Abjuration'},
            {value: 'conjuration', label: 'Conjuration'},
            {value: 'divination', label: 'Divination'},
            {value: 'enchantment', label: 'Enchantment'},
            {value: 'evocation', label: 'Evocation'},
            {value: 'illusion', label: 'Illusion'},
            {value: 'necromancy', label: 'Necromancy'},
            {value: 'transmutation', label: 'Transmutation'}
          ]}
        />
      </Col>

      <Col>
        <Select
          value={level}
          placeholder={level ?? 'All'}
          onChange={(opt) => {setLevel(opt.value)}}
          options={[
            {value: null, label: 'All'},
            {value: '0', label: 'Cantrip'},
            {value: '1', label: '1st'},
            {value: '2', label: '2nd'},
            {value: '3', label: '3rd'},
            {value: '4', label: '4th'},
            {value: '5', label: '5th'},
            {value: '6', label: '6th'},
            {value: '7', label: '7th'},
            {value: '8', label: '8th'},
            {value: '9', label: '9th'}
          ]}
        />
      </Col>

      <Col>
        <Select
          value={classe}
          placeholder={classe ?? 'All'}
          onChange={(opt) => {setClasse(opt.value)}}
          options={[
            {value: null, label: 'All'},
            {value: 'artificier', label: 'Artificier'},
            {value: 'bard', label: 'Bard'},
            {value: 'druid', label: 'Druid'},
            {value: 'paladin', label: 'Paladin'},
            {value: 'ranger', label: 'Ranger'},
            {value: 'sorcerer', label: 'Sorcerer'},
            {value: 'warlock', label: 'Warlock'},
            {value: 'wizard', label: 'Wizard'},
          ]}
        />
      </Col>
    </Row>
    </>
  )
}

export default Filtri