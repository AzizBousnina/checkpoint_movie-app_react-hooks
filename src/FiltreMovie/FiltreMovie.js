import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Unicons from '@iconscout/react-unicons';
import ReactStars from 'react-stars';
import './FiltreMovie.css'
import { Button } from 'react-bootstrap';
const FiltreMovie = ({inputSearch, setInputSearch, newRate, setNewRate }) => {
const reset = () => {
  setInputSearch('')
  setNewRate(0)
}

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
      <h2>Search by stars :</h2>
      <ReactStars className='ss'  size={50} half={false} value={newRate} onChange={(rate)=> setNewRate(rate)} />
      <Button className='btn' onClick={()=>reset()} variant='danger'><Unicons.UilBan/>Reset filtre</Button>
      </div>
  );
}
  export default FiltreMovie;