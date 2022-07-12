/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import { GlobalFilter } from '../forms/GlobalFilter'
import { IconContext } from 'react-icons'
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight, AiFillEdit, AiFillDelete, AiFillFileImage } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { DeleteApi } from '../../helpers'
import { ModalComp } from './../Container/Modal'
export const DinamicTable = ({ columns, data, tablename, apiruta }) => {
  const navigate = useNavigate()
  const DeleteItem = (idRow) => {
    const ruta = apiruta + '/' + idRow
    console.log(ruta)
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No podras deshacer este cambio',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteApi(ruta)
      }
    })
  }
  const [isOpen, setIsOpen] = useState({ open: false, prodid: '' })
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'Acciones',
        Header: 'Acciones',
        Cell: ({ row }) => (
          <div className='flex hover:cursor-pointer space-x-2 text-white'>

            {(apiruta !== 'usuarios') ? <AiFillEdit size={20} onClick={() => navigate('/admin/' + apiruta + '/edit/' + row.values._id)} /> : ''}
            {(apiruta !== 'usuarios') ? <AiFillDelete size={20} onClick={() => DeleteItem(row.values._id)} /> : ''}
            {(apiruta === 'productos') ? <AiFillFileImage size={20} onClick={() => setIsOpen({ open: true, proid: row.values._id })} /> : ''}
            {(apiruta === 'usuarios') ? <AiFillDelete size={20} onClick={() => DeleteItem(row.values.uid)} /> : ''}
          </div>
        )
      }
    ])
  }
  const {
    getTableProps,
    getTableBodyProps,
    setGlobalFilter,
    state,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns: ['_id', 'uid'], pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    tableHooks,
    usePagination)

  return (
    <div className='bg-gray-900  w-full p-6 flex flex-col justify-center sm:py-12'>
      <div className='py-3 w-full'>
        <div className='px-4 py-1 mx-8 w-83'>
          <div className='w-full'>
            <div className='text-center font-semibold text-xl self-start text-white'>
              <h2 className='leading-relaxed text-2xl'>Lista de {tablename} </h2>
            </div>
            <div className='inline-block min-w-full col-span-12 pt-2'>
              <div className='flex text-white text-center justify-center'>

                <GlobalFilter className='px-6' setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter} />
                <div className='pl-6 flex hover:cursor-pointer text-white text-center justify-center'>
                  <IconContext.Provider value={{ color: 'white', size: 25 }}>
                    {/*  //primera pagina */}
                    <AiOutlineDoubleLeft className='self-center' onClick={() => gotoPage(0)} disabled={!canPreviousPage} />{' '}
                    {/*  //sgt pagina */}
                    <AiOutlineLeft className='self-center' onClick={() => previousPage()} disabled={!canPreviousPage} />{' '}
                    {/*  //pagina anterior */}
                    <AiOutlineRight className='self-center' onClick={() => nextPage()} disabled={!canNextPage} />{' '}
                    {/*  //ultima pagina */}
                    <AiOutlineDoubleRight className='self-center' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />{' '}
                  </IconContext.Provider>
                </div>
                <span className='px-6 self-center'>
                  Pagina{' '}
                  <strong>
                    {pageIndex + 1} de {pageOptions.length}
                  </strong>{' '}
                </span>

                <select
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-9 self-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[5, 10, 20].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Mostrar {pageSize}
                    </option>
                  ))}
                </select>

              </div>
              <table className='table w-full text-gray-400 border-separate space-y-4 text-sm' {...getTableProps()}>
                <thead className='bg-gray-800 text-gray-500'>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps()}
                          className='p-3 text-left'
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()} className='bg-gray-800 rounded-lg text-clip overflow-hidden'>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className='p-3 '
                            >
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isOpen.open && <ModalComp isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}
