import Header from "../components/Header"
import {useState} from "react"
import "./cart.css"
import { itemContext } from "../context/context"
import { useContext } from "react"




const Cart =()=>{

    // let items = localStorage.getItem(items);
    // console.log(items)
    
    const value = useContext(itemContext);


    return(
        <>
        <Header />
        <div className="cartSection">
            <div className="heading">
            {/* <i className="fa-brands fa-opencart"></i> */}
                <p>Your Cart </p>
                <i className="fa-brands fa-opencart"></i>
            </div>
            <div className="cartItems">
                <div className="item1">
                    <div className="itemImage"><img src={value.item.itemImage} alt="" /></div>
                    <div className="itemDetails">
                        <div className="itemName">{value.item.itemName}</div>
                        <div className="itemPrice">{value.item.itemPrice}</div>
                        <div className="itemDescryption">{value.item.itemDescryption}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart;





















// const Cart = ()=>{
    
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");

//     function handleInputChange(e){
//         setNewTask(e.target.value);
//     }

//     function addTask(){
//         if(newTask.trim()!==""){
//             setTasks(t => [...t, newTask]);
//             setNewTask("");
//         }
//     }

//     function deleteTask(index){
//         const updatedTasks = tasks.filter((_, i)=> i!== index);
//         setTasks(updatedTasks);
//     }

//     function moveTaskUp(index){
//         if(index>0){
//             const updatedTasks = [...tasks];
//             [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
//             setTasks(updatedTasks);
//         }
//     }

//     function moveTaskDown(index){
//         if(index<tasks.length-1){
//             const updatedTasks = [...tasks];
//             [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
//             setTasks(updatedTasks);
//         }
//     }

//     return(
//         <>
//         <Header />
//             <div className="to-do-list" style={{height: '100%', width: '30vw', backgroundColor: 'grey' ,display: 'flex', flexDirection: 'column'}}>
//                 <h1 style={{height: '5vh', width: '15vw',}}>To-Do-List</h1>
//                 <div style={{height: '10%', width: '100%',}}>
//                     <input style={{height: '5vh', width: '15vw',}}
//                     type="text"
//                     placeholder="Enter a task..."
//                     value={newTask}
//                     onChange={handleInputChange}
//                     />
//                     <button style={{height: '7vh', width: '10vw',}}
//                     className="add-button"
//                     onClick={addTask}>
//                         Add
//                     </button>
//                 </div>
//                 <ol>
//                     {tasks.map((task,index)=>
//                     <li key={index}>
//                         <span className="text">{task}</span>
//                         <button style={{height: '5vh', width: '7vw', fontSize: '2vh',position: 'absolute',left:'16%',}}
//                         className="delete-button"
//                         onClick={()=>deleteTask(index)}
//                         >
//                             Delete
//                         </button>
//                         <button style={{height: '6vh', width: '5vw',fontSize: '3vh',position: 'absolute',left:'14%',marginTop: '12vh'}}
//                         className="move-button"
//                         onClick={()=>moveTaskUp(index)}
//                         >
//                             👆
//                         </button>
//                         <button style={{height: '6vh', width: '5vw',fontSize: '3vh',position: 'absolute',left:'20%',marginTop: '12vh'}}
//                         className="move-button"
//                         onClick={()=>moveTaskDown(index)}
//                         >
//                             👇
//                         </button>
//                     </li>
//                     )}
//                 </ol>
//             </div>
//         </>
//     )
// }
// export default Cart

