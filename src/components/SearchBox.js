import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
   return (
      <div className="pa2">
         <input
            className="pa3 ba b--gray bg-lightest-blue"
            type="serach"
            placeholder="serach robots"
            onChange={searchChange}
         />
      </div>
   )
}

export default SearchBox
