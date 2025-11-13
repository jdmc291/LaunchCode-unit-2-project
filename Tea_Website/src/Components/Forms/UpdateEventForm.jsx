import { useState } from "react";
import TeaHouseCloseButton from "../TeaHouseCloseButton"
import { jwtDecode } from "jwt-decode";

const UpdateEventForm = (props) => {

    const {setState, id} = props;

    const [guestsAttending, setGuestsAttending] = useState(0);
    const [addtionalDetails, setAdditionalDetails] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

    console.log(id)

    const handleCreateRequest = (e) => {

        e.preventDefault();

        let token = localStorage.getItem("TeaHouseToken");
        
        let newToken = jwtDecode(token);
        
        

        let requestObject = {

            userId: newToken.id,
            eventId: id,
            number_of_guests: guestsAttending,
            additionalInfo: addtionalDetails

        }

        fetch('http://localhost:8080/api/events/updateReservation', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        }).then(response => {

            if (!response.ok) {
                setSubmitMessage("Something went wrong. Please change input and try again")
            }
            else {

                setSubmitMessage("Your reservation successfully updated. Please check your email for verified confirmation");

            }

            
        })





    }

    const handleNumChange = (e) => {

        let guestNumber = e.target.value.toLowerCase();

        setGuestsAttending(guestNumber);

    }

    const handleDetailsChange = (e) => {

        let details = e.target.value.toLowerCase();

        setAdditionalDetails(details);
    }

    return (
        <>
            <div className="reusable-form">

                <TeaHouseCloseButton setSwitch={setState} className="form-close-button" />

                <h1 className="location-title">Update Your Reservation</h1>
                <form id="create-form-element" onSubmit={(e) => handleCreateRequest(e)}>
                    <label className="member-labels" htmlFor="guest-number">Number of Guests: </label>
                    <input className="member-input" id="guest-number" type="number" placeholder="0" max={3} required onChange={(e) => handleNumChange(e)} />
                    <br></br>

                    <label className="member-labels" htmlFor="additional-details"> Additional Details: </label>
                    <input className="member-input" id="additional=details" type="textarea" placeholder="Place Details Here" max={3} required onChange={(e) => handleDetailsChange(e)} />

                    <input type="submit" id="form-submit-button" className="teahouse-close-button" ></input>

                <p className="submit-message">
                    {submitMessage}
                </p>

                </form>



            </div>
        </>
    )
}

export default UpdateEventForm