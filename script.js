$(document).ready(function () {

    const $body = $('body');

    // CLARO / OSCURO
    const $lightBtn = $('#light-theme');
    const $darkBtn = $('#dark-theme');

    const savedTheme = localStorage.getItem('theme') || 'light';
    $body.attr('data-theme', savedTheme);

    // Modo claro
    $lightBtn.on('click', function () {
        $body.attr('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    });

    // Modo oscuro
    $darkBtn.on('click', function () {
        $body.attr('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });


    // CAMBIO DE TIPOGRAFÍA
    const $toggleFontBtn = $('#toggle-font');

    const savedFont = localStorage.getItem('font') || 'default';
    $body.attr('data-font', savedFont);

    $toggleFontBtn.on('click', function() {
        const currentFont = $body.attr('data-font');
        const newFont = currentFont === 'default' ? 'alt' : 'default';

        $body.attr('data-font', newFont);
        localStorage.setItem('font', newFont);
    });


    // CAMBIO DE TAMAÑO DE LETRA

    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 20;
    const DEFAULT_FONT_SIZE = 16;

    const $btnIncrease = $('#font-increase');
    const $btnDecrease = $('#font-decrease');


    let savedFontSize = parseInt(localStorage.getItem('fontSize')) || DEFAULT_FONT_SIZE;
    $body.css("font-size", savedFontSize + "px");

    // Aumentar letra
    $btnIncrease.on('click', function () {
        let currentSize = parseInt($body.css("font-size"));
        if (currentSize < MAX_FONT_SIZE) {
            currentSize++;
            $body.css("font-size", currentSize + "px");
            localStorage.setItem("fontSize", currentSize);
        }
    });

    // Disminuir letra
    $btnDecrease.on('click', function () {
        let currentSize = parseInt($body.css("font-size"));
        if (currentSize > MIN_FONT_SIZE) {
            currentSize--;
            $body.css("font-size", currentSize + "px");
            localStorage.setItem("fontSize", currentSize);
        }
    });



    // VALIDACIÓN DEL FORMULARIO
    $('#contact-form').validate({
        rules: {
            name: { required: true, minlength: 2 },
            lastName: { required: true, minlength: 2 },
            email: { required: true, email: true },
            messaje: { required: true, minlength: 10 }
        },

        messages: {
            name: {
                required: "Por favor ingresa tu nombre",
                minlength: "Debe tener al menos 2 caracteres"
            },
            lastName: {
                required: "Por favor ingresa tu apellido",
                minlength: "Debe tener al menos 2 caracteres"
            },
            email: {
                required: "Por favor ingresa tu correo electrónico",
                email: "Formato de correo inválido"
            },
            messaje: {
                required: "Escribe un mensaje",
                minlength: "Debe tener al menos 10 caracteres"
            }
        },

        submitHandler: function (form) {
            $('#success-message').fadeIn();
            
            $(form)[0].reset();
            
            $(form).find('button[type="submit"]').prop('disabled', true);

            console.log("Formulario enviado exitosamente (simulación).");

            return false;
        }
    });

});
