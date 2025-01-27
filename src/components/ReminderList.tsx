import React from 'react';
import { Reminder } from '../models/Reminder';

interface ReminderListProps { 
    items: Reminder[];
}


function ReminderList({ items }: ReminderListProps) { //props is in the type of ReminderListProps
    return (
        <ul>
            {items.map((item)=> 
                <li key={item.id}>{item.title + ': '  + item.completed} </li>
            )}     
        </ul>
    );
}

export default ReminderList;