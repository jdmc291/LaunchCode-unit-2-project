import { useState } from "react";
import TeaHouseCloseButton from "./TeaHouseCloseButton";
import LoginRequest from "../APICalls/AuthenticationCalls";
import {jwtDecode} from "jwt-decode"

const MembershipForm = (props) => {

    const { state, setState } = props;

    const [loginAttempt, setLoginAttempt] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //Form Submitted Successfully. Check your email's inbox &#9989;

    const handleSubmission = async (e) => {

        //Prevents the form from going away on submit
        e.preventDefault();

        // This will check if their inputs meet what is required

        const credentials = {

            email: email,
            password: password

        }

        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(response => {

            if (!response.ok) {
                setSubmitMessage("Username or Password is incorrect")
            }
            else {

                setSubmitMessage("Login successful");

            }

            return response.json();
        }).then(data => {
            localStorage.setItem("TeaHouseToken", data.token);

        })


    }

    //tracking what the user puts in the values

    const handleFirstNameChange = (e) => {
        let currentFirstName = e.target.value.toLowerCase();

        setFirstName(currentFirstName);

    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value.toLowerCase());
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value.toLowerCase());
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value.toLowerCase());
    }

    return (
        <>
            {
                state ?

                    <div id="membership-area">
                        <div id="membership-form">
                            <>
                                <TeaHouseCloseButton setSwitch={setState} id="member-close-button" />

                                <h1 id="become-member-title">Sign Into Your Account</h1>
                                <div id="content-box">
                                    <div id="member-registration-area">
                                        <form id="form-element" onSubmit={(e) => handleSubmission(e)} >

                                            <br></br>
                                            <label className="member-labels" htmlFor="sign-up-email">Email: </label>
                                            <input className="member-input" id="sign-up-email" type="email" placeholder="theteahouse@company.com" required onChange={(e) => handleEmailChange(e)} />
                                            <br></br>

                                            <label className="member-labels" htmlFor="password-input">Password: </label>
                                            <input className="member-input" id="password-input" type="password" placeholder="Enter Your Password" required onChange={(e) => handlePasswordChange(e)} />

                                            <br></br>
                                            <br></br>

                                            <input type="submit" id="form-submit-button" className="teahouse-close-button"></input>

                                            <br></br>

                                            {submitMessage}

                                        </form>

                                    </div>

                                    <div id="premium-advertisement">
                                        <p className="member-registration-deals">&#10024; Receive 2 Tea Packets Monthly &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get Access To Our Extravagant Restaurant Locations Around the World And Bring Up to 3 Friends &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get 2-Day Delivery on Tea Packet Orders &#10024;</p>
                                        <br></br>
                                        <p className="member-registration-deals">&#10024; Get Premium Deals on Ordered Tea Packets &#10024;</p>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div> : ""

            }
        </>
    )
}

export default MembershipForm