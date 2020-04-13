import Editor from './components/Editor'
export default {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {
        Vue.component('editor', Editor)
    }
};

export { Editor }