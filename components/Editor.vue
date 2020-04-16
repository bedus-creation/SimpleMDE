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
    <textarea id="_editor" :name="name"></textarea>
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
    imageUploadUrl: {},
    name: {
      type: String,
      default: "_name"
    }
  },
  mixins: [FileUpload]
};
</script>