import './App.css'

function Preview({preview}){
    return (
     <div id='preview-wrap'>
<div id='preview-header'>
Preview
</div>
    
        <div id="preview" dangerouslySetInnerHTML={{ __html: preview }}></div>
       </div>);
    }

    export default Preview