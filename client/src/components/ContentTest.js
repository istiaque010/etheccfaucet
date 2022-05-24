// Code Starts Here 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

 
import React from 'react';

 
  function ContentTest() {
    return (
       <div>
      
 
        <section className="bg-light" id="about">
          <div className="container">
          <h3 className="text-center mt-4 text-secondary">Test of importing React Component usinh ComponentTest</h3>

            <div className="row">
              <div className="col-sm-12 col-md-12">

                 <h3>Form Check</h3>
                 <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                        </Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
               </Form>
       
            
             </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12">

                 <h3>Accordian Check</h3>
                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                           commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                           est laborum.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                           commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                           est laborum.
                        </Accordion.Body>
                     </Accordion.Item>
                     </Accordion>
       
             </div>
            </div>

          </div>   
        </section> 
     
 
   </div>
    );
  }
   
  export default ContentTest;