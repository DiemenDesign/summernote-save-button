(function(factory){
    if(typeof define==='function'&&define.amd){
        define(['jquery'],factory)
    }else if(typeof module==='object'&&module.exports){
        module.exports=factory(require('jquery'));
    }else{
        factory(window.jQuery)
    }
}
(function($){
    $.extend($.summernote.plugins,{
        'save':function(context){
            var self=this;
            var ui=$.summernote.ui;
            context.memo('button.save',function(){
                var button=ui.button({
                    contents:'<i id="snsave" class="fa fa-save"/>', // Change this to the Icon you wish to use.
                    tooltip:'Save',
                    click:function(){
                        document.getElementById('summernote').submit(); // Change this ID ("summernote") reference to the ID of the Form that Summernote is within.
                        $('i#snsave').removeClass('fa-lg text-danger');
                    }
                });
                return button.render();
            });
            this.events={
                'summernote.change':function(we,e){
                    $('i#snsave').addClass('fa-lg text-danger');
                }
            };
        }
    });
}));
