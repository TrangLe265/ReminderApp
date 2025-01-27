import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/Reminder';
import ReminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]); //initiate state with empty array of type Reminder
  
  useEffect(() => {loadReminders(); }, []); //set the state with the data from the API  })
  
  const loadReminders = async () => {
    const data = await ReminderService.getReminders(); //fetching data from API
    setReminders(data); //set the state with the data from the API
  }
  return (
    <div className="App">
      <h1>Reminder Apps</h1>
      <button className='btn btn-primary'>Click me</button>
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
