import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './../Container/Container'

export const UserCartScreen = () => {
  const ListCart = useSelector(state => state.cart.cartProducts)

  if (!ListCart.length) {
    return <div className='text-white text-center  h-96 text-4xl'>NO TIENES PRODUCTOS</div>
  } else {
    return (
      <Container>
        <div className='justify-center items-center text-white'>
          <div className='row'>
            <div className='col-md-12'>
              <table className='table'>
                <thead>
                  <tr>
                    <th />
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      ListCart.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td><i className='badge badge-danger'>X</i></td>
                            <td>{item.nombre}</td>
                            <td><img src={item.img} style={{ width: '100px', height: '80px' }} /></td>
                            <td>{item.precio} $</td>
                            <td>
                              <span className='btn btn-primary'> -</span>
                              <span className='btn btn-info'>{item.stock}</span>
                              <span className='btn btn-primary'>+</span>
                            </td>
                            <td>total $</td>
                          </tr>
                        )
                      })

                  }
                  <tr>
                    <td colSpan='5'>Total Carts</td>
                    <td>5000 $</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
