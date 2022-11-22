import { Carousel } from "react-bootstrap";
import slideOne from './../Assets/slide1.png';
import slideTwo from './../Assets/jurusan1.png';

const Slide = () => {
     return (
       <Carousel fade>
         <Carousel.Item>
           <img
             className="d-block w-100 h-50"
             src={slideOne}
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>SMK Anugerah Jaya</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100 h-50"
             src={slideTwo}
             alt="Second slide"
           />

           <Carousel.Caption>
             <h3>SMK Anugerah Jaya</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100 h-50"
             src={slideOne}
             alt="Third slide"
           />

           <Carousel.Caption>
             <h3>SMK Anugerah Jaya</h3>
             <p>
               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
             </p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     );
}

export default Slide;