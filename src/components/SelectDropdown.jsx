import React from 'react'
import { Form } from 'react-bootstrap'

const SelectDropdown = ({ categories }) => {
  return (
    <React.Fragment>
      <div>Select Category</div>
      <Form.Control as='select'>
        <option>Select</option>
        {categories.map((category, index) => (
          <option value={category.cat_title} key={index}>
            {category.cat_title}
          </option>
        ))}
      </Form.Control>
    </React.Fragment>
  )
}

export default SelectDropdown
