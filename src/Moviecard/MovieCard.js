
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import './MovieCard.css'

function MovieCard({movie}) {
  return (
    <Card className='cardss' style={{ width: '18rem' }}>
      <Card.Img className='imgg' variant="top" src={movie.posterUrl} />
      <Card.Body className='list'>
        <Card.Title className='title'>{movie.title}</Card.Title>
        <Card.Text className='des'>{movie.description}</Card.Text>
        <Card.Text className='rate'>{movie.rate} stars :</Card.Text>
        <ReactStars className='star' size={30} value={movie.rate} />
      </Card.Body>
    </Card>
  );
} 

export default MovieCard;