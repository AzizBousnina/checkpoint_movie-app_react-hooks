import React from 'react'
import Form from 'react-bootstrap/Form'
import * as Unicons from '@iconscout/react-unicons';
import { InputGroup } from 'react-bootstrap';
import'./FilterMovie.css'
const FilterMovie = ({inputSearch , setInputSearch}) => {
  return (
  
      <div className='search'>
        <InputGroup className="mb-3">
          <InputGroup.Text  id="basic-addon1"><Unicons.UilSearch/></InputGroup.Text>
          <Form.Control  className='forme'
            placeholder="Search by title or description"
           value={inputSearch}
           onChange={(e)=> setInputSearch(e.target.value)}
          />
        </InputGroup>
        </div>
  )
}

export default FilterMovie