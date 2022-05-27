// Code Starts Here 
 
import React from 'react';

 
  function Content() {
    return (
       <div>
         <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100 " src="Images/banner-2.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src="Images/banner-3.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   
 
        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary" id='faucet'>Requeast ETH-ECC Faucet</h3>
             </div>
              </div>

              <div className='row'>
              <div class="input-group">
                 <input type="text" class="form-control" placeholder='0x5927B57470Db074D1b6aEa5325ac...'/>
                 <span class="input-group-btn">
                 <button class="btn btn-primary" type="button">Request</button>
                </span>
              </div>
              </div>



             <div className="row">
                <p className="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>   
          </div>   
        </section>   
 
        <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Transactions Update</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Japan</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Tokyo</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">India</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  
 
 
       <section className=""  id="places">
        <div className="container">
          <div className="col-sm-12 col-md-12 mb-4">
             <h3 className="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div className="accordion" id="accordionExample">
        <div className="card">
         <div className="card-header" id="headingOne">
            <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>
 
         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      <div className="card">
         <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      <div className="card">
         <div className="card-header" id="headingThree">
            <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>
 
     
    <section className="bg-light mt-5" id="tourist">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">Resource Team</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="Images/1.jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Heung-No Lee</h4>
          <h6 className="font-weight-bold blue-text my-3">Professor</h6>
          <p className="font-weight-normal dark-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">

            <img src="Images/2.jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Istiaque Ahmed</h4>
          <h6 className="font-weight-bold blue-text my-3">Researcher</h6>
          <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="Images/3.jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Seunngmin Kim</h4>
          <h6 className="font-weight-bold blue-text my-3">MS Researcher</h6>
          <p className="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;