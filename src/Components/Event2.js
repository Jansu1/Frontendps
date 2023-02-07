import React from "react";
import Newnavbar from "./Newnavbar";
const Event2 = ()=>{
    return (
        <div>
            <Newnavbar/>
        
        <>
  <div className="text-center">
    <img
      src="https://i.pinimg.com/236x/78/7c/67/787c678083f35a77fe504e399ae753d8.jpg"
      alt="Full Stack Developer"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">Job Title : Full Stack Devloper</h2>
    <br />
    <h3 className="text-center">Job Description:</h3>
    <p className="p-3">
      <strong>
        We are looking for a highly skilled computer programmer who is
        comfortable with both front and back end programming. Full stack
        developers are responsible for developing and designing front end web
        architecture, ensuring the responsiveness of applications, and working
        alongside graphic designers for web design features, among other duties.
        Full stack developers will be required to see out a project from
        conception to final product, requiring good organizational skills and
        attention to detail.
      </strong>
    </p>
    <h3 className="text-center">Full Stack Developer Responsiblities</h3>
    <br />
    <ul>
      <li>
        <strong>Developing front end website architecture.</strong>
      </li>
      <li>
        <strong>Designing user interactions on web pages.</strong>
      </li>
      <li>
        <strong>
          Working alongside graphic designers for web design features.
        </strong>
      </li>
      <li>
        <strong>
          Staying abreast of developments in web applications and programming
          languages.
        </strong>
      </li>
      <li>
        <strong>Meeting both technical and consumer needs.</strong>
      </li>
      <li>
        <strong>Creating servers and databases for functionality.</strong>
      </li>
      <li>
        <strong>Ensuring cross-platform optimization for mobile phones.</strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">Full Stack Developer Requirements</h3>
    <br />
    <ul>
      <li>
        <strong>Degree in computer science.</strong>
      </li>
      <li>
        <strong>Strong organizational and project management skills.</strong>
      </li>
      <li>
        <strong>
          Proficiency with fundamental front-end languages such as HTML, CSS,
          and JavaScript.
        </strong>
      </li>
      <li>
        <strong>
          Familiarity with JavaScript frameworks such as Angular JS, React, and
          Amber.
        </strong>
      </li>
      <li>
        <strong>
          Familiarity with database technology such as MySQL, Oracle, and
          MongoDB.
        </strong>
      </li>
      <li>
        <strong>Excellent verbal communication skills.</strong>
      </li>
      <li>
        <strong>
          Proficiency with server-side languages such as Python, Ruby, Java,
          PHP, and .Net.
        </strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">
      <i className="fa-solid fa-location-dot"> </i> Venue : Fcci Hall,Hyderabad
    </h3>
    <br />
    <h3 className="text-center">
      {" "}
      <i className="fa-solid fa-calendar-days"> </i> Date : 26/07/2023{" "}
    </h3>
    <br />
    <h3 className="text-center">
      <i className="fa-regular fa-clock" /> Time : 11am-2pm
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
export default Event2;