import React from 'react';
import Reminder from '../models/Reminder';


interface ReminderListProps { 
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
} //this interface defines the shape of the props that ReminderList component will receive
//if this interface does not exist, the props will be of type any, which TS will complain about

function ReminderList({ items, onRemoveReminder}: ReminderListProps) { //props is in the type of ReminderListProps
    return (
        <ul className='list-group'> 
            {items.map((item)=> 
                <li className='list-group-item' key={item.id}>
                    {item.title} 
                    <div style={{float: 'right' }}> 
                        <button 
                            onClick={() => onRemoveReminder(item.id)} 
                            className='btn btn-outline-danger rounded-pill mx-2'
                        >
                            Delete
                        </button>

                        <button className='btn btn-outline-warning rounded-pill mx-2'>Edit</button>
                        
                    </div>
                    
                </li>
            )}     
        </ul>
    );
}

export default ReminderList;