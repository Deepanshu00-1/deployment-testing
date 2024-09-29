import {useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement,increment } from '../Redux/counter/counterSlice';
import { addItem } from '../Redux/counter/cartSlice';
import { itemContext } from '../context/context';
import { useContext } from 'react';
import FoodData1 from '../CardData/Data1';


// export const increamentContext = createContext();


const FoodCard =(props)=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    const value = useContext(itemContext);

    // const newItem = useSelector((state)=> state.cartItem.value);

    const items = {
        itemName: props.foodName,
        itemPrice: props.price,
        itemDescryption: props.foodInfo,
        itemImage: props.Img,
    }
    
    // const[addedItems, setAddedItems] = useState(items);

    // console.log(items)

    const [click, setClick] = useState(false);

    const changeColor = ()=>{
        setClick(!click)
    }
    // const [btnText, setBtnText] = useState('Add To Cart');
    const [popupTrigger, setPopupTrigger] = useState(false);
    const [btnWidth, setBtnWidth] = useState(false);
    // const [popup, setPopup] = useState(false);

    // useEffect(()=>{
    //     setPopup(true)
    //     return()=>{
    //         <div className="popup" style={{position: 'absolute', top:'45%', left: '45%',height:"10vh", width:"20vw", display:popup?'block':'none'}}>
    //             <p>Item added to cart successfully✅</p>
    //         </div>
    //     }
    // },[popup])

    const [popup, setPopup] = useState(false);

    useEffect(()=>{
        setPopup(!popup);
    },[popupTrigger])

    const addCartClicked=()=>{
        dispatch(increment());
        setPopupTrigger(!popupTrigger)
        // setBtnText('+');
        setBtnWidth(true);
        value.setItem(
            {
                itemName: props.foodName,
                itemPrice: props.price,
                itemDescryption: props.foodInfo,
                itemImage: props.Img,
            },
            // {
            //     itemName: props.foodName,
            //     itemPrice: props.price,
            //     itemDescryption: props.foodInfo,
            //     itemImage: props.Img,
            // },
        )
        // localStorage.setItem(newItem, items);
    }
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

    // const [increament, setIncreament] = useState();

    // const addToCart=()=>{
    //     // setAddItem(true)
    //     setAddItem(addItem+1)
    //     localStorage.setItem('Item', addItem)
    // }

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

                <div className="popup" style={{position: 'absolute', top:'185%', left: '45%',height:"15vh", width:"25vw",boxShadow:'5px 7px 10px 2px grey',backgroundColor:'cyan', display:popup?'none':'block'}}>
                    <p style={{position: 'absolute', top:'40%', left: '20%'}}>Item added to cart successfully✅</p>
                </div>

                {btnWidth && <div className="newPopup" style={{position: 'absolute', top:'200%', left: '45%',height:"15vh", width:"25vw",boxShadow:'5px 7px 10px 2px grey',backgroundColor:'grey'}}>New Popup</div>}
                
                <button onClick={addCartClicked} style={{width:btnWidth? '3vw':'6vw', transition: '0.2s ease',display: btnWidth?'none': 'block'}}>Add To Cart</button>
                <button onClick={sameItemAdd} style={{display:'flex', visibility:btnWidth?'visible':'hidden', justifyContent: 'center', alignItems:'center', position:'absolute', width:'3vw', height:"5vh", marginLeft:'10vw',fontSize:'2vh'}}>+</button>
                <span style={{display: btnWidth? 'flex':'none'}}>{sameItem}</span>
                <button className='btn2' onClick={sameItemSub} style={{display: btnWidth? 'flex': 'none'}}>-</button>
                {/* <increamentContext.Provider value ={increament}>
                    <AddToCart increament = {increament+1}/>
                </increamentContext.Provider> */}
            </div>
        </div>
        </>
    )
}

export default FoodCard

