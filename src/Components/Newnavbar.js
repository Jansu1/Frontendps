import React from "react";
const Newnavbar = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/Newdash" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32">
                        <use xlink:href="#bootstrap" />
                    </svg> */}
                    <span className="fs-4 text-success">

                        <h1>Alumni Network</h1>
                    </span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/Updatepf" className="nav-link " style={{fontSize:" 20px"}} >Update Profile</a></li>
                    <li className="me-5">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                            </button>
                            <ul className="dropdown-menu bg-secondary">
                                <li><a className="dropdown-item bg-secondary text-white" href="/Profile">View Profile</a></li>
                                <li><a className="dropdown-item bg-secondary text-white" href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </header>
        </div>
    )
}
export default Newnavbar;
