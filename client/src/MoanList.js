import { Link } from "@reach/router";
import Moan from "./Moan"
import AddMoan from "./AddMoan";
import RableUp from "./RableUp";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function MoanList(props){
  
  const list = props.moanzlist.map((moaan,index) => (
    <li key={index} className="list-group-item">
      <h1><Link to={`/moanz/${moaan._id}`}>{moaan.headline}</Link></h1>
      <Moan moan={moaan}/>
      <RableUp postUp={props.postUp} id={moaan._id} index={index} setData={props.setData} moanzlist={props.moanzlist}/>
     
      </li>
    
    ));
    
    return(
        <>
        <div>
        <AddMoan addMoan={props.addMoan}/>
        </div>
        <div>
        <ol className="list-group list-group-flush">
        {list}
       </ol>
        </div>
        </>
    )
}
export default MoanList;