import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const handleChange =(e)=>{
  
   setNewName(e.target.value)

  }


const onAdd=(e)=>{
  e.preventDefault()
 const newObject = {
  name : newName,
  number: newNumber,
  id: persons.length+1
 }
 let check = persons.find((person)=> person.name===newName)

check?alert(`${newName} is already added to phonebook`)
:setPersons([...persons,newObject])

setNewNumber("")
  setNewName("")
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter show with <input onChange={(e)=>setNewFilter(e.target.value)} />
          { 
          console.log(persons.filter((person)=>person.name.toUpperCase().match(newFilter.toUpperCase())))}
        </div>
        <div>
          Name: <input value={newName} onChange={handleChange}/> <br></br>
          Number: <input value={newNumber} onChange={(e)=>setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={onAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {
        persons.map((person)=><li key={person.id} >{person.name}       {person.number}</li>)

      }
  
    </div>
  )
}

export default App