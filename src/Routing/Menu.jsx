import Header from "../components/Header"
import "./menu.css"
import {useState} from "react";

const Menu = ()=>{

    const[itemVisible, setItemVisible] = useState(false);
    const itemClicked = () =>{
        setItemVisible(!itemVisible)
    }

    return(
        <>
        <Header />
        <div className="menuBody">
            <div className="ball1"></div>
            <div className="ball2"></div>
            <div className="ground"></div>
            <div className="menuContent">
                <div className="item1" onClick={itemClicked} style={{height: itemVisible? '30vh': '10vh'}}>
                    <h1>Mozzarella Sticks</h1>
                    <div className="image" style={{visibility: itemVisible? 'visible': 'hidden', transition:'0.1s ease'}}></div>
                    <div className="detail" style={{visibility: itemVisible? 'visible': 'hidden'}}>
                        <p>Mozzarella sticks are a fairly bizarre menu item. Take your richest, stringiest, most delicious mozzarella cheese, toss it in bread crumbs, and throw it in hot oil. Fry till golden.</p>
                    </div>
                    <div className="detail2" style={{visibility: itemVisible? 'visible': 'hidden'}}>
                        <p>100₹</p>
                        <button>Add To Meal</button>
                    </div>
                </div>
                <div className="item2"></div>
            </div>
        </div>
        </>
    )
}
export default Menu