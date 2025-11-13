import { useState } from "react"
import CancelEventForm from "../Forms/CancelEventForm"

const CancelReservationButton = (props) => {

    const {id} = props;
    
    const [isFormDisplaying, setIsFormDisplaying] = useState(false);

    const toggleForm = () => {

        setIsFormDisplaying(true);
    }

    return (
        <>
                        
            <button className="big-tea-house-button" onClick={() => toggleForm()}>
                <p className="reservation-text">
                    Cancel Reservation
                </p>
            </button>
            {
                isFormDisplaying ? <CancelEventForm setState={setIsFormDisplaying} id={id} /> : ""
            }
             

        </>
    )
}

export default CancelReservationButton