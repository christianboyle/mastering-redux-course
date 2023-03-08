import React from 'react'

const Contact = (props) => {
  const { firstName, lastName, phone } = props

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default Contact
