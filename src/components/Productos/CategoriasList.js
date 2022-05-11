/* eslint-disable react/jsx-key */
import React from 'react'
/* import { useDispatch } from 'react-redux' */
import { useTable } from 'react-table'
export const CategoriaList = () => {
  /* const dispatch = useDispatch() */
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World'
      },
      {
        col1: 'react-table',
        col2: 'rocks'
      },
      {
        col1: 'whatever',
        col2: 'you want'
      }
    ],
    []
  )
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1' // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
      }
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })

  return (
    <div className='min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>
            <div className='text-center font-semibold text-xl self-start text-gray-700'>
              <h2 className='leading-relaxed'>Lista de categorias</h2>
            </div>
            <div>
              <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: 'solid 3px red',
                            background: 'aliceblue',
                            color: 'black',
                            fontWeight: 'bold'
                          }}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                                background: 'papayawhip'
                              }}
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
