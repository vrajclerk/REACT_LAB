import React,{useState} from 'react'
const ItemList = ({ items }) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    // State for managing the list of items
    const [items, setItems] = useState([]);
  
    // Event handler for handling form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);
        setInputValue('');
      }
    };
  
    return (
      <div>
        <h1>React Functional Components </h1>
  
        {/* JSX and Conditional Rendering */}
        <p>{items.length > 0 ? 'Items in the list:' : 'No items in the list'}</p>
  
        {/* List Rendering */}
        <ItemList items={items} />
  
        {/* Form with Event Handling and State */}
        <form onSubmit={handleSubmit}>
          <label>
            Add Item:
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };

export default Form
