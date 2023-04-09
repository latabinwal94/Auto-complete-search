import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const options = ['Apple', 'Orange', 'Grapes', 'Kiwi', 'Pear', 'Guava']

const AutoComplete = () => {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const debounceInput = useDebounce(value, 500)
  
  useEffect(() => {
    if(debounceInput) {
      console.log(debounceInput, 'debounceInput')
      const items = options.filter(option => option.toLowerCase().includes(debounceInput.toLowerCase()))
      setSuggestions(items)
    }
  },[debounceInput])

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
    const items = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))
    setSuggestions(items)
  }

  const selectOption = (option) => {
    setValue(option)
  }

  return (
    <div>
      <input
        type='text'
        name='search'
        placeholder='Search Here....'
        onChange={handleChange}
        value={value}
      />
      {suggestions.map((suggestion, i) => {
        return (
          <div
            key={i}
            onClick={()=>{selectOption(suggestion)}}>
              {suggestion}
          </div>
        )
        })
      }
    </div>
  )
}

export default AutoComplete
