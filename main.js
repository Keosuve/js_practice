$(document).ready(function(){
    
    
    //Activar/ Desactivar Tab active
    $(document).on('click','#contact_tools li a',function(){
        
        $('#contact_tools li').removeClass('active');
        $(this).parent('li').addClass('active');

    });

    //Eliminar Mensaje
    $(document).on('click', '.delete', function (){
        
        var element = $(this);

        element.closest('.message-item').hide('slow',function(){ 

            $(this).remove();
            var target = $(this).data('target');
            var message_list = '#message-list-' + target;
            var empty_message = '#empty_messages_container_' + target;
            var count = $(message_list + ' .message-item').length;

            if (count == 0) {
                $(message_list).addClass('hidden');
                $(empty_message).removeClass('hidden');
            }

        });

    });

    //Añadir emoji a texto textarea
    $(document).on('click', '.emoji',function () {

        var old_text = $('#message').val();
        $('#message').val(old_text + $(this).text());

    });

    //Pintar borde imagen
    $(document).on('click', '.avatar-contact', function () {

        $('.avatar-contact').removeClass('active');
        $(this).addClass('active');

    }); 

    //Crear contacto
    $(document).on('click', '#add_contant_button', function () {

        var name = $('#name').val();
        var lastname = $('#lastname').val();
        var avatar = $('.avatar-contact.active').attr('src');
        var correct = true;
        
        if(name == ""){
            $('#name_error').removeClass('hidden');
            correct = false;
        }

        if (lastname == "") {
            $('#lastname_error').removeClass('hidden');
        }

        if(avatar == undefined){
            $('#avatar_error').removeClass('hidden');
        }

        if(correct == true)
        //funcion que va a crear el contacto

    });

    //Remover error
    $(document).on('click', '.validate', function () {
        $(this).parents('.form-group').children('.error').addClass('hidden');
    });

});