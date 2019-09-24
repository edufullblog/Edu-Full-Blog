
		function h1Tag(){
			  var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h1> ' + sel + '</h1>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function h2Tag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h2> ' + sel + '</h2>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function h3Tag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h3> ' + sel + '</h3>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function h4Tag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h4> ' + sel + '</h4>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function h5Tag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h5> ' + sel + '</h5>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function h6Tag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<h6> ' + sel + '</h6>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 4;
		}
		function divTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<div> ' + sel + '</div>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 5;
		}
		function pTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<p> ' + sel + '</p>' + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 3;
		}
		function typeBrac(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<> ' + sel + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 1;
		}
		function typeSlas(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '/' + sel + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 1;
		}
		function typeSlasBrac(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '</>' + sel + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 2;
		}
		function bTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<b>' + sel + '</b>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 3;
		}
		function iTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<i>' + sel + '</i>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 3;
		}
		function uTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<u>' + sel + '</u>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 3;
		}
		function sTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<s>' + sel + '</s>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 3;
		}
		function supTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<sup>' + sel + '</sup>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 5;
		}
		function subTag(){
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<sub>' + sel + '</sub>'+txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 5;
		}
		function imgTag(){
			document.getElementById('imgPopUp').style.display = "block";
		}
		function imgTagOK(){
			var imgAdd = document.getElementById('imageAdd').value;
			var imgHeight = document.getElementById('imgHeight').value;
			var imgWidth = document.getElementById('imgWidth').value;
			var imgText = document.getElementById('imgText').value;
			var imgTitle = document.getElementById('imgTitle').value;
			var txtarea = document.getElementById('coding');
			  var start = txtarea.selectionStart;
			  var end = txtarea.selectionEnd;
			  var sel = txtarea.value.substring(start, end);
			  var finText = txtarea.value.substring(0, start) + '<img ' + 'alt="'+imgText+'" src="' + imgAdd + '"'+ ' height="'+ imgHeight + '"'+ ' width="'+ imgWidth + '"'+' title="'+imgTitle+'"/>'+ sel + txtarea.value.substring(end);
			  txtarea.value = finText;
			  txtarea.focus();
			  txtarea.selectionEnd= end + 10;
			  document.getElementById('imgPopUp').style.display = "none";
		}
		function cancImg(){
			 document.getElementById('imgPopUp').style.display = "none";
		}

			function runCode(){
				var code = document.getElementById('coding');
				var previewer = document.getElementById('coding-preview');
				previewer.innerHTML = code.value;
				document.getElementsByClassName('menu-container1')[0].classList.remove("show");
			}
			function showmenu(){
				document.getElementById('headings').classList.toggle("show");
				document.getElementsByClassName('menu-container1')[0].classList.remove("show");
			}
			window.onclick = function(event) {
			  if (!event.target.matches('.menus')) {
				var dropdowns = document.getElementsByClassName("menu-container");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
				  var openDropdown = dropdowns[i];
				  if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				  }
				}
			  }
			}
			function showmenu1(){
				document.getElementById('styles').classList.toggle("show");
			}
			function disMenu(){
			document.getElementsByClassName('menu-container1')[0].classList.remove("show");
			}