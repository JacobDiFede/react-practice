import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const MovieCard = ({ movie, setSelectedMovie, addMovieToUserList, onDeleteClick }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} lg={3} key={movie.imdbID}>
                    <Card>
                        <Card.Img variant="top" src={movie.Poster} alt={`${movie.Title} poster`}/>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Body>
                        <Button 
                            variant="info"
                            onClick={ () => setSelectedMovie(movie.imdbID)}>Show Details</Button>
                        { addMovieToUserList && 
                        <Button 
                            variant="success"
                            onClick={ () => addMovieToUserList(movie)}>Add To My List</Button>
                        }
                        {
                            onDeleteClick &&
                            <Button 
                                variant="danger"
                                onClick={ () => onDeleteClick(movie)}
                            >Remove From List</Button>
                        }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}