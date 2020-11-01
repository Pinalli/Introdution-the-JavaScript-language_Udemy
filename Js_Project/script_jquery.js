$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
     });

     $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
});
    $('#l4').click(function(){
       $('#i1').hide();
       $('#i2').hide();
       $('#i3').hide();
       $('#i4').show();

    });
});

/* $(function(){
    $('button').click(function(){
        $('h1').hide();
     });
}); 

$(function(){
    $('button').click(function(){
        $('h1').css("color","red");
     });
});  

$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
     });

     $('#vermelho').click(function(){
        $('p').css("background-color","red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color','red');
        $('#mensagem').css('border','1px solid red');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    });  
});  

$('#vermelho').click(function(){
    $('p').css("background-color","red");
    $('#mensagem')
    .text("Cor alterada com sucesso")
    .css({color:'red', border:'1px solid red'}) /*mais de um CSS
    .delay(3000)
    .addClass('green')
   
   $('button').removeClass('red'); /*remove a class
    });  
}); 
 */