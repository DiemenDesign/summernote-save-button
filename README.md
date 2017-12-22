# summernote-save-button
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Toolbar, that allows saving edited content when Summernote is placed within a Form.
Includes option to encode data (it's up to you to decode the data server side).

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
<!-- This is the hidden iframe using Bootstrap's ".hidden" class to hide the iframe. -->
```

Finally, customize the Summernote Toolbar, this can be used directly in your page:
```javascript
$('.summernote').summernote({
    tabsize: 2,
    toolbar: [
        ['save', ['save']], // The button
    ],
    save:{
        encode: false // true = encode editor data.
    }
});
```

#### 4. Check out our other Summernote Plugins via our main Github page.
- [Diemen Design](https://github.com/DiemenDesign/)
