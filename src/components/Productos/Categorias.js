/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react'
import { getCategorias } from '../../helpers'

import { Container } from '../Container'
import { LoaderReact } from './../tables/LoaderReact'
import { Productos } from './Productos'

export const CategoriasScreen = () => {
  const [categoriaData, setCategoriaData] = useState([])
  const [catname, setCatname] = useState('SILLONES')
  const ElegirCat = (categoria) => {
    setCatname(categoria)
    console.log('cambiaste categoria')
  }
  useEffect(() => {
    getCategorias().then(setCategoriaData).catch(console.error)
  }, [])

  const categorias = useMemo(() => {
    return categoriaData.categorias
  }, [categoriaData])

  // set productos filter

  // aca acaba set productos filter
  if (!categorias) {
    return (<LoaderReact />)
  } else {
    console.log('----------un render---------------')
    return (
      <section className='bg-white dark:bg-gray-900'>
        <Container>
          <div className='lg:flex lg:-mx-2'>
            <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4'>

              {categorias && categorias.map((categoria) => (
                <div key={categoria._id}>
                  <button onClick={() => ElegirCat(categoria.nombre)} type='button' className='block font-medium text-gray-500 dark:text-gray-300 hover:underline'>
                    <span>{categoria.nombre}</span>
                  </button>
                </div>
              ))}

            </div>

            <div className='mt-6 lg:mt-0 lg:px-2 lg:w-4/5 '>
              <div className='flex items-center justify-between text-sm tracking-widest uppercase '>
                <p className='text-gray-500 dark:text-gray-300'>{catname}</p>
              </div>

              {/* ACA EMPIEZA EL PRODUCTO */}
              <Productos catname={catname} />
              {/* ACA TERMINA EL PRODUCTO */}

            </div>
          </div>
        </Container>
      </section>
    )
  }
}
