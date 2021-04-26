window.onload = init;

function init() {
	//추가1
	getSales();
}

function getSales() {
    //추가1
	var url = "cupramen.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

function updateSales(responseText) {
    //추가1
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = "가격이 " + sale.price + "원인 " + sale.name  + "이 " + sale.sales + "개 남았습니다.";
		salesDiv.appendChild(div);
	}
}