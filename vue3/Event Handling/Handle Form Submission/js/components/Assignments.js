import AssignmentList from "./AssignmentList.js"

export default {

    components: { AssignmentList },

    template: `
        <AssignmentList :assignments="inProgressTask" title="In Progress"></AssignmentList>

        <AssignmentList :assignments="completedTask" title="completed"></AssignmentList>

        <form @submit.prevent="add">

            <div class="mt-4 border text-black">
                <input v-model="newAssignment" type="text" placeholder="add assignment..." class="p-2">
                <button class="bg-white p-2 border-l">Add</button>
            </div>

        </form>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish Homework', 'completed': false},
                {id: 2, name: 'Read chapter 4', 'completed': false},
                {id: 3, name: 'Turn in home', 'completed': false},
            ],
            newAssignment: '',
        }
    },

    computed: {
        inProgressTask() {
            return this.assignments.filter(assignment => ! assignment.completed)
        },
        completedTask() {
            return this.assignments.filter(assignment => assignment.completed)
        }
    },

    methods: {
        add() {
            this.assignments.push({
                id: this.assignments.length + 1, 
                name: this.newAssignment, 
                completed: false
            });

            this.newAssignment = ''
        }
    }
}