import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Login extends Vue {
    public count: number = 0;

    public add = () => {
        setInterval(() => {
            this.count++;
        }, 1000);
    }
}
