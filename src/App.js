import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// const colorNames = ['Aquamarine', 'BlueViolet',
//  'Chartreuse', 'CornflowerBlue', 'Thistle', 
//  'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

//  export default function Colorpicker(){
//    const [color, setColor] = useState('Tomato');

//    const divStyle = {backgroundColor: color}
//    return(
//     <div style = {divStyle}>
//       <p>Selected color : {color}</p>
//       {colorNames.map((colorName)=> (
//         <button
//           onClick = {() => setColor(colorName)}
//           key={colorName} > {colorName}

//         </button>
//       ))}

//     </div>

//    );
//  }

// export default function EmailTextInput(){
//   const [email, setEmail] = useState("");
//   const handleChange  = (event) => {
//     const updatedEmail = event.target.value;
//     setEmail(updatedEmail)
//   }
//   return (
   
//     <input placeholder='email' value={email} onChange={handleChange}   />
//   )

// }



//--------------------------2--------------------------------

// export default function Colorpicker(){
//     const [color, setColor] =  useState("yellow");

//     const divStyle = {backgroundColor: color}

//     return(
//         <div style={divStyle}>
//             <button onClick={()=>setColor('green')} ></button>
//                 <button onClick={() => setColor('BlueViolet')}>
//             BlueViolet
//         </button>
//         <button onClick={() => setColor('Chartreuse')}>
//             Chartreuse
//         </button>
      
//         </div>
//     )
// }



//--------------------------3State setter outside of jsx---------------------------

// export default function PhoneInput(){
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('')

//     const handleChange = (event) =>{
//         const updatedEmail = event.target.value;
//         setEmail(updatedEmail)
//     }
//     const handleChange2 = (event)=>{
//         const updatedPhone = event.target.value
//         setPhone(updatedPhone)
//     }

//     return(
//         <div > 
//             <label>Email  </label>
//             <input  onClick={handleChange} value={email}  />
//             <div>
//             <label>Phone  </label>
//             <input  onClick={handleChange2} value={phone}  />
//         </div>
//         </div>
//     )
// }



 const produce = [
  "Carrots",
  "Cucumbers",
  "Bell peppers",
  "Avocados",
  "Spinach",
  "Kale",
  "Tomatoes",
  "Bananas",
  "Lemons",
  "Ginger",
  "Onions",
  "Potatoes",
  "Sweet potatoes",
  "Purple cabbage",
  "Broccoli",
  "Mushrooms",
  "Cilantro"
];

 const pantryItems = [
  "Chia",
  "Goji berries",
  "Peanut butter",
  "Bread",
  "Cashews",
  "Pumpkin seeds",
  "Peanuts",
  "Olive oil",
  "Sesame oil",
  "Tamari",
  "Pinto beans",
  "Black beans",
  "Coffee",
  "Rice",
  "Dates",
  "Quinoa"
];


function ItemList({items, onItemClick}){
    const handleClick = ({target}) =>{
        const item = target.value;
        // when you click a object it is converted to an item
        onItemClick(item); 
        };

    return ( 
        <div>
       {items.map((item, index) =>(  // mapping all items to button
           <button value={item} onClick={handleClick} key={index}>{item}</button>
       ))}
       </div>
    );

}
 export default function GroceryStore() {
    const [cart, setCart] = useState([]);  //Initializing use state with [] coz you are creating a list

     const addItem =(item) => {
         setCart((prev) => {
             return [item, ...prev]
         });
     };
     const removeItem =(targetIndex) =>{
         setCart((prev) => {
             return prev.filter((item, index) => index !== targetIndex);
         });
     };


     return (
         <div>
             <h1>Grocery List</h1>
             <ul>
                 {cart.map((item, index) =>(
                     <li onClick={() => removeItem(index)} key={index}>{item}</li>
                 ))
                
                 }

             </ul>

             <h2>Produce</h2>
                <ItemList items={produce} onItemClick={addItem} />

             <h2>pantry Items</h2>
                <ItemList items={pantryItems}  onItemClick={addItem} />
         </div>

     )
 }