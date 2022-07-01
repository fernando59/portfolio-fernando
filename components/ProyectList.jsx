import { projectsData } from '../constants/constants'
import { CardProyect } from './ProyectCard'
export const Proyects = () => {
  return <>
  <div className='px-5'>

    <h2 className=' text-center text-5xl md:text-6xl font-bold py-8 uppercase'>Listado de Proyectos</h2>
    <div className='container mx-auto grid gap-6 content-center grid-columns-custom  w-full md:w-[80%] '>

      {
        projectsData.map(proyect => <CardProyect key={proyect.id} {...proyect} />)
      }
    </div>
      </div>

  </>
}
