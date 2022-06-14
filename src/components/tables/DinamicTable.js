/* eslint-disable react/jsx-key */
import React from 'react'
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import { GlobalFilter } from '../forms/GlobalFilter'
export const DinamicTable = ({ columns, data, tablename }) => {
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
      initialState: { pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination)

  return (
    <div className='bg-gray-900  w-full p-6 flex flex-col justify-center sm:py-12'>
      <div className='py-3 w-full'>
        <div className='px-4 py-1 mx-8 w-83'>
          <div className='w-full'>
            <div className='text-center font-semibold text-xl self-start text-white'>
              <h2 className='leading-relaxed text-2xl'>Lista de {tablename} </h2>
            </div>
            <div className='inline-block min-w-full col-span-12'>
              <div className='flex text-white'>
                <GlobalFilter setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter} />

                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                  {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                  {'>>'}
                </button>{' '}
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                {/* <span>
                  | Go to page:{' '}
                  <input
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                  />
                </span>{' '} */}
                <select
                  className='text-gray-600'
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[5, 10, 20].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
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
                      <tr {...row.getRowProps()} className='bg-gray-800 rounded-lg'>
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
    </div>
  )
}
