import React from 'react'

const Filter = ({newFilter, setNewFilter}) => 
  <div>
    find countries {' '}
    <input 
      value={newFilter} 
      onChange={event => setNewFilter(event.target.value)}
    />
  </div>

export default Filter