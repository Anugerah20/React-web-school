import {Navbar, Container, Nav, Button, Form} from 'react-bootstrap';

const Navigation = () => {
     return (
       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
         <Container>
           <Navbar.Brand href="#">Sekolah</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
             <Nav
               className="me-auto my-2 my-lg-0"
               style={{ maxHeight: "200px" }}
               navbarScroll
             >
               <Nav.Link href="#action1">Beranda</Nav.Link>
               <Nav.Link href="#action2">Kegiatan</Nav.Link>
               <Nav.Link href="#action2">Jurusan</Nav.Link>
             </Nav>
             <Form className="d-flex">
               <Form.Control
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
               />
               <Button variant="success">Search</Button>
             </Form>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     );
}

export default Navigation;