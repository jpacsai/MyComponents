/*
Search input form - icon (magnifying lens or X)
*/

$input.keyup(function () {
    if ($input.val().length === 1 && $icon.attr('src') == "https://i.imgur.com/1lnRvZm.png") {  
        $icon.fadeOut('fast',function () {
            $icon.attr('src','https://i.imgur.com/5skiAlK.png');
        });     
        $icon.fadeIn('fast');
    }
    if ($input.val().length === 0 && $icon.attr('src') == "https://i.imgur.com/5skiAlK.png") { 
        $icon.fadeOut('fast',function () {
            $icon.attr('src','https://i.imgur.com/1lnRvZm.png');
        });     
        $icon.fadeIn('fast');
}