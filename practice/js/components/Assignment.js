export default {
    template: `

        <li> 
            <label>    
                {{ item.title }} 
                <input type="checkbox" v-model="item.completed">
            </label>
        </li>

    `,

    props: {
        item: {
            type: Object
        }
    }
}