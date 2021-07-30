/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
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
  return(
  <BrowserRouter>
      <div>
        <header>
        <div className="ui secondary pointing menu">
            <NavLink  activeClassName="active-nav" to="/" className="item">Accordion</NavLink>
            <NavLink activeClassName="active-nav" to="/list" className="item">Search</NavLink>
            <NavLink activeClassName="active-nav" to="/dropdown" className="item">Dropdown</NavLink>
            <NavLink activeClassName="active-nav" to="/translate" className="item">Translate</NavLink>
          </div>
        </header>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Accordion items={items}/>
            </Route>
            <Route path="/list">
              <Search/>
            </Route>
            <Route path="/dropdown">
             <Dropdown
              label="select a colour"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
            </Route>
            <Route path="/translate">
              <Translate/>
            </Route>
            </Switch>
            </div>
    </BrowserRouter>
  ) 

}
