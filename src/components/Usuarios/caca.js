/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector } from 'react-redux'
function Caca () {
  const ListCart = useSelector(state => state.cart.cartProducts)
  const [formFields, setFormFields] = useState([
    { nombre: '', cantidad: '', id: '', precio: '' }
  ])

  const handleFormChange = (event, index) => {
    const data = [...formFields]
    data[index][event.target.name] = event.target.value
    setFormFields(data)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(formFields)
  }

  const addFields = () => {
    const object = {
      nombre: '', cantidad: '', id: '', precio: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    const data = [...formFields]
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className='App'>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='nombre'
                placeholder='nombre'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='cantidad'
                placeholder='cantidad'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='id'
                placeholder='id'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='precio'
                placeholder='precio'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button className='bg-green-500' onClick={addFields}>Add More..</button>
      <br />
      <button className='bg-green-600' onClick={submit}>Submit</button>
    </div>
  )
}

export default Caca
