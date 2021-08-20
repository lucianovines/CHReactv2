import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer (){

    return(
        <>
        <div>
            <h1>Acá va a ir nuestra pagina.</h1>
        </div>
        <h1>ItemList:</h1>
        <div class="row row-cols-2 row-cols-md-6 g-4">
            <ItemList />
        </div>
        </>
    )
}