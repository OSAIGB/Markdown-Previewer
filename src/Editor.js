import './App.css'


function Editor({text, handleChange, times, search, isClosed}){
    return(
        <div className='editor-wrap'>
      <div className='editor-header'>
        <div className='editor-text'>Editor </div> 
        <div className='times-search'>
          <span className='times'>{times}</span> {search}
          </div></div>

      <textarea id='editor' onChange={handleChange} className={`editor ${isClosed ? 'closed' : ''}`}>
        {text}
      </textarea> 
    </div>
    ) 
}

export default Editor