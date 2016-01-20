$(function(){
    var myApp = new Framework7();

    var $$ = Dom7;

    var mainView = myApp.addView('.view-main', {
        dynamicNavbar: true
    });
    
    // Login
    
    $('form[name=form-login]').submit(function(){
        $.ajax({
            type: 'POST',
            url: 'http://localhost/XDK/loginApp/login.php',
            dataType: 'json',
            data: $(this).serialize(),
            beforeSend: function(){
                myApp.showIndicator();
            },
            success: function(data){
                myApp.hideIndicator();
                console.log(data);
                
                if(data.status == 'sim'){
                    activate_subpage('#dashboard');
                    localStorage.setItem('email',data.dados[0].email);
                    local = localStorage.getItem('email');
                    
                    $('.btn-exibir').on('click', function(){
                        $('.exibir').html(local); 
                    });
                }else if(data.status == 'nao'){
                    alert('nao logou');
                }
            }
        });
        return false;
    });
    
    
    
    // Listar
    
    function listarUser(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost/XDK/loginApp/listar.php',
            dataType: 'html',
            data: 'listar=usuarios',
            beforeSend: function(){
                myApp.showIndicator();
            },
            success: function(data){
                myApp.hideIndicator();
                $('.users').html(data);
                
            }
        })
    }
    listarUser();
    var email;
    var nome;
    var id;
    $(document).on('click', '.abrir', function(){
         email = $(this).attr('data-email');
         nome  = $(this).attr('data-nome');
         id    = $(this).attr('data-id');
        $('#nome').val(nome);
        $('#email').val(email);
        
        $('form[name=alterar]').submit(function(){
            var um = $('#nome').val();
            var dois = $('#email').val();
            
           $.ajax({
               type: 'GET',
               url: 'http://localhost/XDK/loginApp/listar.php',
               dataType: 'html',
               data: 'listar=editar&email='+dois+'&nome='+um+'&id='+id,
               beforeSend: function(){
                   myApp.showIndicator();
               },
               success: function(data){
                   myApp.hideIndicator();
                   $('.result').html(data);
                   listarUser();
               }
           });
            
            return false;
        });
    });
    
        


});