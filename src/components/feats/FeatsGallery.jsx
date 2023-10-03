import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  FeatCard  from './FeatCard.jsx'
import { getFeats } from '../../services/service';


const FeatsGallery = () => {
    const [feats, setFeats] = useState([]);
    const [query , setQuery] = useState(null);
    

    const fetchFeats = async () => {
        try {
            await getFeats(query ?? '').then(res => {
                setFeats(res.results);
            })
        } catch (e) {

        }
    };
    useEffect(() => {
        fetchFeats() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


  return (
    <>
    <Container className="pt-5 d-flex">
        <Row className="flex-wrap">
            <h1 className='text-primary mt-5 text-center'>FEATS LIST</h1>
            {feats.map((feat) => (
                <Col key={feat.slug} xs={12} md={6} lg={4}>
                    <FeatCard
                        name={feat.name}
                        prerequisite={feat.prerequisite}
                        effects_desc={`${feat.desc} ${feat.effects_desc}`}
                    />
                </Col>
            ))}
        </Row>

    </Container>
    </>
  )
}

export default FeatsGallery