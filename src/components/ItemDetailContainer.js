import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer(){

    return(
        <>
          <h1>Detalle del Producto:</h1>
          <div class="row row-cols-2 row-cols-md-6 g-4">
              <ItemDetail />
          </div>
        </>
    )
}