import {Navbar, Container} from 'react-bootstrap';

const Footer = () => {
     return (
     <Navbar className="mt-5">
       <Container>
         <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
           <Navbar.Text>
             Copyright Sekolah All Reserved <a href="#login" className="text-decoration-none">2022</a>
           </Navbar.Text>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     );
}

export default Footer;