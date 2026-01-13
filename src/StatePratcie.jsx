import { useState, useEffect  } from "react";

function StatePratcie() 
{
    const [fruit, setFruit] = useState("Mango"); // first param conatain state  value and 2nd will be fucntion  update value
    // let fruit = "Mango";
  const [monsters, setMonsters] = useState([]); // initial state just like component did mount
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users=> setMonsters(users));
}, []); // component did mount  
// / empty dependency array = run once on mount

    

     const changeFruit = () => 
        {
            setFruit("Orange");
        }
    // const changeFruit = () => {
    //     fruit = "Orange";
    //     console.log(fruit); 
    // }
    return (
        <div>
            <h1> {fruit} </h1>
            <button onClick={changeFruit}>ChangeFruit Name</button>

            <h2>Monster List of function component</h2>
      {monsters.map((monster)=>(
        <div key={monster.id}>
          <h4> {monster.name} </h4>
          {/* </Test> */}
        </div>
      ))}
</div>
)
}

function Test(){
    return (
        <div>
          
           
        </div>
    )
}

export {Test};
export default StatePratcie;