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
import toolbar from "../config/toolbar";
import axios from "axios";
export default {
  props: { toolbar: { default: toolbar }, imageUploadUrl: {} },
  mixins: [FileUpload]
};
</script>