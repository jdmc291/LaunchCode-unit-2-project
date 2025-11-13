import { useState } from "react"
import UpdateEventForm from "../Forms/UpdateEventForm"

const UpdateReservationButton = (props) => {
    
    const [isFormDisplaying, setIsFormDisplaying] = useState(false);

    const {id} = props;
    const toggleForm = () => {

        setIsFormDisplaying(true);
    }

    return (
        <>
                        
            <button className="big-tea-house-button" onClick={() => toggleForm()}>
                <p className="reservation-text">
                    Update Reservation
                </p>
            </button>
            {
                isFormDisplaying ? <UpdateEventForm setState={setIsFormDisplaying} id={id}/> : ""
            }
             

        </>
    )
}

export default UpdateReservationButton