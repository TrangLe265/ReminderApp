import React from 'react';

interface NewReminderProps {  
    onAddReminder: (title: string) => void;
  }

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = React.useState<string>('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        onAddReminder(title);
    }   

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Title</label>
            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                id="title" type='text' className='form-control'
            />
            <button type='submit'className='btn btn-primary rounded-pill my-3'>Add Reminder</button>
        </form>
    );
}

export default NewReminder;