import { useState } from "react";
import MembershipForm from "../Components/MembershipForm";

const HomePage = () => {

    const [membershipFormState, setMembershipFormState] = useState(false)

    const handleForm = () => {
        setMembershipFormState(true);

    }
    
    return(
        <>

        <section id="home-section">
            <MembershipForm state={membershipFormState} setState={setMembershipFormState} />


            <div id="about-tea-house-area">

                <div className="about-us-description">

                    <p id="short-announcement">
                        We have listened to your feedback and we have decided to bring back events to our big community. 
                        Please make sure to cast your vote to decide where the next location of our new Tea House Harmony VII Event. Regular and Premium Members are all able to attend! 
                        Voting will continue all throughout this month.
                        Meanwhile, we will continue to deliver the best tea on the market.
                    </p>
                </div>
            </div>

            <div id="become-a-member-area">
                <div id="become-member-box">
                    <p id="become-member-text" className="premium-style" onClick={() => handleForm()}>
                        Sign in
                    </p>
                </div>
            </div>

        </section>
        </>
    )
}

export default HomePage