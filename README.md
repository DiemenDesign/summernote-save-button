# summernote-save-button
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Toolbar, that allows saving edited content when Summernote is placed within a Form.

### Installation

#### 1. Include JS

Include the following code after Summernote:

```html
<script src="summernote-save-button.js"></script>
```

#### 2. Supported languages

Currently available in English!

#### 3. Summernote options

This is the HTML directly in the page:
```html
<form id="summernote" method="post" target="sp" action="[processing server side script]">
 <input type="hidden" name="id" value="[database entry id or reference]">
// the name "id" and value is what I use to reference the article or content reference
 <input type="hidden" name="t" value="content">
// the "t" (table) and value is the name of the database table
 <input type="hidden" name="c" value="notes">
// the "c" (column) and value is the name of the column in the database table
 <textarea id="notes" class="form-control summernote" name="da" readonly>[content data to be edited]</textarea>
// the "da" holds the content data from the editor to be maniupulated
</form>
```

Finally, customize the Summernote Toolbar, this can be used directly in your page:
```javascript
var unsaved=false;
$(window).bind('beforeunload',function(){
    if(unsaved){
        return "You have unsaved changes in the Editor. Do you want to leave this page and discard your changes or stay on this page?";
    }
});
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
