import Assignment from "./Assignment.js"

export default {

    components: { Assignment },
    
    template: `
        <section v-show="assignments.length">
            <h2 class="mb-2 font-bold">{{ title }}</h2>
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment
                    v-for="assignment in assignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: {
            type: Array,
            default: []
        },
        title: String
    }
}