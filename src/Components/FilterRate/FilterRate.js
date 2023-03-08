import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import ReactStars from 'react-stars';
import { Button } from 'react-bootstrap';
import './FilterRate.css'

const FilterRate = ({setNewRate, newRate,setInputSearch}) => {
  const reset = () => {
    setInputSearch('')
    setNewRate(0)
  }
  
  return (
    <div className='search'>
       <h2>Search by stars :</h2>
      <ReactStars className='ss'  size={50} half={false} value={newRate} onChange={(rate)=> setNewRate(rate)} />
      <Button className='btn' onClick={()=>reset()} variant='danger'><Unicons.UilBan/>Reset filtre</Button>
    </div>
  )
}

export default FilterRate