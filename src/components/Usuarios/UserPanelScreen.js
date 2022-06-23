import React from 'react'
import { Container } from '../Container'
import UserNavBar from './../Navbars/UserNavBar'

export const UserPanel = () => { /*
  const [UserOpc, setUserOpc] = useState('Perfil') */
  return (
    <section className='bg-white dark:bg-gray-900'>
      <Container>
        <div className='lg:flex lg:-mx-2'>
          <UserNavBar />

          <div className='mt-6 lg:mt-0 lg:px-2 lg:w-4/5 '>
            <div className='flex items-center justify-between text-sm tracking-widest uppercase '>
              <h1 className='mb-4 text-xl font-bold text-gray-500 dark:text-gray-300 '>User Panel</h1>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
