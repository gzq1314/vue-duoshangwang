import Vue from 'vue'
//第三方组件
import {
    Form, //表单
    FormItem,
    Row,
    Input,
    Button,
    Message,
    Notification
} from 'element-ui'

export default () => {
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Row);
    Vue.use(Input);
    Vue.use(Button);
    Vue.prototype.$message = Message;
    Vue.prototype.$notify = Notification
}