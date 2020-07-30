
function sleep(delay)
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


	if ($('#topcmm-123flashchat-main-message-input').length) {

		 var timer = setInterval(function() { 
all();
 }, 1000);
	
	}
	
	else{
		
			sleep(10000);

}






$("#topcmm-123flashchat-main-messageview").empty();
modeAdmin="span.topcmm-123flashchat-common-chat-panel-single-box-text-area > span.topcmm-123flashchat-common-chat-panel-single-box-chat-text-color > span";
modeUser=".topcmm-123flashchat-message-content-style"
function all() {
function SW(str) { str = str.slice(0, 1); return str } 
function EW(str) { str = str.slice(-1); return str } 
var innerTB = $(modeAdmin);




var bad_words = "kos kir کس کیر کون جاکش گاو kiram bisharaf khafe khaye خفه اسکل بیشرف جنده koos کیری koni kiri koskesh jakesh kharkosde kharkose nanejende jende bokonamet mikonamet madarghabe khaharkose koso pedarsag nanejende کسننت قرمساق کسننه کسکش جاکش حرومزاده حرومی کاندوم کیرم کست کونت بی پدر بی مادر خارکس خارکسه خارکونی ننه کس کیرننه مادرسگ";
var error = 0; 
var innerTBF=innerTB.text().replace(/[^a-zA-Zا-ی\s\:]/gi, "").toLowerCase().replace(/(.)\1+/g, '$1');
innerTBF.split(/\s/).forEach(function(item){
var strg = bad_words.split(/\s/gi);
strg.forEach(itemx => {
if (!(bad_words.match(item.replace(/\s/gi, ""))===null)) {
if (item.endsWith(EW(itemx)) && item.startsWith(SW(itemx))){
error = error + 1;
var IDS = $('.topcmm-123flashchat-common-chat-panel-single-box-text-area:contains("' + itemx + '")').text();
var RES = IDS.trim().split(":")[0].trimEnd();
$('div#topcmm-123flashchat-main-messageview span:contains("' + RES + '")').click();
}
}  
});
});
if (error >0) {
/* ||-------- mute-----------------[1]-----------*/  
/*
document.querySelector("#topcmm-123flashchat-userlist-menu-mute-item").click();
document.querySelector("#topcmm-123flashchat-common-chat-panel-btn-first").click();
*/
/*=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#*/
/* ||-------- whisper-----------[2]-----------*/
if ($('#topcmm-123flashchat-userlist-menu-whispermessage-item > span.topcmm-123flashchat-menu-item-text').length>0) {

document.querySelector("#topcmm-123flashchat-userlist-menu-personalmessage-item > span.topcmm-123flashchat-menu-item-text").click();


document.getElementById('topcmm-123flashchat-main-input-toolbar-whisper').style = ' block';

document.querySelector("#topcmm-123flashchat-main-input-toolbar-whisper-checkbox").checked=true;


/*document.querySelector("#topcmm-123flashchat-main-input-toolbar-whisper-checkbox").click();*/
document.getElementById('topcmm-123flashchat-main-message-input').value = " :) lotfan bi adabi nakon";
document.getElementById('topcmm-123flashchat-main-send-msg-btn').click();
/*=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#*/
/* ||-------- decline-----------[3]-----------*/
/*//if ($('#topcmm-123flashchat-common-chat-panel-approve-decline').length) {*/
document.querySelector("#topcmm-123flashchat-common-chat-panel-approve-decline").click();
$("#topcmm-123flashchat-main-messageview").empty();
console.info("filter2  detecetd bad word & decline");
/*=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#*/
/*//}*/
}
}
else {
// /* ||-------- approve-----------[4]------------*/
 if ($('#topcmm-123flashchat-common-chat-panel-approve').length) {
document.querySelector("#topcmm-123flashchat-common-chat-panel-approve").click();
console.info("filter2 not detecetd bad word & approve");
$("#topcmm-123flashchat-main-messageview").empty();
 } 
/*=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#*/
}
}
