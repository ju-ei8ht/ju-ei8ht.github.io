$(function(){
    let currentTag = "";
    const queryTag = getQuery().tag;
    if(queryTag){
        currentTag = queryTag;
        filterByName(currentTag)
    }
    function getQuery(){
        let query = {};

        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
            function(str, key, value) { 
                query[key] = value; 
            }
        );     
        
        return query;
    }


    // $("[data-tag]").click((e) => {
    //     currentTag = e.target.dataset.tag;
    //     filterByName(currentTag);
    // });
    $('.tag').click(function(){
        let currentTag = $(this).attr('data-tag');
        filterByName(currentTag);
    });

    function filterByName(tagName){
        $('.hidden').removeClass('hidden');
        $('.post').each((index, elem) => {
            if (!elem.hasAttribute(`data-${tagName}`)){
                $(elem).addClass('hidden');
            }
        });
        $('.tag').removeClass('selected');
        $(`.tag[data-tag=${tagName}]`).addClass('selected');
    }
});