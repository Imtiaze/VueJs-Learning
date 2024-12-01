import AssignmentList from "./AssignmentList.js";

export default {
    
    components: { AssignmentList },
    
    template: `

        <AssignmentList :assignments="unCompletedTask" title="Completed Task"></AssignmentList>
        <AssignmentList :assignments="completedTask" title="Uncompleted Task"></AssignmentList>
        
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