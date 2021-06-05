window.onload = function () {
	handleRefresh();
}

function handleRefresh() {
	var url = "http://openapi.seoul.go.kr:8088/62464a4e776a6a353638794c626956/xml/SeoulPublicLibraryInfo/1/100/";

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			updatelibrary(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function updatelibrary(xml) {
	var xmlDoc = xml.responseXML;
	var librariesDiv = document.getElementById("libraries");
	libraries = xmlDoc.getElementsByTagName("row");
	var places = document.getElementById("places");
	var place;
	var infoDiv = document.getElementById("info");

	for (var i = 0; i < libraries.length; i++) {
		var row = libraries[i];
		var div = document.createElement("div");
		div.setAttribute("class", "library");

		div.innerHTML = "도서관명:" + row.getElementsByTagName("LBRRY_NAME")[0].childNodes[0].nodeValue + "<br>"
			+ "구명:" + row.getElementsByTagName("CODE_VALUE")[0].childNodes[0].nodeValue + "<br>"
			+ "주소:" + row.getElementsByTagName("ADRES")[0].childNodes[0].nodeValue + "<br>"
			+ "전화번호:" + row.getElementsByTagName("TEL_NO")[0].childNodes[0].nodeValue + "<br>"
			+ "홈페이지URL:" + row.getElementsByTagName("HMPG_URL")[0].childNodes[0].nodeValue + "<br>"
			+ "운영시간:" + row.getElementsByTagName("OP_TIME")[0].childNodes[0].nodeValue + "<br>"
			+ "정기휴관일:" + row.getElementsByTagName("FDRM_CLOSE_DATE")[0].childNodes[0].nodeValue + "<br>"
			+ "도서관구분명:" + row.getElementsByTagName("LBRRY_SE_NAME")[0].childNodes[0].nodeValue;

			librariesDiv.appendChild(div);

		place += "<option value=" + row.getElementsByTagName("LBRRY_NAME")[0].childNodes[0].nodeValue + ">" + row.getElementsByTagName("LBRRY_NAME")[0].childNodes[0].nodeValue + "</option>";
		places.innerHTML = place;

		showBtn.onclick = function () {
			infoDiv.innerHTML = "";
			for (i = 0; i < places.options.length; i++) {
				var row = libraries[i];
				if (places.options[i].selected == true) {
					p = places.options[i].text;
					if (p == row.getElementsByTagName("LBRRY_NAME")[0].childNodes[0].nodeValue) {
						infoDiv.innerHTML += "도서관명 : " + row.getElementsByTagName("LBRRY_NAME")[0].childNodes[0].nodeValue + "<br>"
							+ "구명 : " + row.getElementsByTagName("CODE_VALUE")[0].childNodes[0].nodeValue + "<br>"
							+ "주소 : " + row.getElementsByTagName("ADRES")[0].childNodes[0].nodeValue + "<br>"
							+ "전화번호 : " + row.getElementsByTagName("TEL_NO")[0].childNodes[0].nodeValue + "<br>"
							+ "홈페이지URL : " + row.getElementsByTagName("HMPG_URL")[0].childNodes[0].nodeValue + "<br>"
							+ "운영시간 : " + row.getElementsByTagName("OP_TIME")[0].childNodes[0].nodeValue + "<br>"
							+ "정기휴관일 : " + row.getElementsByTagName("FDRM_CLOSE_DATE")[0].childNodes[0].nodeValue + "<br>"
							+ "도서관구분명 : " + row.getElementsByTagName("LBRRY_SE_NAME")[0].childNodes[0].nodeValue;
					}
				}
			}
		}
	}
}

function showAll() {
	$('#libraries').show();
	$('#search').hide();
}

function search() {
	$('#libraries').hide();
	$('#search').show();
}