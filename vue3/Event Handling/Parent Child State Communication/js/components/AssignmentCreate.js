export default {

    template: `

        <form @submit.prevent="add">

            <div class="mt-4 border text-black">
                <input v-model="newAssignment" type="text" placeholder="add assignment..." class="p-2">
                <button class="bg-white p-2 border-l">Add</button>
            </div>

        </form>
    
    
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            if (this.newAssignment != "") {

                this.$emit('add', this.newAssignment)
                this.newAssignment = ""
            }
        }
    }

}