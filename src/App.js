import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

function App() {

  const API_URL="http://localhost:3500/items"
  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')
  const[items,setItems]=useState([]);
  const[fetchError, setFetchError]=useState(null)
  const[isLoading, setIsLoading]=useState(true)

//Usually useEffect is used for data related tasks.
//Since they can be executed only once for increasing speed.
useEffect(()=>{
  const fetchItems=async()=>{
    try{
      const response=await fetch(API_URL);
      if(!response.ok) throw new Error("Data not received");
      console.log(response);
      const listItems=await response.json()
      console.log(listItems);
      setItems(listItems)
      setFetchError(null)
    } catch(err){
      console.log(err.stack);
      setFetchError(err.message)
    } finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    (async()=>await fetchItems())()
  },2000)
},[])

const addItem=(item)=>{
  const id= items.length ? items[items.length-1].id + 1 : 1 
  const newAddedItem={id, checked:false, item}
  const listItems = [...items, newAddedItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('')
}

const handleCheck=(id)=>{
    const listItems=items.map((item)=>
    item.id===id ? {...item, checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

  return (
    <div className="App">
      <Header name="Todo List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        addItem={addItem}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> }
      </main>
      
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
