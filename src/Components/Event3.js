import React from "react";
import Newnavbar from "./Newnavbar";
const Event3 =()=>{
    return (
        <div>
            <Newnavbar/>
            <>
  <div className="text-center">
    <img
      src="https://www.shutterstock.com/image-vector/modern-job-vacancy-square-web-600w-1956326470.jpg"
      alt="Job"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">Job Title : UI/UX Designer </h2>
    <br />
    <h3 className="text-center">Job Description:</h3>
    <p className="p-3">
      <strong>
        User interface (UI) designers work closely with user experience (UX)
        designers and other design specialists. Their job is to make sure that
        every page and every step a user will experience in their interaction
        with the finished product will conform to the overall vision created by
        UX designers. However, unlike UX designers, since UI designers are
        responsible for making UX designers’ visions a reality, many UI
        designers have a good understanding of front-end development and some
        coding skills. There is a lot of confusion about the difference between
        UX and UI design, so when drafting your job ad, it’s a good idea to
        outline these differences by listing a specific skill set and adding
        requirements that will narrow down the potential field of candidates.
      </strong>
    </p>
    <h3 className="text-center">Job Requirement:</h3>
    <p className="p-3">
      <strong>
        We are looking for an experienced and talented UI designer to design and
        shape unique, user-centric products and experiences. The ideal candidate
        will have experience working in agile teams, with developers, UX
        designers and copywriters. You will be able to make deliberate design
        decisions and to translate any given user-experience journey into a
        smooth and intuitive interaction.
      </strong>
    </p>
    <ul>
      <li>
        <strong>
          Three or more years of experience and proven track record.
        </strong>
      </li>
      <li>
        <strong>
          Strong portfolio to be presented and defended during interview.
        </strong>
      </li>
      <li>
        <strong>
          Hands-on experience creating wireframes, prototypes, storyboards, user
          flows, etc
        </strong>
      </li>
      <li>
        <strong>Creative ideas with problem solving mindset.</strong>
      </li>
    </ul>
    <p />
    <h3 className="text-center">Job Responsiblities</h3>
    <br />
    <ul>
      <li>
        <strong>
          Be a great team player, experienced in working with agile teams.
          Ability to collaborate closely with developers, copywriters and UX
          designers.
        </strong>
      </li>
      <li>
        <strong>
          Create, improve and use wireframes, prototypes, style guides, user
          flows, and effectively communicate your interaction ideas using any of
          these methods.
        </strong>
      </li>
      <li>
        <strong>
          Working alongside graphic designers for web design features.
        </strong>
      </li>
      <li>
        <strong>
          Present and defend your design decisions. All your design decisions
          should be based on the overall design roadmap as well as your own
          design thinking and fundamental principles (i.e. color theory, visual
          weight, etc.)
        </strong>
      </li>
      <li>
        <strong>
          Continually keep yourself and your design team updated with the latest
          changes in your industrys standards.
        </strong>
      </li>
      <strong>strong&gt;</strong>
    </ul>
    <strong>
      {" "}
      <br />
      <h3 className="text-center">
        <i className="fa-solid fa-location-dot"> </i> Venue : Sardar Patel
        Auditorium,Hyderabad
      </h3>
      <br />
      <h3 className="text-center">
        {" "}
        <i className="fa-solid fa-calendar-days"> </i> Date : 13/05/2023{" "}
      </h3>
      <br />
      <h3 className="text-center">
        <i className="fa-regular fa-clock" /> Time : 10am-4pm
      </h3>
      <br />
    </strong>
  </div>
  <strong>
    <div className="text-center mb-4">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Submit
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              You have been successfully registered!!!
            </div>
            <div className="modal-footer">
              <a href="/Newdash">
                <button type="button" className="btn btn-primary">
                  Go to Home
                </button>
              </a>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </strong>
</>

        </div>
    )
}
export default Event3;