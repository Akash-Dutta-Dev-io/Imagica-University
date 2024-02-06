import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Choosesection from '../../Sections/ChooseSection/Choosesection';
import startcouresimg from '../../Utiles/Images/coursesimg.jpeg'
import FaqAccordion from '../../Sections/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import blog1img from '../../Utiles/Images/blog1.jpg'
import blog2img from '../../Utiles/Images/blog2.png'
import blog3img from '../../Utiles/Images/blog3.jpg'

const blogs = [
  {
    id: 1,
    img: blog1img,
    title: "Blog 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nobis molestiae cupiditate est laboriosam, alias ipsam doloribus temporibus, incidunt provident, asperiores in! Fuga veniam similique nostrum quod, aliquid commodi. Earum, facilis error? Quidem quisquam labore voluptatibus molestiae! Incidunt veniam, neque velit a nostrum tempore facere sunt quam eligendi dolorum delectus."
  },

  {
    id: 2,
    img: blog2img,
    title: "Blog 2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nobis molestiae cupiditate est laboriosam, alias ipsam doloribus temporibus, incidunt provident, asperiores in! Fuga veniam similique nostrum quod, aliquid commodi. Earum, facilis error? Quidem quisquam labore voluptatibus molestiae! Incidunt veniam, neque velit a nostrum tempore facere sunt quam eligendi dolorum delectus."
  },

  {
    id: 3,
    img: blog3img,
    title: "Blog 3",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nobis molestiae cupiditate est laboriosam, alias ipsam doloribus temporibus, incidunt provident, asperiores in! Fuga veniam similique nostrum quod, aliquid commodi. Earum, facilis error? Quidem quisquam labore voluptatibus molestiae! Incidunt veniam, neque velit a nostrum tempore facere sunt quam eligendi dolorum delectus."
  }

];

const Home = () => {
  return (
    <div className='home-page'>
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">
            Makaut University
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nobis molestiae cupiditate est laboriosam, alias ipsam doloribus temporibus, incidunt provident, asperiores in! Fuga veniam similique nostrum quod, aliquid commodi. Earum, facilis error? Quidem quisquam labore voluptatibus molestiae! Incidunt veniam, neque velit a nostrum tempore facere sunt quam eligendi dolorum delectus.</p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to='/courses'>
              <button className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                Our Courses
              </button>
            </Link>
            <Link to='/contact'>
              <button className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <Choosesection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">
                2024 start courses
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor
                Lorem ipsum dolor sit amet.
              </p>
              <Link to='/courses'>
                <button className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={startcouresimg} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>


      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Latest on the blog</h2>
          <div className="row g-4">
            {blogs.map((blog) => (
                <div key={blog.id} className='col-md-6 col-lg-4'>
                  <Link to='/blog' className='text-decoration-none'>
                    <Card className='h-100 shadow scale-hover-effect'>
                      <Card.Img variant="top" src={blog.img}/>
                      <Card.Body className='p-md-5'>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
            ))}
          </div>
          <Link to='/blog'>
            <button className="btn btn-danger btn-lg mt-5">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home
