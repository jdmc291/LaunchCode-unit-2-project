import { useState } from "react"
import CreateEventForm from "../Forms/CreateEventForm"

const CreateReservationButton = (props) => {

    const {id} = props;
    
    const [isFormDisplaying, setIsFormDisplaying] = useState(false);

    const toggleForm = () => {

        setIsFormDisplaying(true);
    }

    return (
        <>
                        
            <button className="big-tea-house-button" onClick={() => toggleForm()}>
                <p className="reservation-text">
                    Create Reservation
                </p>
            </button>
            {
                isFormDisplaying ? <CreateEventForm setState={setIsFormDisplaying} id={id} /> : ""
            }
             

        </>
    )
}

export default CreateReservationButton