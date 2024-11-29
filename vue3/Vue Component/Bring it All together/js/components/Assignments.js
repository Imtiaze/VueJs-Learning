import AssignmentList from "./AssignmentList.js"

export default {

    components: { AssignmentList },

    template: `
        <AssignmentList :assignments="inProgressTask" title="In Progress"></AssignmentList>

        <AssignmentList :assignments="completedTask" title="completed"></AssignmentList>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish Homework', 'completed': false},
                {id: 2, name: 'Read chapter 4', 'completed': false},
                {id: 3, name: 'Turn in home', 'completed': false},
            ]
        }
    },

    computed: {
        inProgressTask() {
            return this.assignments.filter(assignment => ! assignment.completed)
        },
        completedTask() {
            return this.assignments.filter(assignment => assignment.completed)
        }
    }
}