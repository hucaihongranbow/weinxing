$(function(){ 
$(".container").click(function(){
	refresh();
}) 

$(".dot").click(function(){
	refresh();
}) 
});
function refresh(){
    window.location.reload();
    }