import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/Reminder';
import ReminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]); //initiate state with empty array of type Reminder
  const[error, setError]= useState<string>(''); 
  
  useEffect(() => {loadReminders(); }, []); //LoadReminders function will be called only once
  
  const loadReminders = async () => {
    try {
      const data = await ReminderService.getReminders(); //fetching data from API
      if (!data || data.length === 0) {
        setError('No data found'); //if data is empty, alert the user
        return; //if data is empty, return
      } 
      setReminders(data); //set the state with the data from the API
      setError(''); //set error to empty
    } catch(error){ 
      setError('Fail to load reminders, please try again later'); //if error, alert the user
    }   
  }

  return (
    <div className="App">
      <h1>Reminder Apps</h1>
      <ReminderList items={reminders}/>
      {error && <h2>{error}</h2>}
    </div>
  );
}

export default App;
