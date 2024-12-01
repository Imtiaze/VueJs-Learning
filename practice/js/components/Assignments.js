export default {
    template: `
        <section v-if="unCompletedTask.length">
            <h2 class="mb-2 font-bold">Uncompleted Assignments</h2>

            <ul>
                <li 
                    v-for="item in unCompletedTask" :key="item.id"> 
                    <label>    
                        {{ item.title }} 
                        <input type="checkbox" v-model="item.completed">
                    </label>
                </li>
            </ul>
        </section>

        <section class="mt-2" v-if="completedTask.length">
            <h2 class="mb-2 font-bold">Completed Assignments</h2>

            <ul>
                <li 
                    v-for="item in completedTask" :key="item.id"> 
                    
                    <label>
                        {{ item.title }} 
                        <input type="checkbox" v-model="item.completed">
                    </label>
                    
                </li>
            </ul>
        </section>
        `,   

        data() {
            return {
                assignments: [
                    {id: 1, title: 'doing homework 1', completed: false},
                    {id: 2, title: 'doing homework 2', completed: false},
                    {id: 3, title: 'doing homework 3', completed: false}
                ]
            }
        },
            
        computed: {
            unCompletedTask() {
                return this.assignments.filter(assignment => ! assignment.completed)
            },
            completedTask() {
                return this.assignments.filter(assignment => assignment.completed);
            }
        }
        
}