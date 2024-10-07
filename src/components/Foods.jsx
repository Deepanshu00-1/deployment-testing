import "../css/Foods.css"
import FoodCard from "./Card"
import FoodData1 from "../CardData/Data1"

const displayFoodCard = (FoodData1)=>{
    return(
        <FoodCard
        Img = {FoodData1.imgUrl}
        foodName = {FoodData1.foodName}
        foodInfo = {FoodData1.foodInfo}
        Btn = {FoodData1.Btn}
        Btn2 = {FoodData1.Btn2}
        price = {FoodData1.price}
        />
    )
}
const Foods =()=>{

    return(
        <div className="Foods">
            <div className="head">
                <h1>Delicious Dishes Awaits You Here👇</h1>
            </div>
            <div className="foodCards">
                {FoodData1.map(displayFoodCard)}
            </div>
        </div>
    )
}
export default Foods