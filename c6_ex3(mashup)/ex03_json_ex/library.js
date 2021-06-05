window.onload = function () {
	var interval = setInterval(handleRefresh, 3000);
	handleRefresh();
}

function handleRefresh() {
	var url = "http://openapi.seoul.go.kr:8088/62464a4e776a6a353638794c626956/json/SeoulPublicLibraryInfo/1/100/";
	$.getJSON(url, updatelibrary);
}

function updatelibrary(libraries) {
	var librariesDiv = document.getElementById("libraries");
	libraries = libraries.SeoulPublicLibraryInfo.row;
	var places = document.getElementById("places");
	var place;
	var infoDiv = document.getElementById("info");

	for (var i = 0; i < libraries.length; i++) {
		var library = libraries[i];
		var div = document.createElement("div");
		div.setAttribute("class", "library");
		div.innerHTML = "도서관명:" + library.LBRRY_NAME + "<br>"
			+ "구명:" + library.CODE_VALUE + "<br>"
			+ "주소:" + library.ADRES + "<br>"
			+ "전화번호:" + library.TEL_NO + "<br>"
			+ "홈페이지URL:" + library.HMPG_URL + "<br>"
			+ "운영시간:" + library.OP_TIME + "<br>"
			+ "정기휴관일:" + library.FDRM_CLOSE_DATE + "<br>"
			+ "도서관구분명:" + library.LBRRY_SE_NAME;

		librariesDiv.appendChild(div);

		place += "<option value=" + library.LBRRY_NAME + ">" + library.LBRRY_NAME + "</option>";
	}

	places.innerHTML = place;

	showBtn.onclick = function () {
		infoDiv.innerHTML = "";
		for (i = 0; i < places.options.length; i++) {
			var library = libraries[i];
			if (places.options[i].selected == true) {
				p = places.options[i].text;
				if (p == library.LBRRY_NAME) {
					infoDiv.innerHTML += "도서관명 : " + library.LBRRY_NAME + "<br>"
						+ "구명 : " + library.CODE_VALUE + "<br>"
						+ "주소 : " + library.ADRES + "<br>"
						+ "전화번호 : " + library.TEL_NO + "<br>"
						+ "홈페이지URL : " + library.HMPG_URL + "<br>"
						+ "운영시간 : " + library.OP_TIME + "<br>"
						+ "정기휴관일 : " + library.FDRM_CLOSE_DATE + "<br>"
						+ "도서관구분명 : " + library.LBRRY_SE_NAME;
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