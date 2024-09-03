import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
            {items.map((item)=>(
                <LineItem 
                    //Since it takes single item every iteration in the list
                    //Here we should give item and not items as prop
                    item={item}

                    //And we should provide key also as prop because it takes
                    //each item and it need its unique id which is the key.
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
  )
}

export default ItemsList