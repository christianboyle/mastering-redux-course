import React from 'react'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/contactActions'
import Contact from './Contact'

const ContactsList = (props) => {
  const { contacts } = props

  console.log('contacts', contacts)

  const handleDeleteContact = (id) => {
    props.dispatch(deleteContact(id))
  }

  return (
    <div className='contacts-table'>
      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Remove Contact</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              const { id, firstName, lastName, phone } = contact

              return (
                <Contact
                  key={id}
                  firstName={firstName}
                  lastName={lastName}
                  phone={phone}
                  id={id}
                  handleDeleteContact={handleDeleteContact}
                />
              )
            })}
          </tbody>
        </table>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps)(ContactsList)
