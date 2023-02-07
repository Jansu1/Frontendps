import React from "react";
import Newnavbar from "./Newnavbar";
const Event6=()=>{
    return (
        <div>
            <Newnavbar/>
            <>
  <div className="text-center">
    <img
      src="http://www.ilo.org/wcmsp5/groups/public/---asia/---ro-bangkok/---ilo-beijing/documents/image/wcms_816452.jpg"
      alt="Hackathon"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">Event Title : Ethical Hacking</h2>
    <br />
    <h3 className="text-center">Event Description:</h3>
    <p className="p-3">
      <strong>
        Ethical Hacking Workshop is the best place to know Hackers lifestyle.
        This helps to create a Personal Interest and Career Growth in cyber
        security. Enroll Today for ethical hacking online course. What is an
        Ethical Hacking Workshop? Ethical Hacking Workshop on cyber security is
        not only about the basic hacking. But to sort a Professional hacker from
        the crowd. We teach to defeat the hack more than how to hack and secure
        the IT infrastructure with following the Cyber law guidelines and
        implement those guidelines in their working profession.
      </strong>
    </p>
    <h3 className="text-center">Why choose Ethical Hacking Workshop?</h3>
    <br />
    <ul>
      <li>
        <strong>
          Get the Basic Hacking knowledge and Good amount of Hacking Tricks and
          Tools..
        </strong>
      </li>
      <li>
        <strong>
          Cyber Security and Information Security Countermeasures.
        </strong>
      </li>
      <li>
        <strong>Recent cyber-attacks Awareness and Hygiene Browsing.</strong>
      </li>
      <li>
        <strong>
          Participation Certification helps to stand out in Interviews.
        </strong>
      </li>
      <li>
        <strong>
          Cybervie Ethical Hacking Workshop Toolkit and Free EBooks on Ethical
          Hacking.
        </strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">
      <i className="fa-solid fa-location-dot"> </i> Venue : NGIT, Hyderabad
    </h3>
    <br />
    <h3 className="text-center">
      {" "}
      <i className="fa-solid fa-calendar-days"> </i> Date : 1/12/2023-26/12/2023{" "}
    </h3>
    <br />
    <h3 className="text-center">
      <i className="fa-regular fa-clock" /> Time : 10am-2pm
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
export default Event6;