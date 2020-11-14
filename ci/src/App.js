import React from 'react'
import './App.css';
import { Emoji } from './Components/Emoji';
import {Myheader} from './Components/header.js'
import Mysearch from './Components/search.js';
import {emojiList} from './resources/emojiList.js'

export default function App(){
  return<div>
      <Myheader></Myheader>
      <Mysearch></Mysearch>
  </div>
}
