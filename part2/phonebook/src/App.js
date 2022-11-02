import { useState, useEffect } from 'react'
import { Contact } from './components/Contact'
import { Notification } from './components/Notification'
import allService from './services/service'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification,setNotification]=useState(null)
  let lastId =persons.length!==0?persons[persons.length-1]:0
 
  const handleChange =(e)=>{
  
   setNewName(e.target.value)

  }
useEffect(()=>{
  init()

},[])
const init = ()=>{allService
  .getAll()
  .then((res)=>setPersons(res.data))}
const onAdd=(e)=>{
  e.preventDefault()
 const newObject = {
  name : newName,
  number: newNumber,
  id: lastId.id+1
 }



 let check = persons.find((person)=> person.name===newName)

check?alert(`${newName} is already added to phonebook`)
:(allService
.create(newObject)
.then(res=>{setPersons([...persons,newObject]
)
  setNotification(newObject.name)

  setTimeout(() => {
    setNotification(null)
  }, 2000);


  setNewNumber("")
  setNewName("")
})
.catch(err=>console.log(err))
)
}
const filterNames = newFilter === ''?persons:persons.filter((person)=>person.name.toUpperCase().match(newFilter.toUpperCase()))


const deleteButton =(id)=>{
if(window.confirm("Are you sure?")){allService
.deletation(id)
.then(res=>init())}

}




  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <form>
        <div>
          filter show with <input onChange={(e)=>setNewFilter(e.target.value)} />
      
        </div>
        <h2>Add a new number</h2>
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
        filterNames.map((person)=><Contact key={person.id} name={person.name} number={person.number} del={()=>deleteButton(person.id)} />)

      }
  
    </div>
  )
}

export default App