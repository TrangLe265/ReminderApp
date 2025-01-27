import React from 'react';
import { Reminder } from '../models/Reminder';

interface ReminderListProps { 
    items: Reminder[];
}


function ReminderList({ items }: ReminderListProps) { //props is in the type of ReminderListProps
    return (
        <ul className='list-group'> 
            {items.map((item)=> 
                <li className='list-group-item' key={item.id}>
                    {item.title} 
                    <div style={{float: 'right' }}> 
                        <button className='btn btn-outline-danger' style={{marginRight: '10px'}}>Delete</button>
                        <button className='btn btn-outline-warning' style={{float: 'right'}}>Edit</button>
                    </div>
                   
                </li>
            )}     
        </ul>
    );
}

export default ReminderList;