import {Card, Button} from 'react-bootstrap';


const Jurusan = (props) => {
     return (
       <Card>
         <Card.Body>
           <Card.Title>{props.title}</Card.Title>
           <Card.Text>
             With supporting text below as a natural lead-in to additional
             content.
           </Card.Text>
           <Button variant="dark">Lihat Sekarang</Button>
         </Card.Body>
       </Card>
     );
}

export default Jurusan;