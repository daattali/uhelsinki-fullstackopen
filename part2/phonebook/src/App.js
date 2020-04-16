import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '012-345-678' },
    { name: 'DEAN AT', number: '012-345-678' },
    { name: 'dean at', number: '012-345-678' },
    { name: 'den at', number: '012-345-678' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = { name: newName,  number: newNumber}
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const allNames = persons.map(person => person.name)
  const nameExists = allNames.includes(newName) 
  const filteredPersons = 
    newFilter.trim() === "" ?
    persons :
    persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App