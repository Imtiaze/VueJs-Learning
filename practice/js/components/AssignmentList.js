import Assignment from "./Assignment.js"

export default {

    components: { Assignment },

    template: `
    
        <section v-if="assignments.length">
            <h2 class="mb-2 font-bold">{{ title }}</h2>

            <ul>
                <Assignment 
                    v-for="item in assignments" 
                    :key="item.id" 
                    :item="item">
                </Assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Object,
        title: {
            type: String,
            default: 'Task',
        }
    }
}