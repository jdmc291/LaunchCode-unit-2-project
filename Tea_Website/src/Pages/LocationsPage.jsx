import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
import EventCard from "../Components/EventCard";


const LocationsPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [eventData, setEventData] = useState([])
    

    useEffect(() => {

        let token = localStorage?.getItem("TeaHouseToken");


        if (token !== null) {
            let decodedMessageObject = jwtDecode(token);
            setIsLoggedIn(decodedMessageObject.isPremium)
        } else {

            setIsLoggedIn(false);

        }

        if (isLoggedIn === false) {

            fetch('http://localhost:8080/api/events/getAllEvents', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
            }).then(response => {

                if (!response.ok) {
                    setSubmitMessage("Something went wrong. Please change input and try again")
                }
                else {

                    return response.json();
                }

                
            }).then( data => {

                setEventData(data) 
            }
            )
        }
    }, )

    return (
        <>
            <section id="locations-section">

                {
                    isLoggedIn ?
                    
                    (
                        
                        eventData.map((singleEvent) =>{
                            
                            let premiumMemberId = singleEvent.event_id;

                            return <EventCard key={singleEvent.event_id} eventId={premiumMemberId} name={singleEvent.event_name} picture={singleEvent.picture} description={singleEvent.description}/>
                        })) 
                    
                    : <div className="not-available">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40rem" viewBox="0 -960 960 960" width="40rem" fill="#1f1f1f"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
                        <p className="lock-screen-text">Become a Member Now To Unlock Locations Page</p>
                    </div>
                }

            </section>
        </>
    )
}

export default LocationsPage