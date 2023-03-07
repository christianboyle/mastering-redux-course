import React from 'react'
import { connect } from 'react-redux'

const ContactsList = (props) => {
  const { contacts } = props

  console.log('contacts', contacts)

  return <div>List of Contacts</div>
}

const mapStateToProps = (state) => {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps)(ContactsList)
