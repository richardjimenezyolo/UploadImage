# UploadImage

This is a plugin to make it easy upload images to [EditorJS](https://editorjs.io/).

First to use this plugin you need to just these simples html tags:

```html
<!-- This is just a dependency for this plugin -->
<script src="https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest"></script>

<!-- this is a form which will load and send the actual image -->
<form id="img-form">
		<input type="file" name="img" id="img-input" style="display: none;">
</form>
```

Now what's left to do is to configure this pluging to your need:

```js
const editor = new EditorJS({
    tools: {
        image: SimpleImage,

        upload: {
            class: UploadImage,
            config: {
                server: "http://yoursite.com/upload" // Here you can write your backend's url
            }
        }
    }
})
```
