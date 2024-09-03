import React from 'react'

const Header = ({name = "AA"}) => {
  return (
    <header className='header'>{name}</header>
  )
}

//Prints AA if name is not received
Header.defaultProps={
    name:"AA"
}
//React team is going to remove the usage of defaultProps which is used above
//So we can directly give the value in the parameter itself like below

// const Header = ({ name = "AA" }) => {
//     return <div>{name}</div>;
//   };
export default Header