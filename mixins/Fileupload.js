import axios from "axios";
import SimpleMDE from "simplemde";
var FileUpload = {
    data() {
        return {
            simpleMde: null,
        }
    },
    mounted() {
        this.simpleMde = new SimpleMDE({
            element: document.getElementById("_editor"),
            toolbar: this.toolbar
        });
    },
    methods: {
        ImageUpload() {
            document.getElementById('_fileInput').click();
        },
        sendToServer: async function (formData) {
            await axios.post(this.imageUploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(response => {
                this.ImageUploadSuccess(this.simpleMde, response);
            }).catch(function (error) {
                console.log(error);
            });
        },

        handleFilesUpload() {
            let formData = new FormData();
            let file = this.$refs.files.files[0];
            formData.append('image', file);
            this.sendToServer(formData);
        },
        ImageUploadSuccess(simplemde, response) {
            this.$emit('ImageUploadSuccess', simplemde, response)
        }
    }
}
export { FileUpload }