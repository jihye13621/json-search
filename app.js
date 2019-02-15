
const jsonFile = 'sample-json/0748Dhahabi.TarikhIslam.JK007088-ara1.descScheme.json';

$(document).ready(function() {
    if (jsonFile === 'sample-json/0748Dhahabi.TarikhIslam.JK007088-ara1.descScheme.json') {
        $.getJSON(jsonFile, function(jsonData, count) { 
            // console.log(jsonData);
            if (jsonData.length) {
                // console.log(Object.keys(jsonData)[0]);
                // console.log(jsonData[0]);
                // console.log(jsonData[0]['اللخمي']['COMMENT']);
                // console.log(jsonData[0]['التميمي']['TRANSLIT']);
                jsonData = jsonData[0];
                let tableBuilder = '';
                let num = 0;
                $.each(jsonData, function(info, count) {
                    num = num + 1;
                    // console.log(count);
                    // console.log(info);
                    tableBuilder += `<tr>
                    <th scope="row">${num}</th>
                    <th>${info}</th>
                    <td>${(count.CLASSIFIERS).toString()}</td>
                    <td>${count.COMMENT}</td>
                    <td>${count.ITEM}</td>
                    <td>${count.KW}</td>
                    <td>${count.TOP_URI}</td>
                    <td>${count.TRANSLIT}</td>
                    <td>${count.TYPE}</td>
                    <td>${count.URI}</td>
                  </tr>`;
                });
                $('#js-bios').html(tableBuilder);
                searchBios();
            }
        });
    }
});

function searchBios() {
    let searchTermBios;
    const $bioSearch = $('.bio-search');
    $bioSearch.on('keyup', function(){
        searchTermBios = $(this).val().toLowerCase();
        $('#js-bios tr').each(function(index, elem){
            const filter = $('.bio-search').val().toUpperCase();
            const $elem = $(this);
            const text = $elem.text().toUpperCase();
            if (text.indexOf(filter) > -1) {
                $elem.show();
            } else {
                $elem.hide();
            }
        });
    }); 
}