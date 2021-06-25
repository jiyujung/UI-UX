var map;
window.onload = function () {
	var mapContainer = document.getElementById('map'),
		mapOption = {
			center: new daum.maps.LatLng(37.4665513, 126.9241747, 17),
			level: 6
		};

	map = new daum.maps.Map(mapContainer, mapOption);

	var zoomControl = new daum.maps.ZoomControl();
	map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

	var button = document.getElementById("button");
	button.onclick = handleRefresh;

	daum.maps.event.addListener(map, 'dragend', function () {
		handleRefresh();
	});
}


function handleRefresh() {
	for (var i = 1; i < 16000; i = i + 1000) {
		var j = i + 999;
		var url = "http://openAPI.seoul.go.kr:8088/62464a4e776a6a353638794c626956/json/GetParkInfo/" + i + "/" + j;
		$.getJSON(url, updatePark);
	}
	addBound();
}

function updatePark(parks) {
	var arr = parks.GetParkInfo.row;
	var addr = "";
	var center = map.getCenter();
	var position = {
		latitude: center.getLat(),
		longitude: center.getLng()
	};

	for (var i = 0; i < arr.length; i++) {
		var park = arr[i];
		var imageSrc = "marker1.png",
			imageSize = new daum.maps.Size(27, 40),
			imageOption = { offset: new daum.maps.Point(14, 28) };
		var loc = {
			latitude: park.LAT,
			longitude: park.LNG
		};
		var km = computeDistance(position, loc);

		var remain = park.CAPACITY - park.CUR_PARKING;
		if (addr != park.ADDR && km <= 1) {
			var runselect = document.getElementById("run");
			var selectrun = runselect.selectedIndex;
			var whatrun = runselect[selectrun].value;
			var runwhat;
			if (whatrun == 'weekday' && park.WEEKEND_BEGIN_TIME == '0000') {
				addr = park.ADDR;
				addMarker(imageSrc, imageSize, imageOption, park.LAT, park.LNG, park.PARKING_NAME, park.TEL, remain, park.PAY_NM, park.WEEKEND_BEGIN_TIME);
			}
			else if (whatrun == 'week' && park.WEEKEND_BEGIN_TIME != '0000') {
				addr = park.ADDR;
				addMarker(imageSrc, imageSize, imageOption, park.LAT, park.LNG, park.PARKING_NAME, park.TEL, remain, park.PAY_NM, park.WEEKEND_BEGIN_TIME);
			}
		}
	}
}

function addBound() {
	var bound = new daum.maps.Circle({
		center: map.getCenter(),
		radius: 1000,
		strokeWeight: 5,
		strokeColor: '#ff0000',
		strokeOpacity: 0.7,
		strokeStyle: 'dashed',
		fillColor: '#ff0000',
		fillOpacity: 0.3,
		zIndex: 1
	});

	bound.setMap(map);

	daum.maps.event.addListener(map, 'dragstart', function () {
		bound.setMap(null);
	});
}

function addMarker(imageSrc, imageSize, imageOption, latitude, longitude, name, tel, remain, pay, run) {
	var payselect = document.getElementById("pay");
	var selectpay = payselect.selectedIndex;
	var whatpay = payselect[selectpay].value;
	var what;
	if (whatpay == 'free')
		what = '무료';
	else
		what = '유료';

	if (pay == what) {
		var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
			markerPosition = new daum.maps.LatLng(latitude, longitude);
		var marker = new daum.maps.Marker({
			position: markerPosition,
			image: markerImage,
			clickable: true,
			zIndex: 7
		});

		marker.setMap(map);

		daum.maps.event.addListener(map, 'dragstart', function () {
			marker.setMap(null);
		});

		if (run == '0000') {
			if (tel == "") {
				var content = "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>주차장: "
					+ name + "(" + what + ")" + '&nbsp;&nbsp;&nbsp;' + '<br>' + "운영 유형: 평일만 운영" + '<br>' + "</div><br>";
			}
			else {
				var content = "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>주차장: "
					+ name + "(" + what + ")" + '&nbsp;&nbsp;&nbsp;' + '<br>' + "운영 유형: 평일만 운영" + '<br>' + "전화 번호: " + tel + "</div><br>";
			}
		}
		else {
			if (tel == "") {
				var content = "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>주차장: "
					+ name + "(" + what + ")" + '&nbsp;&nbsp;&nbsp;' + '<br>' + "운영 유형: 항시 운영" + '<br>' + "시작시간: " + run + "</div><br>";
			}
			else {
				var content = "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>주차장: "
					+ name + "(" + what + ")" + '&nbsp;&nbsp;&nbsp;' + '<br>' + "시작시간: " + run + '<br>' + "전화 번호: " + tel + "</div><br>";
			}

		}

		var iwContent = content,
			iwPosition = markerPosition,
			iwRemoveable = true;

		var infowindow = new daum.maps.InfoWindow({
			position: iwPosition,
			content: iwContent,
			removable: iwRemoveable,
			zIndex: 10
		});

		daum.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

	}
}

function computeDistance(startCoords, destCoords) {

	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371;
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
		Math.cos(startLatRads) * Math.cos(destLatRads) *
		Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;


}

function degreesToRadians(degrees) {
	var radians = (degrees * Math.PI) / 180;
	return radians;
}