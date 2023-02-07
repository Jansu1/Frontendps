import React from "react";
import Newnavbar from "./Newnavbar";
const Event5=()=>{
    return(
        <div>
            <Newnavbar/>
            <>
  <div className="text-center">
    <img
      src="https://thumbs.dreamstime.com/z/script-writing-software-engineering-coding-workshop-code-created-workshop-online-programming-course-apps-games-development-179899355.jpg"
      alt="Full Stack Developer"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">Event Title : Basic Programming Workshop</h2>
    <br />
    <h3 className="text-center">Event Description:</h3>
    <p className="p-3">
      <strong>
        What is coding workshop?
        <br />
        This Introduction to Coding workshop is a great way to get pupils
        started with code. Using visual programming tools such as Scratch, Kodu,
        MakeCode and Minecraft HoC, we'll teach the fundamentals behind coding,
        and begin to look at how pupils can write their own apps and games.
        We’ll encourage them to play, and have fun, as they learn how to animate
        characters, create simple game mechanics, and learn coding basics!
      </strong>
    </p>
    <h3 className="text-center">Syllabus</h3>
    <br />
    <ul>
      <li>
        <strong>Problem solving through C.</strong>
      </li>
      <li>
        <strong>Solving real life problem using Python</strong>
      </li>
      <li>
        <strong>Solving Practical Problem through Python.</strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">
      <i className="fa-solid fa-location-dot"> </i> Venue : KMIT,Hyderabad
    </h3>
    <br />
    <h3 className="text-center">
      {" "}
      <i className="fa-solid fa-calendar-days"> </i> Date : 23/08/2023 -
      23/09/2023
    </h3>
    <br />
    <h3 className="text-center">
      <i className="fa-regular fa-clock" /> Time : 8am-12pm
    </h3>
    <br />
  </div>
  <br />
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
export default Event5;