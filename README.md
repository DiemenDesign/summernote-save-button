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

Finally, customize the Summernote Toolbar:

```javascript
            var sn.unsaved=false;
            $(window).bind('beforeunload',function(){
                if(sn.unsaved){
                    return "You have unsaved changes in the Editor. Do you want to leave this page and discard your changes or stay on this page?";
                }
            });
            $('.summernote').summernote({
                height:<?php if($view=='bookings'||$view=='preferences')echo'100';else echo'500';?>,
                tabsize:2,
                toolbar:[
                    ['save',['save']],
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
