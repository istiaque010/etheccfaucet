// Code Starts Here 
import Carousel from 'react-bootstrap/Carousel';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';



import React from 'react';

 
  function Content() {

  
    return (
       <div>
         <section className="">
               <Carousel>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="Images/banner-1.jpg"
                        alt="First slide"
                     />
                     <Carousel.Caption>
                        <h3>ETH-ECC FAUCET</h3>
                        <p>Help to get free ETH for ETH-ECC for testing operations in ETH-ECC</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="Images/banner-2.jpg"
                        alt="Second slide"
                     />

                     <Carousel.Caption>
                        <h3>ETH-ECC EXPLORER</h3>
                        <p>Explorer for blocks and transactions in ETH-ECC Cryopto Network</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="Images/banner-3.jpg"
                        alt="Third slide"
                     />

                     <Carousel.Caption>
                        <h3>INFONET LAB</h3>
                        <p>Reknown Lab in GIST, Focused on Blocjchain oriented research</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               </Carousel>
        </section>  


        <section className="bg-light pt-5" id="faucet">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Requeast ETH-ECC Faucet</h3>
             </div>
              </div>

              <div className='row'>
                  <Form>
                     <Row className="align-items-center">
                        
                        <Col xs={12}>
                           <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                           </Form.Label>
                           <InputGroup className="mb-2">
                           <InputGroup.Text>Public Address</InputGroup.Text>
                           <FormControl id="inlineFormInputGroup" placeholder="0x2C57957Bd0fb9EC71abD1115aD97..." />
                           <InputGroup.Text><Button type="submit" size='sm'>
                           Submit
                           </Button></InputGroup.Text>
                           </InputGroup>
                        </Col>
                      
                     </Row>
                     </Form>

              </div>

              
              <div className="row m-0 mt-3">

                 
                     <Table striped bordered hover >
                   
                     <tbody>
                        <tr>
                           
                           <td style={{width:'20%'}}>Connected Acount:</td>
                           <td>0x2C57957Bd0fb9EC71abD1115aD97...</td>
                           <td style={{width:'20%'}}>Balence: </td>
                        </tr>
                        <tr>
                           
                           <td>Transaction Hash: </td>
                           <td colSpan={2}>0x2C57957Bd0fb9EC71abD1115aD97...</td>
                           
                        </tr>
                        
                     </tbody>
                     </Table>
             </div> 

             <div className="row">
                <p className="mt-4 mb-5 " style={{textAlign:'justify'}}>
                INFONET is a research lab under the School of Electrical Engineering and Computer Science in Gwangju Institute of Science and Technology GIST.  
                INFONET gives a professional opportunity for research. The interests include machine learning, communications,
               information theory, and signal processing, and research interests include machine learning, signal processing, computational intelligence,
               computational imaging, communications , networks and Blockchain. This lab provide implementation oppotunities of researchs in applications.
                </p>
             </div> 

          </div>   
        </section>   




    <section className='pt-5' id='transaction'>
       <div className='container'>
         <div className='row gx-0'>
         <h3 className="text-center mt-4 mb-4 text-secondary">Transactions</h3>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header>T-1</Card.Header>
               <center><Card.Img variant="top" src="Images/t-1.jpg" className=" z-depth-1 img-fluid" style={{}}/></center> 
               <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Transaction Details</Button></Card.Footer>
               </Card>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header>T-2</Card.Header>
               <center><Card.Img variant="top" src="Images/t-2.jpg" className=" z-depth-1 img-fluid" style={{}}/></center> 
               <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Transaction Details</Button></Card.Footer>
               </Card>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header>T-3</Card.Header>
               <center><Card.Img variant="top" src="Images/t-3.jpg" className=" z-depth-1 img-fluid" style={{}}/></center> 
               <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Transaction Details</Button></Card.Footer>
               </Card>

       </div>

       </div>
    </section>

 
       <section className="pt-5 pb-2"  id="description">
        <div className="container">
          <div className="col-sm-12 col-md-12 mb-4">
             <h3 className="text-center text-secondary mt-4">Description</h3>
         </div>
         <div className="row">
              <div className="col-sm-12 col-md-12">

                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>ETH-ECC PROJECT</Accordion.Header>
                        <Accordion.Body>
                        INFONET Lab, GIST has set up ETH-ECC Ethereum blockchain. Any one around the world can connect with ETH-ECC.
                         Metamask Connection and Explorer are also implemented for this network.
                         ETH-ECC Network Setup Steps: 

                           Environment setup and download ETH-ECC, 
                           Editor installation and Download ETH-ECC,
                           Configuration of ETH-ECC environment for genesis node,
                           Initialize genesis block for ETH-ECC network,
                           Run ETH-ECC node and Peer nodes to the ETH-ECC network,
                           MetaMask configuration for ETH-ECC,
                           Explorer view of ETH-ECC,
                           ETH-ECC network testing.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>LIBERVANCE</Accordion.Header>
                        <Accordion.Body>
                        I am professor Heung-No Lee at INFONET lab here in GIST.

                              저는 GIST 이흥노 교수입니다.

                              I launched a tech venture called LiberVance in January 2020.

                              2020년 1월에 리버밴스㈜라는 이름의 교원창업 테크벤처를 설립하였습니다.

                              The name of the venture comes from two words, Liberty and adVance.
                              벤처의 이름은 자유 와 진보 라는 단어를 합성하여 만들었습니다.

                              Liberty is the source of creation. 자유는 창조의 씨앗이다.
                              Creativity brings forth innovation. 창조는 혁신을 만든다.
                              Innovation advances the humanity. 혁신이 사회를 진보하게 만든다.
                              The aim of LiberVance is to introduce the lab technologies developed by my research team.
                        </Accordion.Body>
                     </Accordion.Item>
                     </Accordion>
       
             </div>
            </div>
    </div> 
    </section>


    <section className='bg-light pt-5 pb-5' id='resource'>
       <div className='container'>
         <div className='row gx-0'>
         <h3 className="text-center mt-4 mb-4 text-secondary">Resources</h3>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header></Card.Header>
               <center><Card.Img variant="top" src="Images/1.jpg" className=" z-depth-1 img-fluid rounded-circle" style={{height:'13vw', width:'13vw'}}/></center> 
               <Card.Body>
                  <Card.Title>Heung-No Lee</Card.Title>
                  <h6 className="font-weight-bold blue-text my-3">Professor</h6>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Details</Button></Card.Footer>
               </Card>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header></Card.Header>
               <center><Card.Img variant="top" src="Images/2.jpg" className=" z-depth-1 img-fluid rounded-circle" style={{height:'13vw', width:'13vw'}}/></center> 
               <Card.Body>
                  <Card.Title>Istiaque Ahmed</Card.Title>
                  <h6 className="font-weight-bold blue-text my-3">Researcher</h6>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Details</Button></Card.Footer>
               </Card>

               <Card className="text-center" style={{ width: '25rem' , margin:'auto', background:'none', marginBottom:'30px'}}>
               <Card.Header></Card.Header>
               <center><Card.Img variant="top" src="Images/3.jpg" className=" z-depth-1 img-fluid rounded-circle" style={{height:'13vw', width:'13vw'}}/></center> 
               <Card.Body>
                  <Card.Title>Seunngmin Kim</Card.Title>
                  <h6 className="font-weight-bold blue-text my-3">Researcher</h6>
                  <Card.Text>
                     With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  
               </Card.Body>
               <Card.Footer className="text-muted"><Button variant="primary" size='sm'>Details</Button></Card.Footer>
               </Card>

       </div>

       </div>
    </section>

    




   </div>
    );
  }
   
  export default Content;