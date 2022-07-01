import { projectsData } from '../constants/constants'
import { CardProyect } from './ProyectCard'
export const Proyects = () => {
  return <>
    <h2 className='text-7xl font-bold p-8'>Listado de Proyectos</h2>
    <div className='container mx-auto grid gap-6 content-center grid-columns-custom w-[60%] '>

      {
        projectsData.map(proyect => <CardProyect {...proyect} />)
      }
    </div>

  </>
}
