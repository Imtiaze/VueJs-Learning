import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {

    components: { AssignmentList, AssignmentCreate },

    template: `
        <AssignmentList :assignments="inProgressTask" title="In Progress"></AssignmentList>

        <AssignmentList :assignments="completedTask" title="completed"></AssignmentList>

        <AssignmentCreate @add="add"></AssignmentCreate>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish Homework', 'completed': false, tag: 'math'},
                {id: 2, name: 'Read chapter 4', 'completed': false, tag: 'science'},
                {id: 3, name: 'Turn in home', 'completed': false, tag: 'math'},
            ],
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
        
        add(name) {

            this.assignments.push({
                id: this.assignments.length,
                name: name,
                completed: false,
                tag: 'Social'
            });

        }
    }
}