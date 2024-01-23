const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            tasks:[
                { id: 1, done: false, text: 'Fare la spesa' },
                { id: 2, done: true, text: 'Lavare i capelli' },
                { id: 3, done: false, text: 'Comprare una marca da bollo' },
                { id: 4, done: false, text: 'Aggiornare il PC' }
              ],
            newTask: '',
        }
    },
    methods:{
        deleteTask(id){
            this.tasks = this.tasks.filter(task => id !== task.id)
        }
    }
})

app.mount('#root')