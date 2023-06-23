import './App.css'


function Editor({text, handleChange}){
    return(
        <div className='editor-wrap'>
      <div className='editor-header'>Editor</div>
      <textarea id='editor' onChange={handleChange}>
        {text}
      </textarea> 
    </div>
    ) 
}

export default Editor