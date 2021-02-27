var sobj = document.createElement('link');
sobj.rel = "stylesheet";
sobj.type = "text/css";
sobj.href = "http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css";
var headobj = document.getElementsByTagName('head')[0];
headobj.appendChild(sobj);
sobj.onload = function(){alert('loaded');}  
var js00=document.createElement('script');
js00.setAttribute('type','text/javascript');
js00.setAttribute('src', 'http://code.jquery.com/ui/1.10.4/jquery-ui.js');
document.getElementsByTagName('head')[0].appendChild(js00);
js00.onload = function(){
alert('loaded');

}     
var body1= ` 

<div id="dialog" title="Mihanchat"> 
<p>لطفا نوع تنظیمات را انتخاب کنید را انتخاب کنید</p>     
<input type="radio"  name="order" id="order0" value="SilenceMute"> سایلنت میوت<br> 
<input type="radio" id="order1" name="order" value="AttentionFosher">تذکر در صحفه عمومی به فوشر<br> 
<input type="radio" id="order2"  name="order" value=" ConsoleView"> مشاهده نام فوشر فقط در کنسول<br> 
<input type="radio"  name="order" id="order3" value="Reportmode">گزارش نام فوشر به ادمین<br> 
<button type="button" value="Submit" onclick="checkRadioBtn();" >Click Here</button>
<button type="button" value="Close" onclick="closeBtn()">Close</button>`;
$(body1).appendTo("body");

        
function checkRadioBtn(){

if ( $("#order0").is(':checked')) {

window.mode='SilenceMute();';

}
if ( $("#order1").is(':checked')) {

window.mode='AttentionFosher();';









}
if ( $("#order2").is(':checked')) {

window.mode='ConsoleView();';

}
if ( $("#order3").is(':checked')) {

window.mode='ReportMode();';


}
alert(""+window.mode+"");closeBtn();
}

function closeBtn()
{ $("div#dialog").dialog ({  }).prev().find(".ui-dialog-titlebar-close").click ();
}
function OpenBtn()
{ $("div#dialog").dialog ({  }).prev().find(".ui-dialog-titlebar-close").hide ();
}    
var jq2="<img id='topcmm-123flashchat-mainchat-top-panel-ios-btn'  class='pzbtn' onclick='OpenBtn()'  style='height:27px;width:32px;'  src='https://uupload.ir/files/viyn_mihan.png'></img>";
$( jq2 ).appendTo( ".topcmm-123flashchat-common-header-toolbar" );
