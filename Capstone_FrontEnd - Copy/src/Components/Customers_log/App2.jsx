
// import React from 'react';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import BusSearch from './BusSearch';
// import BusDetails from './BusDetails';
// import Billing from './Billing';

// // Now your main component
// function App2() {
//   return (
    
//       <div className="container-fluid p-0"> {/* Add 'p-0' to remove default padding */}
//         <div className="flex-row">
//           {/* Remove extra columns */}
//           {/* Apply a separate background color to the navbar */}
//           <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc', width: '100%' }}>
//             <Container fluid> {/* Set fluid attribute to make the container fit the width of its parent */}
//               <Navbar.Brand href="#">GK Inventory Billing App</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/" className="nav-link">Home</Link>
//                   <Link to="/" className="nav-link">Invoice</Link>     
//                 </Nav>

               

//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>

//           {/* Remove extra columns */}
//         </div>
//         <Routes>
//           <Route path="/" element={<BusSearch />} />
          
//           <Route path="/bus-details" element={<BusDetails />} />
//           <Route path="/billing" element={<Billing />} />
         
          
        
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
    
//   );
// }

// export default App2;

import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import BusSearch from './BusSearch';
import BusDetails from './BusDetails';
import Billing from './Billing';

function App2() {
  return (
    <Router>
      <div className="container-fluid p-0"> {/* Add 'p-0' to remove default padding */}
        <div className="flex-row">
          {/* Apply a separate background color to the navbar */}
          <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc', width: '100%' }}>
            <Container fluid> {/* Set fluid attribute to make the container fit the width of its parent */}
              <Navbar.Brand href="#">GK Inventory Billing App</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavDropdown" />
              <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/billing" className="nav-link">Invoice</Link>     
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<BusSearch />} />
          <Route path="/bus-details" element={<BusDetails />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
