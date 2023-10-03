import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { getFeats } from '../../services/service';

const FeatFilters = ({query, setQuery}) => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);


      //Pagination
  const fetchFeats = async () => {
    try {
        await getFeats(query ?? '').then(res => {
            setTotalItems(res.count);
            console.log(totalItems)
        })
    } catch (e) {

    }
};

useEffect(() => {
  fetchFeats() 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [query]);

const totalPages = Math.ceil(totalItems / 50);

useEffect(() => {
  setQuery(
    `?page=${page}${search.length > 0 ? '&search=' + search : ''}`
  );
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page]) 
//End Pagination

  return (
    <>

  <div className='mt-5'>
    <PaginationControl 
    page={page}
    between={4}
    total={totalPages}
    limit={1}
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1} />
    </div>
  </>
  )
}

export default FeatFilters