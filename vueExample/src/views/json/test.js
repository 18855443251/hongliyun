import Vue from "vue";
export let a = '123'
export let b = a?`${a+123}`:''
export let text = ((a)=>{
    return 456
});
export let obj = {
    c: 'hly',
    add:function (params) {
        
    }

}
Vue.prototype.$tableList = (()=>{
    return 12345
})