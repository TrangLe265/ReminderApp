import React from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/Reminder';

const reminders: Reminder[] = [
  { id: 1, title: 'Meeting with boss', date: new Date(), status: 'active' },
  { id: 2, title: 'Buy a new laptop', date: new Date(), status: 'active' },
  { id: 3, title: 'Dentist appointment', date: new Date(), status: 'done' },
  { id: 4, title: 'Buy a book', date: new Date(), status: 'done' },
]

function App() {
  return (
    <div className="App">
      <h1>Reminder Apps</h1>
      <button className='btn btn-primary'>Click me</button>
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;
