/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import Reminder from "../models/Reminder";

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
            if (response.status !== 201){
                throw new Error(`Failed to add new reminders! Status code: ${response.status}`)
            }
            return response.data; 
        } catch(error){
            console.error(error);
            throw new Error('Failed to add new reminders!'); 
        }
    }

    async removeReminder(id: number) {
        try{
            const response = await this.http.delete('/todos/' + id);
            if (response.status !== 200){
                throw new Error('Delete fails'); 
            }
            return response.status; 

        } catch(error){
            console.error(error);
            throw new Error('Fail to delete reminder!'); 

        }
    }
}

export default new ReminderService(); //TS will complain, but it is not wrong
