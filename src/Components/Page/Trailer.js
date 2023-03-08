import React, {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../Data';
const Trailer = () => {
  const { id } = useParams();
  console.log(id);
const [ data , setData ] = useState({})
  useEffect(() => {
    const movieT = moviesData.find((el) => el.id == id);
    setData(movieT);
  }, [id])
  return (
    <div>
    <iframe src={data.trailer} title="trailer" allowfullscreen width="1340px" height="500px"/>
    </div> 
  )
}

export default Trailer