/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
const items = [
  {
    title: 'What is React',
    content: 'React is a front end Java Script framework',
  },
  {
    title: 'Why use React',
    content: 'React is a favourite JS library among engineers',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
]
const options = [
  {
    label: 'The colour of Red',
    value: 'Red'
  },  {
    label: 'The colour of Blue',
    value: 'Blue'
  },  {
    label: 'The colour of Green',
    value: 'Green'
  },
 
]
export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Dropdown 
      selected={selected} 
      onSelectedChange = {setSelected}
      options={options}/>
      {/* <Accordion items={items} /> */}
    </div>
  )
}
