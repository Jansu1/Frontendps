import React from "react";
import Newnavbar from "./Newnavbar";
const Event4=()=>{
    <div>
        <Newnavbar/>
        <>
  <div className="text-center">
    <img
      src="https://i2.wp.com/robotechlabs.com/wp-content/uploads/2019/08/IITKGP_ML-AI-Workshop.jpg?fit=800%2C800"
      alt="Full Stack Developer"
      id="hack"
    />
  </div>
  <div>
    <br />
    <br />
    <h2 className="text-center">
      Event Title : Artificial Intelligence and Machine Learning Workshop
    </h2>
    <br />
    <h3 className="text-center">Event Description:</h3>
    <p className="p-3">
      <strong>
        AI/ML—short for artificial intelligence (AI) and machine learning
        (ML)—represents an important evolution in computer science and data
        processing that is quickly transforming a vast array of industries. As
        businesses and other organizations undergo digital transformation, they
        are faced with a growing tsunami of data that is at once incredibly
        valuable and increasingly burdensome to collect, process and analyze.
        New tools and methodologies are needed to manage the vast quantity of
        data being collected, to mine it for insights and to act on those
        insights when they are discovered.
      </strong>
    </p>
    <h3 className="text-center">Syllabus</h3>
    <br />
    <ul>
      <li>
        <strong>Explore the career opportunities in AI ML .</strong>
      </li>
      <li>
        <strong>Learn how Machine Learning works .</strong>
      </li>
      <li>
        <strong>Understand different types of Machine Learning.</strong>
      </li>
      <li>
        <strong>
          Use Pandas, Matplotlib, Plotly, Seaborn, and Folium to create
          insightful visualization.
        </strong>
      </li>
    </ul>{" "}
    <br />
    <h3 className="text-center">
      <i className="fa-solid fa-location-dot"> </i> Venue : CBIT
      College,Hyderabad
    </h3>
    <br />
    <h3 className="text-center">
      {" "}
      <i className="fa-solid fa-calendar-days"> </i> Date : 17/08/2023{" "}
    </h3>
    <br />
    <h3 className="text-center">
      <i className="fa-regular fa-clock" /> Time : 8am-2pm
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
}
export default Event4;