import React from "react";
import Signin from "./Signin";
import Newnavbar from "./Newnavbar";
const Signup = () => {
    return (
        <div>
            <Newnavbar />
            <div>
                <div className="text-center">
                    <h1>Sign Up.</h1><br /><br />

                </div>
                <div className="container">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Student
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDe>fault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Industry
                        </label>
                    </div><br /><br />
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="exampleUsername">Username</label>
                                    <input type="username" className="form-control" id="exampleUsername" placeholder="Enter Username" />
                                </div><br />
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Enter email" />

                                </div><br />
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div><br />
                                <div className="form-group">
                                    <label for="cp"> Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Confirm Password" />
                                </div><br />
                                <div className="text-center">
                                    <a href="/Signin" className="btn btn-success " style={{width:"10%"}}>
                                        Submit</a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Signup;