import React from "react";
import OldNav from "./OldNav";

const Signin = () => {
    return (
        <div>
            <OldNav/>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-4" >
                        <img src="https://media.istockphoto.com/id/924684764/vector/alumni-badge-icon-flat-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=AV4-T3AlIQDxPYpuHagDlwToTUsMMoTFYKrJWgpAkSY="
                            alt="Alumni img" className="img-fluid" />

                    </div>
                    
                    <div className="col-sm-4" style={{backgroundColor:"lavender"}}><br /><br /><br /><br />
                        <strong>
                            <h1>Sign In</h1>
                        </strong><br />
                        <form action="/action_page.php">
                            <label type="name">Username </label><br />
                            <input type="text" id="name" placeholder="Username" /><br /><br />
                            <label type="password">Password </label><br />
                            <input type="text" id="password" placeholder="Password" /><br /><br />

                            <input type="submit" value="Login" formaction="/NewDash" /><br /><br />
                            <input type="submit" value="New User?" formaction="/Signup" />
                        </form>
                    </div>
                    <div className="col-sm-4" >
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHMQxOMPt1UYQ/company-logo_200_200/0/1618994391413?e=2147483647&v=beta&t=WRyybDyfLzF3OYbGYH67HBOKXHN78H21Ct2PhL_I480"
                            alt="NIGT" id="si"/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Signin;