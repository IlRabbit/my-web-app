import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Pagination} from "react-bootstrap";
import { getSpells } from "../services/service";
import SpellCard from "./SpellCard";
import Searchbar from './Searchbar';
import Filtri from './Filtri';

const SpellsGallery = () => {
    const [spells, setSpells] = useState([]);
    const [query , setQuery] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(null)
    const maxPageToShow = 5;
    const totalPages = 30;

    const fetchSpells = async () => {
        try {
            await getSpells(query).then(res => {
                setSpells(res.results);
                setMaxPage(Math.ceil(res.count / res.results.length)); //29 pagine
                console.log(res.next)
            })
        } catch (e) {

        }
    };
    useEffect(() => {
        fetchSpells() 
    }, [query]);

    useEffect(() => {
        setQuery(`?page=${page}`)
    }, [page])

    const maxPages = Math.min(totalPages - page, maxPageToShow);

    const pageNumbers = Array.from({ length: maxPages }, (_, index) => page + index);

    return (
        <Container className="pt-5" >
            {spells.length > 0 && 
            <Row className="flex-wrap" style={{alignItems: 'stretch'}} >
                <h1 className='text-center text-primary'>Spells</h1>
                <div className='m-2'>
                    <Searchbar setSpells={setSpells}/>
                </div>
                <div className='m-2'>
                    <Pagination>
                        <Pagination.First disabled={page === 1} onClick={() => {setPage(1)}} />
                        <Pagination.Prev disabled={page === 1} onClick={() => {setPage(page - 1)}}/>
                        {pageNumbers.map((pageNumber) => (
                        <Pagination.Item
                            key={pageNumber}
                            active={pageNumber === page}
                            onClick={() => setPage(pageNumber)}
                        >
                            {pageNumber}
                        </Pagination.Item>
                        ))}
                        {page + maxPages < totalPages && <Pagination.Ellipsis />}
                        <Pagination.Next disabled={page === 29} onClick={() => {setPage(page + 1)}}/>
                        <Pagination.Last disabled={page === 29} onClick={() => {setPage(maxPage)}}/>
                    </Pagination>
                </div>
                <span className='m-2'>
                    <Filtri setSpells={setSpells}/>
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