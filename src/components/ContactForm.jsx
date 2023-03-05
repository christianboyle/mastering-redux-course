import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  })

  const [errorMsg, setErrorMsg] = useState('')

  const handleOnChange = (event) => {
    const { name, value } = event.target

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, phone } = contact
    if (firstName !== '' && lastName !== '' && phone !== '') {
      console.log(firstName, lastName, phone)
      setErrorMsg('')
    } else {
      setErrorMsg('All the fields are required.')
    }
  }

  return (
    <Form onSubmit={handleOnSubmit} className='contact-form'>
      {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
      <Form.Group controlId='firstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className='firstName'
          name='firstName'
          value={contact.firstName || ''}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='lastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className='lastName'
          name='lastName'
          value={contact.lastName || ''}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='phone'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className='phone'
          name='phone'
          value={contact.phone || ''}
          type='number'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
          Add Contact
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ContactForm
