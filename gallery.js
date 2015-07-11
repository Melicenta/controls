$(function gallery() {

    var $ = jQuery;

    var prevContainer = $('.preview-container'),
            storage = $('.storage-container'),
            code, src, i, image, id;

    /* it takes images from storage, converts them to array of html objects and */
    /* appends 3 or 5 of them to preview container as a preview small images */

    var collection = storage.find('img').clone().toArray();
    var collectionCopy = collection.slice();
    var srcCollection = [];

    $(collectionCopy).each(function() {
        src = $(this).attr('src');
        srcCollection.push(src);
        return srcCollection;
    });

    var arr = [],
            prevCollectionMax,
            prevCollectionMin;

    if (collectionCopy.length >= 10) {
        prevCollectionMax = collectionCopy.slice(0, 5);
        arr.push(prevCollectionMax);

    } else {
        prevCollectionMin = collectionCopy.slice(0, 3);
        arr.push(prevCollectionMin);

    }

    prevContainer.empty();

    for (i = 0; i <= arr.length; i++) {
        image = arr[i];
        $(image).each(function(i) {
            $(this).attr('data-code', i);
        });
        prevContainer.append(image);
    }

    /*now I have to wrap images in links*/
    prevContainer.find('img').each(function(code) {
        code = $(this).attr('data-code');
        $(this).wrap('<a  id="img' + code + '" class = "preview-item"></a>');
    });


    /*and now let's start watching the photos*/
    $('.preview-item').bind('click', function(id, src) {
        id = $(this).attr('id');
        src = $(this).children('img').attr('src');
        var srcArray = srcCollection;
        openWindow(id, src, srcArray);
    });

});
