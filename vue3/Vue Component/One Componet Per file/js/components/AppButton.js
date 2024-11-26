export default {
    template: `
        <button class="bg-blue-200 border rounded px-5 py-2 disabled:cursor-not-allowed"  :disabled="processing"><slot/></button>
    `,
    

    data() {
        return {
            processing: true
        }
    }, 

    mounted() {
        // alert('hi');
    }
}