import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";


const productsContext = createContext({});

export const ProductsProvider = ({children}) => {
const [products, setProducts] = useState([]);
const [categories, setCategories] =useState([]);

useEffect(() => {
  // useEffect no puede asincronico
  // 2 PIDO LOS DATOS (truco: usar async/await)
  const getProducts = async () => {
    // 3 obtener colleccion
    const productsCollection = collection(db, 'Products');
    // 4 obtener Snapshot (foto de la lista en ese momento)
    const productsSnapShot = await getDocs(productsCollection);
    // 5 obtener datos en forma de json con data()
    const productsList = productsSnapShot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // 6 setear el estado con la lista
    console.log(productsList);
    setProducts(productsList);
  };

  const getCategories = async () =>{
    const categoriesCollection = collection(db, 'Categories');
    const categoriesSnapShot = await getDocs(categoriesCollection);
    const categoriesList = categoriesSnapShot.docs.map(doc =>({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Categorias List", categoriesList);
    setCategories(categoriesList);
  }
  // segunda parte del truco ejecutar la funcion asincronica
  getProducts();
  getCategories();

  // array vacio, se ejecuta cuando se monta <app />
}, []);

return(
    <productsContext.Provider value={{products, setProducts, categories}}>
        {children}
    </productsContext.Provider>
)

}

export default productsContext;