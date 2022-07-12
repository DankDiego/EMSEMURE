
import React, { useEffect, useState } from 'react'

import { DinamicTable } from './../tables/DinamicTable'
import { fetchSinToken } from '../../helpers/fetch'
import { LoaderReact } from '../tables/LoaderReact'
export const UsuariosList = () => {
  /* const dispatch = useDispatch() */
  const [Usuarios, setUsuarios] = useState([])
  async function GetUsuarios () {
    try {
      const resp = await fetchSinToken('usuarios')
      const data = await resp.json()
      setUsuarios(data.usuarios)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetUsuarios()
  }, [])
  const data = React.useMemo(() => [...Usuarios], [Usuarios])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'nombre'
      },
      {
        Header: 'Correo',
        accessor: 'correo'
      },
      {
        Header: 'Fecha Registro',
        accessor: 'fecharegistro'
      },
      {
        Header: 'id',
        accessor: 'uid'
      }
    ],
    []
  )

  return (!Usuarios.length
    ? (
      <LoaderReact />
      )
    : (
      <>
        <DinamicTable data={data} columns={columns} tablename='Usuarios' apiruta='usuarios' />
      </>
      ) /*: <TableStyled /> */)
}
