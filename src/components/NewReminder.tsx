import React from 'react';

interface NewReminderProps {  
    onAddReminder: (title: string) => void;
  }

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = React.useState<string>('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.length < 5) {
            alert('Reminder must be at least 5 characters long, try again!');
            setTitle('');
            return;
        }

        onAddReminder(title);
        setTitle('');
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