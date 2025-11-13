import { useState } from "react";
import TeaHouseCloseButton from "../TeaHouseCloseButton"
import { jwtDecode } from "jwt-decode";

const CancelEventForm = (props) => {

    const {setState, id} = props;

    const [submitMessage, setSubmitMessage] = useState("");

    const handleCreateRequest = (e) => {

        e.preventDefault();

        let token = localStorage.getItem("TeaHouseToken");
        
        let newToken = jwtDecode(token);
        
        

        let requestObject = {

            userId: newToken.id,
            eventId: id,

        }

        fetch('http://localhost:8080/api/events/deleteReservation', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        }).then(response => {

            if (!response.ok) {

                setSubmitMessage("Something went wrong. Please change input and try again");
            }
            else {

                setSubmitMessage("Your reservation canceled");

            }

        })

    }


    return (
        <>
            <div className="reusable-form">

                <TeaHouseCloseButton setSwitch={setState} className="form-close-button" />

                <h1 className="location-title">Cancel Reservation</h1>
                <form onSubmit={(e) => handleCreateRequest(e)}>

                    <p className="cancel-text"> Are you sure you want to confirm your cancellation? </p> <br></br><p className="cancel-text"> This action cannot be undone.</p> <br></br>

                    <input type="submit" value="Confirm Cancellation" id="form-submit-button" className="teahouse-close-button" ></input>

                <p className="submit-message">
                    {submitMessage}
                </p>

                </form>



            </div>
        </>
    )
}

export default CancelEventForm