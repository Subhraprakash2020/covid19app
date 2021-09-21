$('#search').on('click', function() {
    console.log("Inside the search");
    $('.all-data').html('')


    console.log('data::', $('#scountry').val());


    var url = 'https://corona.lmao.ninja/v2/countries/' + $('#scountry').val() + ''
    $.ajax({
        type: 'GET',
        url: url,
        data: {},
        success: function(data, status, shr) {
            $(data).each(function(key, val) {
                console.log('key,val', key, val)
                $('.all-data').append('<div class="inside">,<div class="con">' + 'Country ::' + val.country + '</div>,<div class="subin" style="    background-color: aqua;">' + 'Active ::' + val.active + '</div>,<div class="subin" style="background-color: yellow">' + 'Cases ::' + val.cases + '</div>,<div class="subin" style="background-color:rgb(115, 65, 161)">' + 'Critical ::' + val.critical + '</div>,<div class="subin2" style="background-color: green">' + 'Recovered ::' + val.recovered + '</div>,<div class="subin2" style="background-color: red">' + 'Deaths ::' + val.deaths + '</div>,<div class="subin2" style="background-color: rgb(201, 145, 24)">' + 'Tests ::' + val.tests + '</div></div>')

            })

        }
    })


})

$('.bar').click(function() {
    console.log("inside click")
    $('.drop').toggle();
})