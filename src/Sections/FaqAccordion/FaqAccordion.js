import React from 'react'
import './FaqAccordion.css'
import { Accordion } from 'react-bootstrap'

const FaqAccordion = () => {
  return (
    <div className='faq-section'>
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently asked questions
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae unde minima voluptatem iusto harum, expedita, quasi, blanditiis aut distinctio illo! Ratione minus non quas illum quae laboriosam, fuga cum qui. Natus perspiciatis fugiat culpa fuga illo, qui error, vitae amet dolor tempore tempora est eveniet sunt sapiente quos voluptates!
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>First question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, sed in. Qui labore et debitis ea sequi! Totam obcaecati eligendi debitis. Rem, architecto? Porro ut officiis iure excepturi cupiditate necessitatibus.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>Second question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, sed in. Qui labore et debitis ea sequi! Totam obcaecati eligendi debitis. Rem, architecto? Porro ut officiis iure excepturi cupiditate necessitatibus.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>Third question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, sed in. Qui labore et debitis ea sequi! Totam obcaecati eligendi debitis. Rem, architecto? Porro ut officiis iure excepturi cupiditate necessitatibus.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header>Fourth question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, sed in. Qui labore et debitis ea sequi! Totam obcaecati eligendi debitis. Rem, architecto? Porro ut officiis iure excepturi cupiditate necessitatibus.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>


    </div>
  )
}

export default FaqAccordion
