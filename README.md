# summernote-save-button
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Toolbar, that allows saving edited content when Summernote is placed within a Form.

Now with `ctrl+s` save functionality.

### Installation

#### 1. Include JS

Include the following code after Summernote:

```html
<script src="summernote-save-button.js"></script>
```

#### 2. Supported languages

Currently available in English!

#### 3. Summernote options

This is the HTML used directly in the page:
```html
<form id="summernote" method="post" target="sp" action="[processing server side script]">
<!-- The target="sp" makes the form submit to the hidden iframe, giving an ajax, and non page reloading affect.
     action="[processing server side script]" is the script to target to process the form data. -->
 <input type="hidden" name="id" value="[database entry id or reference]">
<!-- The name "id" and value is what I use to reference the article or content reference. -->
 <input type="hidden" name="t" value="content">
<!-- The "t" (table) and value is the name of the database table. -->
 <input type="hidden" name="c" value="notes">
<!-- The "c" (column) and value is the name of the column in the database table. -->
 <textarea id="notes" class="form-control summernote" name="da" readonly>[content data to be edited]</textarea>
<!-- The "da" holds the content data from the editor to be maniupulated upon form submit. -->
</form>
<iframe id="sp" name="sp" class="hidden"></iframe>
<!-- This is the hidden frame using Bootstrap's ".hidden" class to hide the iframe. -->
```

Finally, customize the Summernote Toolbar, this can be used directly in your page:
```javascript
var unsaved=false;
$(window).bind('beforeunload',function(){
    if(unsaved){
        return "You have unsaved changes in the Editor. Do you want to leave this page and discard your changes or stay on this page?";
    }
});
// The above function is called when the page is attempted to be changed, and throws a warning if the content in the editor hasn't been saved.

$('.summernote').summernote({
    tabsize:2,
    toolbar:[
        ['save',['save']],
// this ['save',['save']] is what adds the actual button
        ['style',['style']],
        ['font',['bold','italic','underline','clear']],
        ['fontname',['fontname']],
        ['color',['color']],
        ['para',['ul','ol','paragraph']],
        ['height',['height']],
        ['table',['table']],
        ['insert',['media','link','hr']],
        ['view',['fullscreen','codeview']],
        ['help',['help']]
    ]
});
```

#### 4. Check out our other Summernote Plugins
- [Summernote Video Attributes](https://github.com/StudioJunkyard/summernote-video-attributes)
  - Insert Video's from various Streaming Services, with Options Editing.
- [Summernote Image Attributes](https://github.com/StudioJunkyard/summernote-image-attributes)
  - Add Button to Image Popup to enable editing various Image Attributes, including adding Links.
- [Summernote Cleaner](https://github.com/StudioJunkyard/summernote-cleaner)
  - Clean Pasted and Existing Markup, mainly for cleaning text from Office Document software.
- [Summernote SEO](https://github.com/StudioJunkyard/summernote-seo)
  - Adds a Dropdown to the Toolbar that allows extracting selected text and inserts it into input elements for editing.
  
