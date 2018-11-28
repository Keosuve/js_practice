$(document).ready(function(){
    
    //Activar/ Desactivar Tab active
    $(document).on('click','#contact_tools li a',function(){
        
        $('#contact_tools li').removeClass('active');
        $(this).parent('li').addClass('active');

    });

    //Eliminar Mensaje
    $(document).on('click', '.delete', function () {
        
        var element = $(this);

        element.closest('.message-item').hide('slow',function(){ 

            $(this).remove();
            var target = $(this).data('target');
            var message_list = '#message-list-' + target;
            var empty_message = '#empty_messages_container_' + target;
            var count = $(message_list + ' .message-item').length;

            if (count == 0) {
                $(message_list).removeClass('hidden').addClass('hidden');
                $(empty_message).removeClass('hidden');
            }

        });

        
        
    });

    //Añadir emoji a texto textarea
    $(document).on('click', '.emoji',function () {

        var old_text = $('#message').val();
        $('#message').val(old_text + $(this).text());

    });

});