### SimpleMDE with image upload.

![ScreenShot](https://raw.githubusercontent.com/bedus-creation/SimpleMDE/master/docs/img/image-01.png)

### Installation
```
npm i simplemde-vue --save
```

### Example
```vue
<template>
  <editor imageUploadUrl="/admin/upload/image" @ImageUploadSuccess="ImageUploadSuccess"></editor>
</template>
<script>
import Editor from "simplemde-vue";
export default {
  components: { Editor },
  methods: {
    ImageUploadSuccess: function(simplemde, response) {
      simplemde.codemirror.replaceSelection(
        "![Image Text](" + response.data + ")"
      );
    }
  }
};
</script>
```