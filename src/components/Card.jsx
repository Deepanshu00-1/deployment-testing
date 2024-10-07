import {useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement,increment } from '../Redux/counter/counterSlice';
import { addItem } from '../Redux/counter/cartSlice';
import { itemContext } from '../context/context';
import { useContext } from 'react';
import FoodData1 from '../CardData/Data1';
import { itemAddedContext } from '../context/addedItemContext';


const FoodCard =(props)=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    const value = useContext(itemContext);
    let addedItems = useContext(itemAddedContext);

    // const newItem = useSelector((state)=> state.cartItem.value);

    const items = {
        itemName: props.foodName,
        itemPrice: props.price,
        itemDescryption: props.foodInfo,
        itemImage: props.Img,
    }
    

    const [click, setClick] = useState(false);

    const changeColor = ()=>{
        setClick(!click)
    }

    const [btnWidth, setBtnWidth] = useState(false);
    
    function pushAddedItems(){
        for(count = 0; count<=FoodData1.length; count++){
            addedItems.push(FoodData1[count]);
        }
    }
    const addCartClicked=()=>{
        dispatch(increment());
        setBtnWidth(true);
        value.setItem(
            {
                itemName: props.foodName,
                itemPrice: props.price,
                itemDescryption: props.foodInfo,
                itemImage: props.Img,
            },
        )
        addedItems.setAddedItem(
            pushAddedItems
        )
    }
    console.log(addedItems.addedItem)

    const[sameItem, setSameItem] = useState(1);
    const sameItemAdd=()=>{
        if(sameItem <= 19 && sameItem >= 0){
            setSameItem(sameItem+1)
        }
    }
    const sameItemSub=()=>{
        if(sameItem <=20 && sameItem >=1){
            setSameItem(sameItem-1)
          }
        if(sameItem==1){
            dispatch(decrement())
        }
    }


    return(
        <>
        <div className="card">
            <div className="img">
                <img src={props.Img} alt="" />
            </div>
            <div className="info">
                <h1>{props.foodName}</h1>
                <a href=""><p>{props.foodInfo}</p></a>
            </div>
            <div className="access">
                <div className="like"  title='Add to favourites'>
                    <div className="price">{props.price}</div>
                <i className="ri-heart-fill" onClick ={changeColor} style = {{color: click ? 'crimson':'hsla(0, 0%, 59%, 0.897)'}}></i>
                </div>

                {/* <div className="popup" style={{position: 'absolute', top:'185%', left: '45%',height:"15vh", width:"25vw",boxShadow:'5px 7px 10px 2px grey',backgroundColor:'cyan', display:popup?'none':'block'}}>
                    <p style={{position: 'absolute', top:'40%', left: '20%'}}>Item added to cart successfully✅</p>
                </div> */}

                {/* {btnWidth && <div className="newPopup" style={{position: 'absolute', top:'200%', left: '45%',height:"15vh", width:"25vw",boxShadow:'5px 7px 10px 2px grey',backgroundColor:'grey'}}>New Popup</div>} */}
                
                <button onClick={addCartClicked} style={{width:btnWidth? '3vw':'6vw', transition: '0.2s ease',display: btnWidth?'none': 'block'}}>Add To Cart</button>
                <button onClick={sameItemAdd} style={{display:'flex', visibility:btnWidth?'visible':'hidden', justifyContent: 'center', alignItems:'center', position:'absolute', width:'3vw', height:"5vh", marginLeft:'10vw',fontSize:'2vh'}}>+</button>
                <span style={{display: btnWidth? 'flex':'none'}}>{sameItem}</span>
                <button className='btn2' onClick={sameItemSub} style={{display: btnWidth? 'flex': 'none'}}>-</button>
            </div>
        </div>
        </>
    )
}

export default FoodCard

