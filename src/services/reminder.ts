import axios from "axios";
import { Reminder } from "../models/Reminder";

class ReminderService{
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    }); 

    async getReminders() {
        try{
            const response = await this.http.get<Reminder[]>('/todos'); 
            if (response.status !== 200){
                throw new Error('Failed to fetch reminders!')
            }
            return response.data; 
        } catch(error){
            console.error(error);
            throw new Error('Failed to fetch reminders!'); 
        }
    
    }

   async newReminders(title: string) {
        try{
            const response = await this.http.post<Reminder>('/todos', {title}); //Post request require the url and {object} to perfom post 
            //Check https://axios-http.com/docs/post_example
            if (response.status !== 200){
                throw new Error('Failed to fetch reminders!')
            }
            return response.data; 
        } catch(error){
            console.error(error);
            throw new Error('Failed to fetch reminders!'); 
        }
    }

    async deleteReminder(id: number) {
        try{
            const response = await this.http.delete<Reminder>('/todos/' + id);
            if (response.status !== 200){
                return alert('Delete fails'); 
            }
            return response.data; 

        } catch(error){
            console.error(error);
            throw error; 
        }
    }
}

export default new ReminderService(); //creating new instance here so we dont have to create new instance every single time using this class
