import React from 'react';

const StringType = (props) => {
  return (
    // STRING: Set of characters that can also contain spaces and numbers
    //  - Immutable
    //  - .length
    //  - Indexable
    //  - Escapable "Ben\'s"
    <div className="string">
      <a href="/Lessons/Data_Types"> Data Types </a>
      <h1>String</h1>
      <p>A String is a set of characters that can also contain spaces and numbers</p>
      <code>const string = "Hello, my name is Jeff";</code>
    </div>
  )
}

export default StringType;