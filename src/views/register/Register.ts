import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Register extends Vue {
    public count: number = 10;

    public mounted() {
        this.add();
    }

    public add = () => {
        setInterval(() => {
            this.count++;
        }, 1000);
    }
}
