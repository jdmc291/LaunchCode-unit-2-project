import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import PopupCard from "../Components/PopupCard";
import { HeaderData } from "../HeaderData";
import { Link } from "react-router-dom";

const ShoppingPage = () => {

    const [teaItems, setTeaItems] = useState();
    const [popup, setPopup] = useState(false);
    const [count, setCount] = useState();
    const [usersCurrentItems, setUsersCurrentItems] = useState([]);

    const TogglePopup = () => {
        setPopup(true);
    }

    let footerData = HeaderData.map((singleLink) => {

        return(
            <li key={singleLink.Id}className="link-items">
                <Link to={`${singleLink.Link}`}>
                    {singleLink.Title}
                </Link>
            </li>
        )
    })

    useEffect(() => {
        fetch("https://tea-api-gules.vercel.app/api?limit=5")
            .then((res) => res.json())
            .then((data) => {
                let myData = data.slice(0, 5);
                setTeaItems(myData);
 
            })
        },[])

        return (

            <section id="shopping-section">
                <div id="filter-box"></div>
                <div id="catalog-of-items">
                    {teaItems?.map((item) => <ProductCard  key={item.id} uniqueId={item._id} name={item.name} price={item.price} description = {item.description} picture = {item.image_url} setCounter={setCount} counter={count} setUsersCurrentItems={setUsersCurrentItems} usersCurrentItems={usersCurrentItems} />)}
                </div>
                <div id="shopping-cart-area" onClick={() => TogglePopup()}>
                    <svg id="shopping-cart-icon" xmlns="http://www.w3.org/2000/svg" height="5rem" viewBox="0 -960 960 960" width="5rem" fill="#1f1f1f"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                    <div id="total-items-in-cart">{count}</div>
                </div>

                
                <div id="links-section">
                    <p>Can't Find What You're Looking For?</p>
                    <ul id="different-links-section">
                        {footerData}
                    </ul>

                </div>

                <PopupCard popupStatus={popup} changeStatus={setPopup} numberOfItems={count} setNumberOfItems={setCount} usersCurrentItems={usersCurrentItems} setUsersCurrentItems={setUsersCurrentItems}/>

            </section>

        )
    }

export default ShoppingPage