import RableUp from "./RableUp"

function Moan(props){
    
    // <RableUp postUp={props.rableUp}/>

return(
    <div>
        <h2>{props.moan.headline}</h2> 
        <p>{props.moan.complaint}</p> 
        <p>{props.moan.rablerable}</p>
        <p>{props.moan._id}</p>
       
    </div>
    
    
   
)

}
export default Moan