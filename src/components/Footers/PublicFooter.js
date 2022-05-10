import React from 'react'
import { GiPineTree } from 'react-icons/gi'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiOutlineGoogle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function PublicFooter () {
  return (

    <div className='w-full bg-gray-900 text-white'>
      <div className='xl:px-40 pb-6 lg:px-20 md:px-10 sm:px-5 px-10'>
        <div className='w-full pt-6 flex flex-col sm:flex-row space-y-2  justify-start'>
          <div className='w-full sm:w-2/5 pr-6 flex flex-col space-y-2'>
            <div className=' flex w-full'>
              <GiPineTree size={28} />
              <a className='text-xl font-bold font-heading'>Emsemure</a>

            </div>
            <p className='opacity-60'>Calle 2, Mz C, LOTE 15, AV.Asociacion de VIV de Tecnicos y Suboficiales, Lima, Villa El Salvador
            </p>
          </div>
          <div className='w-full sm:w-1/5 flex flex-col space-y-4'>
            <a className='opacity-60'>Sobre Nosotros </a>
            <Link to='/admin/panel' className='opacity-60'>Admin Panel</Link>
          </div>
          <div className='w-full sm:w-1/5 flex flex-col space-y-4'>
            <a className='opacity-60'>Contacto:</a>
            <a className='opacity-60'>01 2405045</a>
            <a className='opacity-60'>51 921924465</a>
          </div>
          <div className='w-full sm:w-1/5 pt-6 flex items-end mb-1'>
            <div className='flex flex-row space-x-4'>
              <AiFillFacebook />
              <AiOutlineTwitter />
              <AiFillInstagram />
              <AiOutlineGoogle />
            </div>
          </div>
        </div>
        <div className='opacity-60 pt-2'>
          <p>© 2022 Derechos Reservados.</p>
        </div>
      </div>
    </div>

  )
}
