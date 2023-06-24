import './App.css'

function Preview({preview, times, search}){
    return (
     <div id='preview-wrap'>
<div id='preview-header' >
    <div >Preview</div>
 <div className='times-search'>{search}</div></div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: preview }}>
            
        </div>
       </div>);
    }

    export default Preview