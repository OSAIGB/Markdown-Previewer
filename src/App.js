import { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';
import Preview from './Preview';
import Editor from './Editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function App() {
  
  const [text, setText] = useState('# Welcome to my React Markdown Previewer! \n ## ## This is a sub-heading... \n ### And heres some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks. \n You can also make text **bold**... whoa! Or _italic_. \n Or... wait for it... **_both!_** \n And feel free to go crazy ~~crossing stuff out~~.  \n There\'s also [links](https://www.freecodecamp.org), and \n > Block Quotes! \n \n And if you want to get really crazy, even tables: \n\n Wild Header | Crazy Header | Another Header? \n ------------ | ------------- | ------------- \n Your content can | be here, and it | can be here.... \n And here. | Okay. | I think we get it. \n- And of course there are lists. \n - Some are bulleted. \n          - With different indentation levels. \n- That look like this. \n 1. And there are numbered lists too \n 1. Use just 1s if you want \n 1. And last but not least, let\'s not forget embedded images: \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)')
const [preview, setPreview] = useState('')
const [isVisible, setInvisible] = useState('true')
const [isClosed, setIsClosed] = useState(false)
const [faClosed, setFaClosed] = useState(false)
const [isEditorVisble, setEditorVisible] = useState(true)


const editorVisble = () =>{
  setEditorVisible(!isEditorVisble)
  setFaClosed(!faClosed)
}

const handleChange = (event) =>{
  setText(event.target.value)
}
useEffect(() => {
  const convertText = marked(text)
  setPreview(convertText)
}, [text])

const visible =() => {
  setInvisible(!isVisible)
  setIsClosed(!isClosed)
  setFaClosed(!faClosed)
  
}

return ( 
  <div className="App">
    <header className="App-header">

  {  isEditorVisble && (
  <Editor text={text} 
  handleChange={handleChange}  
  search={
    faClosed ? 
    (<FontAwesomeIcon icon= {faTimes} onClick={visible} />
    ) : (
    <FontAwesomeIcon icon= {faPlus} onClick={visible}/>)}
  isClosed={isClosed}/> )}

{ isVisible && (
      <Preview preview={preview}  
      search={
        faClosed ? 
        (<FontAwesomeIcon icon= {faTimes} onClick={editorVisble} />
        ) : (
        <FontAwesomeIcon icon= {faPlus} onClick={editorVisble}/>)}
      isClosed={isClosed}/> )}
      
  
    </header>
  </div>
);

}

export default App;
