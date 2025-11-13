import { useState } from "react";
import CreateReservationButton from "./ReservationButtons/CreateReservationButton";
import UpdateReservationButton from "./ReservationButtons/UpdateReservationButton";
import CancelReservationButton from "./ReservationButtons/CancelReservationButton";

const EventCard = (props) => {

    const [resuableForm, setReusableForm] = useState(false);

    const {eventId, name, description, picture} = props;
    

    return (
        <>
            <div className="event-card">
                <h1 className="event-title">{name}</h1>
                <div className="event-picture-container">
                    <img className="event-image" src={picture} alt={`${name} picture`} />
                </div>
                <p className="event-description">
                    {description}
                </p>
                <br></br>
                <div className="list-of-buttons">

                    <CreateReservationButton id={eventId}/>

                    <UpdateReservationButton id={eventId}/>

                    <CancelReservationButton id={eventId}/>

                </div>
            </div>
            
        </>
    )
}

export default EventCard