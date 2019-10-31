"use strict";


// PART 1: SHOW A FORTUNE

$('#get-fortune-button').on('click', (evt) => {
    // evt.preventDefault(); //is this needed? just a button

    $.get('/fortune', (res) => {
        $('#fortune-text').html(res);
    });
});


// PART 2: SHOW WEATHER

$('#weather-form').on('submit', (evt) => {
    evt.preventDefault(); // prevent form from submitting

    const formData = {'zipcode' : $('#zipcode-field').val()};

    $.get('/weather.json', formData, (res) => {
        $('#weather-info').html(res.forecast);
    });
});



// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);

$('#order-form').on('submit', (evt) => {
    evt.preventDefault();

    const formData = $('#order-form').serialize();

    $.post('/order-melons.json', formData, (res) => {
        $('#order-status').html(res.msg);
        if (res.code === 'ERROR') {
            $('#order-status').addClass('order-error');
        };
        // $('#order-status').addClass(res.code);
    });
});


