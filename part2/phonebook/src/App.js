import React, { useState, useEffect } from 'react'
import './index.css'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ notification, setNotification] = useState(null)

  const allNames = persons.map(person => person.name)
  const nameExists = allNames.includes(newName) 
  const filteredPersons = 
    newFilter.trim() === "" ?
    persons :
    persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  const showMessage = (message, type="success") => {
    setNotification({message, type})
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = { name: newName,  number: newNumber}

    if (nameExists) {
      const add = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (add === true) {
        const personID = persons.find(person => person.name === newName).id
        personService
          .update(personID, newPerson)
          .then(response => {
            setPersons(persons.map(person => person.id === personID ? response : person))
            setNewName('')
            setNewNumber('')
            showMessage(`Updated ${newName}`)
          })
          .catch(error => {
            showMessage(`Information of ${newName} has already been removed from server`, "error")
            setPersons(persons.filter(person => person.id !== personID))
          })
      }
    } else {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          showMessage(`Added ${newName}`)
        })
    }
  }

  const handleDelete = (personDelete) =>
    (event) => {
      event.preventDefault()
      const result = window.confirm(`Delete ${personDelete.name}?`);
      if (result !== true) {
        return
      }
      personService
        .deletePerson(personDelete.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personDelete.id))
          showMessage(`Deleted ${personDelete.name}`)
        })
        .catch(error => {
          showMessage(`Information of ${newName} has already been removed from server`, "error")
          setPersons(persons.filter(person => person.id !== personDelete.id))
        })
    } 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App