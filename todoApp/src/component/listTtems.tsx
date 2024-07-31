import "../App.css"
import { FaRegCircle } from "react-icons/fa6";
import { FaTrash , FaEdit } from "react-icons/fa";

interface ListItemProps {
    Todo: string[];
    editItem: (id: number) => void;
    deleteItem: (id: number) => void;
    ADDtocompleted:(id:number) => void;
}



const ListItem: React.FC<ListItemProps> = ({Todo, editItem ,deleteItem,ADDtocompleted})=>{
    return (
        <>
        <ul id="taskList">
          {Todo.map((task:string, index:number) => (
            <>
            <li key={index} >
                <p onClick={()=>ADDtocompleted(index)}>
                    <FaRegCircle />
                    {task}
                </p>
              <p>
              <button onClick={() => {
                editItem(index)
                
            }}><FaEdit/></button>

              <button onClick={() => {
                  deleteItem(index)
                }}><FaTrash/></button>
              </p>
            </li>
            </>
          ))}
        </ul>
        </>
    )

}

export default ListItem;