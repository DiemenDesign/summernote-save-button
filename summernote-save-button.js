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
                    contents:'<i class="fa fa-save text-danger"/>',
                    tooltip:'Save',
                    click:function(){
                        $("#block").css({display:"block"});
                        sn.unsaved=false;
                        this.form.submit();
                    }
                });
                return button.render();
            });
            this.events={
                'summernote.change':function(we,e){
                    sn.unsaved=true;
                }
            };
        }
    });
}));
