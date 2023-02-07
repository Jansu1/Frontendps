import React from "react";
import Newnavbar from "./Newnavbar";

const Profile = () => {
    return (
        <div>
            <Newnavbar />
            <div>
                <div className="text-center">
                    <h1>MyProfile</h1>
                    <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                        alt="User"/><br/>
                        </div>
                        <div className="col">
                            <h3><strong>Name : </strong>S SAI SUJAN</h3>
                            <h3><strong>Phone Number : </strong>8013689931</h3>
                            <h3><strong>Email : </strong>saisujan08@gmail.com</h3>
                            <h3><strong>College : </strong>KMIT</h3>
                            <h3><strong>DOB : </strong>11/11/2003</h3>
                            <h3><strong>Degree : </strong>Btech</h3>
                            <h3><strong>Year Of Qualification : </strong>2021</h3>
                        </div>
                        <div className="col">
                            <h3><strong>Company : </strong>Lorem</h3>
                        </div>
            </div>
        </div>
            )
}
            export default Profile;