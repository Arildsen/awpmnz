import { Link } from "@reach/router";
import Moan from "./Moan"
import AddMoan from "./AddMoan";
import RableUp from "./RableUp";

const API_URL = process.env.REACT_APP_API;
function MoanList(props){
  
  const list = props.moanzlist.map((moaan,index) => (
    <li key={index}>
      <Link to={`/moanz/${moaan._id}`}>Gå til dette moan</Link>
      <Moan moan={moaan}/>
      <RableUp id={moaan._id} moaandeex={moaan.index} rablerable={moaan.rablerable} postUp={props.postUp}/>
      </li>
    
    ));
    
    return(
        <>
        <div>
        
        <ol>
        
        {list}
       
        </ol>
        <div>
        <AddMoan addMoan={props.addMoan}/>
        </div>
        
        </div>
        </>
    )
}
export default MoanList;