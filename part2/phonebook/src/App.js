import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange =(e)=>{
  
   setNewName(e.target.value)

  }

const onAdd=(e)=>{
  e.preventDefault()
 const newObject = {
  name : newName
 }
  setPersons([...persons,newObject])

  setNewName("")
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={onAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {
        persons.map((person)=><li key={person.name} >{person.name}</li>)

      }
  
    </div>
  )
}

export default App