import React from 'react';
function Mynavbar (){
    return( <div class="container-fluid">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            {/* <svg class="bi me-2" width="40" height="32"> */}
                {/* <use xlink:href="#bootstrap" /> */}
            {/* </svg> */}
            <span class="fs-4 text-success">
                <h1>Alumni Network</h1>
            </span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link ">Home</a></li>
            <li class="nav-item"><a href="#Features" class="nav-link">Features</a></li>
            <div class="btn btn-warning">
                <li class="nav-item"><a href="/Signin" class="nav-link ">Sign In</a></li>
            </div>
            <li class="nav-item"><a href="#About" class="nav-link">About</a></li>
        </ul>
    </header>
</div>
    )
}
export default Mynavbar;