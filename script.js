$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay:true
    })
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#Telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            interesseVeiculo: {
                required: false
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandle: function(evento, validador) {
            let camposIncorretos = validador.numberOfIvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos  incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#Veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})