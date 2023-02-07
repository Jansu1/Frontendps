import React from "react";
import Newnavbar from "./Newnavbar";
const Event1 = ()=>{
    return (
        <div>
            <Newnavbar/>
        
        <>
  <div className="text-center">
    <img
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214"
      alt="Hackathon"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">Event Title : Hackathon</h2>
    <br />
    <h3 className="text-center">Event Description:</h3>
    <p className="p-3">
      <strong>
        Smart India Hackathon is a nationwide initiative to provide students
        with a platform to solve some of the pressing problems we face in our
        daily lives, and thus inculcate a culture of product innovation and a
        mindset of problem-solving. The first four editions SIH2017, SIH2018,
        SIH2019 and SIH2020 proved to be extremely successful in promoting
        innovation out-of-the-box thinking in young minds, especially
        engineering students from across India.
      </strong>
    </p>
    <h3 className="text-center">Guidelines</h3>
    <br />
    <ul>
      <li>
        <strong>
          Participants should arrive at the event venue 15 minutes before the
          event starts, to make sure every-one has joined the kaggle
          competition.
        </strong>
      </li>
      <li>
        <strong>
          Every-one is encouraged to use the internet to find out anything they
          do not understand even code snippets.
        </strong>
      </li>
      <li>
        <strong>
          But the final submission can not be simply copy and paste of code.
        </strong>
      </li>
      <li>
        <strong>
          Participants should be able to explain their code, workflow and
          ideology.
        </strong>
      </li>
      <li>
        <strong>
          Attendees are not allowed to damage any equipment present in the venue
          and those who do will be fined for damages with being disqualified
          from the competition.
        </strong>
      </li>
      <li>
        <strong>All the participants need to follow the event Timeline.</strong>
      </li>
      <li>
        <strong>
          Attendees are responsible for their own belongings and the organizers
          will not be held responsible for any lost or stolen items.
        </strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">
      <i className="fa-solid fa-location-dot"> </i> Venue : Mahatma Gandhi
      Auditorium,Hyderabad
    </h3>
    <br />
    <h3 className="text-center">
      {" "}
      <i className="fa-solid fa-calendar-days"> </i> Date : 1/12/2023{" "}
    </h3>
    <br />
    <h3 className="text-center">
      <i className="fa-regular fa-clock" /> Time : 9am-3pm
    </h3>
    <br />
  </div>
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
  </>

  </div>

    )
}
export default Event1;