function generateTextBox() {
  var popContainer = document.createElement("div");
  document.body.appendChild(popContainer);
  popContainer.setAttribute("id", "pop_container");
  popContainer.style.display = "inline-block";
  popContainer.style.position = "fixed";
  popContainer.style.top = "300px";
  popContainer.style.left = "70%";
  popContainer.style.width = "26%";
  popContainer.style.height = "20%";
  popContainer.style.border = "1px solid DarkSlateGrey ";
  popContainer.style.background = "DarkSlateGrey";
  popContainer.style.borderRadius = "1em";
  popContainer.style.padding = "3px";
  popContainer.style.zIndex = "10000";
  popContainer.style.fontFamily = '"Courier New", monospace';

  var closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "note_btn_close");
  document.getElementById("pop_container").appendChild(closeBtn);
  document.getElementById("note_btn_close").innerText = "+";
  closeBtn.style.position = "absolute";
  closeBtn.style.background = "transparent";
  closeBtn.style.display = "inline-block";
  closeBtn.style.width = "1%";
  closeBtn.style.height = "2%";
  closeBtn.style.transform = "scale(4.5, 4.5) translate(3px, -6px) rotate(45deg)";
  closeBtn.style.borderRadius = "1em";
  closeBtn.style.transition = "all 366ms";
  closeBtn.style.transitionTimingFunction = "cubic-bezier(1,-1.12,.18,1.93)";
  closeBtn.style.padding = "0px";
  closeBtn.style.boxShadow = "0px";
  closeBtn.style.border = "0px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.userSelect = "none";
  closeBtn.style.fontFamily = '"Courier New", monospace';
  closeBtn.style.fontWeight = "bold";
  closeBtn.style.color = "Crimson";

  var inputElm = document.createElement("textarea");
  document.getElementById("pop_container").appendChild(inputElm);
  inputElm.setAttribute("id", "put_box_text");
  inputElm.style.width = "100%";
  inputElm.style.height = "80%";
  inputElm.style.padding = "6px";
  inputElm.style.border = "1px solid DarkSlateGrey";
  inputElm.style.background = "white";
  inputElm.style.borderRadius = "1em";
  inputElm.style.fontFamily = '"Courier New", monospace';

  var saveBtn = document.createElement("button");
  document.getElementById("pop_container").appendChild(saveBtn);
  saveBtn.setAttribute("id", "savebtn_box");
  document.getElementById("savebtn_box").innerText = "send2Sheets";
  saveBtn.style.background = "DarkCyan";
  saveBtn.style.border = "1px solid DarkSlateGrey";
  saveBtn.style.width = "100%";
  saveBtn.style.height = "20%";
  saveBtn.style.borderRadius = "1em";
  saveBtn.style.cursor = "pointer";
  saveBtn.style.color = "white";
  saveBtn.style.fontFamily = '"Courier New", monospace';

  function close() {
    document.body.removeChild(document.getElementById("pop_container"));
  }

  function send2Sheets() {
    var userinput = document.getElementById("put_box_text").value;
    var containArr = JSON.parse('["' + userinput.replace(/\n/g, '","') + '"]');

	function checkyourself(itm,n){
    	var wnd = window.open("https://www.linkedin.com/sales/gmail/profile/viewByEmail/"+itm);
    	setTimeout(function() {
			if(/Something went wrong while displaying this profile/.test(wnd.document.getElementsByClassName("li-user-profile")[0].innerText) === true){
				wnd.close();
        	} else {
				window.open("https://script.google.com/macros/s/AKfycbxRkPyZ3mQvvdRUdH21S5eH0xsM2Pj6fVPgm9fC2hsOKiVdYar-/exec?email="+itm);
			}

    	}, (n*1000));
	}
	for(em=0; em<containArr.length; em++){
		checkyourself(containArr[em], em);
    }
  }

  document.getElementById("savebtn_box").addEventListener("click", send2Sheets);

  document.getElementById("note_btn_close").addEventListener("click", close);

}
generateTextBox();




/*/ google apps script
var ss = SpreadsheetApp.openById("YOUR_SHEET-ID_GOES_HERE");
var s1 = ss.getSheetByName("Mailer");
function doGet(req) {
  var email = req.parameter.email;
  var lr = s1.getLastRow();
  var emailCol = s1.getRange(1,3,lr,1).getValues();
  for(i=0; i<emailCol.length; i++){
      if(emailCol[i] == email){
        s1.getRange((i+1), 8).setValue("https://www.linkedin.com/sales/gmail/profile/proxy/"+email);
      }
  }   
  return ContentService.createTextOutput("sent the data to your sheet");
}
/*/
