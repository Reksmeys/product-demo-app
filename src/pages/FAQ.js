import React from 'react'
import { Container } from 'react-bootstrap'

export default function FAQ() {
  return (
    <Container>
        <section class="bg-light py-5">
            <div class="container">
                <div class="row g-4 g-md-5 position-relative">
                    <figure class="position-absolute top-0 start-0 d-none d-sm-block">	
                        <svg width="22px" height="22px" viewBox="0 0 22 22">
                            <polygon class="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "></polygon>
                        </svg>
                    </figure>

                    <div class="col-lg-10 mx-auto text-center position-relative">
                       
                        <figure class="position-absolute top-50 end-0 translate-middle-y">
                            <svg width="27px" height="27px">
                                <path class="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"></path>
                            </svg>
                        </figure>
                        
                        <h1 class="display-6">Hello, how can we help?</h1>
                        
                        <div class="col-lg-8 mx-auto text-center mt-4">
                            <form class="bg-body shadow rounded p-2">
                                <div class="input-group">
                                    <input class="form-control border-0 me-1" type="text" placeholder="Ask a question..." />
                                    <button type="button" class="btn btn-blue mb-0 rounded">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                   
                    <div class="col-12">
                        <div class="row g-4 text-center">
                        <p class="mb-0">Choose a category to quickly find the help you need</p>
                          
                            <div class="col-sm-6 col-md-3">
                                <div class="card card-body card-border-hover p-0">
                                    <a href="#" class="p-3">
                                        <h2><i class="fas fa-street-view transition-base"></i></h2>
                                        <h6 class="mb-0">User Guide</h6>
                                    </a>
                                </div>
                            </div>

                            
                            <div class="col-sm-6 col-md-3">
                                <div class="card card-body card-border-hover p-0">
                                    <a href="#" class="p-3">
                                        <h2><i class="fas fa-hands-helping transition-base"></i></h2>
                                        <h6 class="mb-0">Assistance</h6>
                                    </a>
                                </div>
                            </div>

                           
                            <div class="col-sm-6 col-md-3">
                                <div class="card card-body card-border-hover p-0">
                                    <a href="#" class="p-3">
                                        <h2><i class="fas fa-exclamation-circle transition-base"></i></h2>
                                        <h6 class="mb-0">General guide</h6>
                                    </a>
                                </div>
                            </div>

                            
                            <div class="col-sm-6 col-md-3">
                                <div class="card card-body card-border-hover p-0">
                                    <a href="#" class="p-3">
                                        <h2><i class="fas fa-flag transition-base"></i></h2>
                                        <h6 class="mb-0">Getting started</h6>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                   
                </div>
            </div>
        </section>
        <section class="pt-5 pb-0 pb-lg-5">
            <div class="container">
                <div class="row g-4 g-md-5">
                
                    <div class="col-lg-8">
                       
                        <h3 class="mb-4">Frequently Asked Questions</h3>

                
                        <div class="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                      
                            <div class="accordion-item mb-3">
                                <h6 class="accordion-header font-base" id="heading-1">
                                    <button class="accordion-button fw-bold rounded d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                        How long do we need to complete the course?
                                    </button>
                                </h6>
                               
                                <div id="collapse-1" class="accordion-collapse collapse" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body mt-3">
                                        A: It is very flexible depending on the total course hour. You will study 8 hour/ week for weekday or weekend class.
                                    </div>
                                </div>
                            </div>

                        
                            <div class="accordion-item mb-3">
                                <h6 class="accordion-header font-base" id="heading-2">
                                    <button class="accordion-button fw-bold rounded d-inline-block d-block pe-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                        Does the school provided equipment for study?
                                    </button>
                                </h6>
                          
                                <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2" >
                                    <div class="accordion-body mt-3">
                                       A:Of course, we provide full facilities during study both computers and Mac mini.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-3">
                                <h6 class="accordion-header font-base" id="heading-3">
                                    <button class="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                        Does school have any job opportunities? 
                                    </button>
                                </h6>

                                <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body mt-3">
                                        A: Of course, we have many partners and many job vacancies for you after completing some of the courses. The job recruitment rate are high.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-3">
                                <h6 class="accordion-header font-base" id="heading-4">
                                    <button class="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                        How can I know if I can in any specific course?
                                    </button>
                                </h6>
                   
                                <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body mt-3">
                                        A: In the Description of each course will detail about basic requirements, course description and course curriculum which is easy for you to make a decision.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mb-3">
                                <h6 class="accordion-header font-base" id="heading-5">
                                    <button class="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                                        What skills level do I need to take shortcourse?
                                    </button>
                                </h6>
        
                                <div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body mt-3">
                                        A: Short courses are taught at all different levels. If you have no experience and want to try something for the first time, we advise choosing an introduction or beginners course.
                                        If you already have some experience, then there are courses to help you develop your skills further.
                                    </div>
                                </div>
                            </div>

                            
                            <div class="accordion-item">
                                <h6 class="accordion-header font-base" id="heading-6">
                                    <button class="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                                        What's are the difference between a college and a university?
                                    </button>
                                </h6>
                                
                                <div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body mt-3">
                                        Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="row mb-5 mb-lg-0">
                            <div class="col-12 col-sm-6 col-lg-12">
                                
                                <div class="mb-4">
                                    <div class="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative mb-3">
                                        <h6 class="m-0 text-info">Last Question</h6>
                                        <a href="#" class="badge bg-info stretched-link">2D ago</a>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative mb-3">
                                        <h6 class="m-0 text-danger">Total Question</h6>
                                        <a href="#" class="badge bg-danger stretched-link">15,525</a>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative mb-3">
                                        <h6 class="m-0 text-success">Answer</h6>
                                        <a href="#" class="badge bg-success stretched-link">12536</a>
                                    </div>
                                </div>
                                

                                
                                <div class="card card-body shadow p-4 mb-4">
                                    
                                    <h4 class="mb-3">Available Courses</h4>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>C++ Programming</a>
                                        <span class="small">144$ (60 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Web Design</a>
                                        <span class="small">168$ (70 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Java</a>
                                        <span class="small">156$ (60 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Backend development</a>
                                        <span class="small">240$ (80 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>DevOps Engineering</a>
                                        <span class="small">280$ (70 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Flutter</a>
                                        <span class="small">224$ (80 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Data Analytics</a>
                                        <span class="small">960$ ( 4 months )</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>Blockchain</a>
                                        <span class="small">560$ (100 hours)</span>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <a href="#" class="h6 fw-light"><i class="fas fa-caret-right text-orange me-2"></i>UI / UX Design</a>
                                        <span class="small">Free</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-12 col-sm-6 col-lg-12">
                                
                                <div class="card card-body shadow p-4">
                                    <h4 class="mb-3">Popular Tags</h4>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">design</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">reactjs</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">blog</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">backend</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">frontend</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">scholarship</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">tips</a></li>
                                        <li class="list-inline-item"><a class="btn btn-outline-light btn-sm" href="#">cloud</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </Container>
  )
}
