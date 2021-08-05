import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export function ItemListContainer (){

    return(
        <>
        <div>
            <h1>Acá va a ir nuestra pagina.</h1>
        </div>
        <ItemCount initial={3} stock={5}/>
        <h1>ItemList:</h1>
        <ItemList />
        </>
    )
}