import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from '../Container'
import UserNavBar from './../Navbars/UserNavBar'
import { RutasPerfil } from './Routes/RutasPerfil'

export const UserPanel = () => { /*
  const [UserOpc, setUserOpc] = useState('Perfil') */
  const primerComponent = RutasPerfil[0].path
  return (
    <section className='bg-white dark:bg-gray-900'>
      <Container>
        <div className='lg:flex lg:-mx-2'>
          <UserNavBar />

          <div className='mt-6 lg:mt-0 lg:px-2 lg:w-4/5 '>
            <Routes>
              <Route index path='/' element={<Navigate to={`/usuario/panel${primerComponent}`} />} />
              {
              RutasPerfil.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))
            }
            </Routes>
            {/* <div className='flex items-center justify-between text-sm tracking-widest uppercase '>
              <h1 className='mb-4 text-xl font-bold text-gray-500 dark:text-gray-300 '>User Panel</h1>
            </div> */}

          </div>
        </div>
      </Container>
    </section>
  )
}
