import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { getSpells } from '../../services/service';
import SpellCard from './SpellCard';
import Filtri from './Filtri';

const SpellsGallery = () => {
    const [spells, setSpells] = useState([]);
    const [query , setQuery] = useState(null);
    

    const fetchSpells = async () => {
        try {
            await getSpells(query ?? '').then(res => {
                setSpells(res.results);
            })
        } catch (e) {

        }
    };
    useEffect(() => {
        fetchSpells() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <Container className="pt-5 d-flex">
            {spells.length > 0 && 
            <Row className="flex-wrap" style={{alignItems: 'stretch'}}>
                <h1 className='text-center text-primary mt-3'>SPELLS GALLERY</h1>
                <span className='m-2'>
                    <Filtri setQuery={setQuery} query={query}/>
                </span>
                {spells.map((spell) => (
                    <Col key={spell.slug} xs={12} md={6} lg={4}>
                        <SpellCard
                            name={spell.name}
                            level={spell.level}
                            school={spell.school}
                            dnd_class={`Class: ${spell.dnd_class}`}
                            desc={spell.desc}
                        />
                    </Col>
                ))}
            </Row>}
        </Container>
  )
}

export default SpellsGallery