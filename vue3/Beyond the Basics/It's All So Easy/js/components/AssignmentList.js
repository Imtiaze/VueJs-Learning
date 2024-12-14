import Assignment from "./Assignment.js"

export default {

    components: { Assignment },
    
    template: `
        <section v-show="assignments.length">
            <h2 class="mb-2 font-bold">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-2 py-1 text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }"
                >{{ tag }}</button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments" 
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
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {

        filteredAssignments() {

            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set( this.assignments.map(assignment => assignment.tag))]
        }
    }
}