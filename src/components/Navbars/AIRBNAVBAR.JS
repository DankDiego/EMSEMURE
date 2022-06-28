import React from 'react'

export const AIRBNAVBAR = () => {
  return (
    <div class='container p-8 mx-auto mt-12'>
      <div class='w-full overflow-x-auto'>
        <div class='my-2'>
          <h3 class='text-xl font-bold tracking-wider'>Lista de Productos</h3>
        </div>
        <table class='w-full shadow-inner'>
          <thead>
            <tr class='bg-gray-100'>
              <th class='px-6 py-3 font-bold whitespace-nowrap'>Imagen</th>
              <th class='px-6 py-3 font-bold whitespace-nowrap'>Producto</th>
              <th class='px-6 py-3 font-bold whitespace-nowrap'>Qty</th>
              <th class='px-6 py-3 font-bold whitespace-nowrap'>Precio</th>
              <th class='px-6 py-3 font-bold whitespace-nowrap'>Agregar/Quitar</th>
            </tr>
          </thead>
          <tbody>
            {
                      ListCart.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <div class='flex justify-center'>
                                <img
                                  src={item.img}
                                  class='object-cover h-28 w-28 rounded-2xl'
                                  alt='image'
                                />
                              </div>
                            </td>
                            <td class='p-4 px-6 text-center whitespace-nowrap'>
                              <div class='flex flex-col items-center justify-center'>
                                <h3>{item.nombre}</h3>
                              </div>
                            </td>
                            <td class='p-4 px-6 text-center whitespace-nowrap'>{item.stock}</td>
                            <td class='p-4 px-6 text-center whitespace-nowrap'>{item.precio}</td>
                            <td class='p-4 px-6 text-center whitespace-nowrap'>
                              <button>
                                QUITAR
                              </button>
                            </td>
                          </tr>
                        )
                      })

        }
          </tbody>
        </table>

      </div>
    </div>
  )
}
