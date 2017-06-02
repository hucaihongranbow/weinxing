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

window.onload=function(){
	var lis=document.getElementsByClassName("lis")	
	var imgArry1=["images/gnico_01_1.png","images/gnico_02_1.png","images/gnico_03_1.png","images/gnico_04_1.png","images/gnico_05_1.png","images/gnico_06_1.png","images/gnico_07_1.png","images/gnico_08_1.png","images/gnico_09_1.png","images/gnico_10_1.png","images/gnico_11_1.png","images/gnico_12_1.png"];		
    var imgArry2=["images/gnico_01.png","images/gnico_02.png","images/gnico_03.png","images/gnico_04.png","images/gnico_05.png","images/gnico_06.png","images/gnico_07.png","images/gnico_08.png","images/gnico_09.png","images/gnico_10.png","images/gnico_11.png","images/gnico_12.png"];		
      
    	    for (var i=0;i<lis.length;i++) {
    	    	lis[i].index=i;
    	    	lis[i].onmouseover=function(){
    	    this.children[0].src=imgArry1[this.index];
        }
    	    	
    	    	lis[i].onmouseout=function(){
    	    this.children[0].src=imgArry2[this.index];
        }
    }
    
}
