export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-200 hover:bg-blue-400': color === 'primary',
                'bg-purple-200 hover:bg-purpble-400': color === 'secondary',
                'bg-gray-200 hover:bg-gray-400': color === 'muted',
                'is-loading': processing
            }"  
            :disabled="processing"
        >
            <slot/>
        </button>
    `,
    
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            
        }
    }, 

    mounted() {
        // alert('hi');
    }
}