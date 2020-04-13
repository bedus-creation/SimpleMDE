<template>
  <div>
    <input
      id="_fileInput"
      type="file"
      ref="files"
      accept="image/*"
      style="display:none"
      v-on:change="handleFilesUpload()"
    />
    <textarea id="_editor"></textarea>
  </div>
</template>
<script>
import SimpleMDE from "simplemde";
import { FileUpload } from "../mixins/Fileupload";
import detaultToolbar from "../config/toolbar";
import axios from "axios";
export default {
  props: {
    toolbar: {
      default: function() {
        return detaultToolbar;
      }
    },
    imageUploadUrl: {}
  },
  mixins: [FileUpload]
};
</script>