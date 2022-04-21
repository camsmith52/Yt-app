import React, { useState } from "react";



const SearchBar = ({onTermSubmit}) => {

const [text, setText] = useState('')

const onInputChange =e=> setText(e.target.value)

 const onFormSubmit = event => {
        event.preventDefault()  //prevents the browser from reloading the page
        onTermSubmit(text)          //calling the function onTermSubmit that was passed down from the App component as a prop and passing in the state from SearchBar (i.e this component)
    }
  return (
        <div className="ui segment searchbar">
            <form onSubmit={onFormSubmit} className="ui form"> {/*when this form is submitted, the function onformSubmit in this class will run */}
                <div className="field">
                    <label>
                        Video Search
                    </label>
                    <input type="text" 
                           value={text} 
                           onChange={onInputChange} />
                </div>
            </form>
        </div>
        )
}


export default SearchBar 

