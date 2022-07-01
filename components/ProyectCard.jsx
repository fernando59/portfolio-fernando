import Image from "next/image"

export const CardProyect = ({title,description,image}) => {
  return <>
    
    <div className="bg-white p-5 rounded dark:bg-bunker shadow-md w-80 h-80">
        <Image src={image} width='100%' height={'100%'} alt={title} />
        <h2 className="text-2xl font-bold h-20 ">{title}</h2>
        <div>{description}</div>
    </div>
  </>
}
