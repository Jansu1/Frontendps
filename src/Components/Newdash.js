import React from "react";
import Newnavbar from "./Newnavbar";
const Newdash = () => {
    return (
        <div>
            <Newnavbar/>
            <>
  <div className="row clearfix align-items-stretch">
    <div className="col-md-8 offset-md-2">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={1200}>
            <img
              src="https://cdn.dribbble.com/users/1481930/screenshots/5720101/job-ads.png"
              className="d-block w-100 img-fluid"
              alt=".."
            />
          </div>
          <div className="carousel-item" data-bs-interval={1200}>
            <img
              src="https://i.pinimg.com/originals/3c/35/58/3c35583d92a62dcaffd7214be75de5c7.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={1200}>
            <img
              src="https://piktochart.com/wp-content/uploads/2022/06/large-73.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={1200}>
            <img
              src="https://cs.wwu.edu/files/2022-01/CSProjectsWorkshopPoster.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval={1200}>
            <img
              src="https://marketplace.canva.com/EAE_HhmNKs0/1/0/1131w/canva-blue-modern-we-are-hiring-%28poster%29-6fLSwo4qNdk.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <hr />
  <hr />
  <br />
  <div className="text-center">
    <h1>Upcoming Events</h1>
  </div>
  <br />
  <div className="container-fluid">
    <div className="row mb-4">
      <div className="col-md offset-md-1">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214"
            alt="Hackathon"
          />
          <div className="card-body">
            <h5 className="card-title">Hackathon</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event1" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md ">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="https://i.pinimg.com/236x/78/7c/67/787c678083f35a77fe504e399ae753d8.jpg"
            alt="dev"
          />
          <div className="card-body">
            <h5 className="card-title">Full Stack Developer </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event2" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md ">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="https://www.shutterstock.com/image-vector/modern-job-vacancy-square-web-600w-1956326470.jpg"
            alt="job"
          />
          <div className="card-body">
            <h5 className="card-title">Job Opportunities</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event3" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md offset-md-1">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="https://i2.wp.com/robotechlabs.com/wp-content/uploads/2019/08/IITKGP_ML-AI-Workshop.jpg?fit=800%2C800"
            alt="ML"
          />
          <div className="card-body">
            <h5 className="card-title">AI &amp; ML Workshop</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event4" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md ">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="https://thumbs.dreamstime.com/z/script-writing-software-engineering-coding-workshop-code-created-workshop-online-programming-course-apps-games-development-179899355.jpg"
            alt="Coding Workshop"
          />
          <div className="card-body">
            <h5 className="card-title">Coding Workshop </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event5" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md ">
        <div className="card" style={{ width: "21rem" }}>
          <img
            className="card-img-top"
            src="http://www.ilo.org/wcmsp5/groups/public/---asia/---ro-bangkok/---ilo-beijing/documents/image/wcms_816452.jpg"
            alt="Hackathon2"
          />
          <div className="card-body">
            <h5 className="card-title">Ethical Hacking</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              saepe corporis aut! Voluptatum eligendi beatae ratione ab laborum
              provident gypsum dolore?
            </p>
          </div>
          <div className="card-body text-center">
            <a href="/Event6" className="card-link btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
</div>



    )
}

export default Newdash;
