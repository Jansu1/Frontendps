import React from "react";
const OldNav = () =>{
    return (
        <div>
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg> */}
        <span class="fs-4 text-success">

          <h1>Alumni Network</h1>
        </span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link " style={{fontSize: "20px"}}>Home</a></li>

      </ul>
    </header>
        </div>
    )
}
export default OldNav;