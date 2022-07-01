import { projectsData } from '../constants/constants'
import { CardProyect } from './ProyectCard'
export const Proyects = () => {
  return <>
    <h2 className='text-5xl md:text-7xl font-bold p-8'>Listado de Proyectos</h2>
    <div className='container mx-auto grid gap-6 content-center grid-columns-custom  w-full md:w-[60%] '>

      {
        projectsData.map(proyect => <CardProyect key={proyect.id} {...proyect} />)
      }
    </div>

  </>
}
