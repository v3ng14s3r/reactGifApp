// Dentro de los functional components NUNCA debe ir la llamada a una función
// sino por cada render la función vuelve a ejecutarse

// para disparar efectos secundarios
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      



      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem 
            key={image.id}
            {...image}
            />
          ))
        }
      </div>
    </>

  )
}
