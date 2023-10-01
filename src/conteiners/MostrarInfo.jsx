import { useState } from "react"
import { TraerInfo } from "./TraerInfo.jsx"

export const MostarInfo = () => {

    const { data } = TraerInfo('https://jsonplaceholder.typicode.com/posts')
    
    const [info, setInfo] = useState(null)

    function mostrar (){
        return(
            <ul>
                {data.map((element)=>{
                    <li key={element.id}>
                        {element.title}
                    </li>
                })}
            </ul>
        )
    }


    return(
        <>
            <button onClick={()=>{setInfo(mostrar())}}>presioname para recibir la informacion</button>

            <div>{info}</div>
        </>
    )




}























// export const MostarInfo = () => {

//     const { data } = TraerInfo('https://jsonplaceholder.typicode.com/posts')

//     function Mostrar() {
//         return (
//             <ul>
//                 {data.map(element => {
//                     <div>
//                         <h1 key={element.id}>{element.title}</h1>

//                         <h2 key={element.id}>{element.body}</h2>
//                     </div>
//                 })}
//             </ul>
//         )

//     }

//     function Hola (){
//         console.log(data);
//     }

//     return (
        
//         <>
//             {/* <button onClick={Mostrar}>prensioname</button> */}
//             <Hola />

//         </>
//     )
// }


// {/* <TraerInfo url = 'https://jsonplaceholder.typicode.com/posts'/> */ }
