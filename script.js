$(document).ready(function (){
    $('header button').click(function() {
        $('form').slideDown();
    })
})

$('#btn-cancelar').click(function() {
    $('form').slideUp();
})

$('form').submit(function(e) {
    e.preventDefault();
    const enderecoImg = $('#url-img').val();
    
    const novoItem = $(`<li style="display: none"></li>`);
    $(`<img src="${enderecoImg}" />`).appendTo(novoItem);

    $(`<div class="overlay-img-link">
        <a href = "${enderecoImg}" target= "_blank"> title = "Ver imagem em tamanho real"
            Ver Imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#url-img').val('');
})

