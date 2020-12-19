import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };
    return (
        <form ref ={formRef} className="add-form" onSubmit = {onSubmit}>
            <input 
            ref={this.inputRef}
            type="text" 
            className="add-input" 
            placeholder="Please enter your Habit"/>
            <button className="add-button">Add</button>
        </form>
    );     
});

export default HabitAddForm;
