import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useQuiosco()

    const { nombre, icono, id } = categoria

  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-300">
        <Image 
            width={60}
            height={60}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen icono"
        />

        <button
            type='button'
            className='text-2xl font-bold hover:cursor-pointer'
            onClick={() =>handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria
