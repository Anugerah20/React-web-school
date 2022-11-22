import {Card, Button} from 'react-bootstrap';

const Kegiatan = (props) => {
     return (
       <Card>
         <Card.Img variant="top" src={props.image} />
         <Card.Body>
           <Card.Title>{props.desc}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button variant="dark">Kunjungi</Button>
         </Card.Body>
       </Card>
     );
}

export default Kegiatan;