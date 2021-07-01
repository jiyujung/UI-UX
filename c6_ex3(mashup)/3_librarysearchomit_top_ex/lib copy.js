var map;	//map 전역변수 선언
var gus="";	//gus 전역변수 선언
var marker;
var mapContainer;

window.onload = function () {	//처음 실행시 handRefresh함수 실행
	mapContainer = document.getElementById('map'), // 지도를 표시할 div 설정
	mapOption = {
		center: new kakao.maps.LatLng(37.56544,126.977119,17), // 지도 중심좌표 시청으로 임의 지정.
		level: 7 // 지도의 확대 레벨
	};
	map = new kakao.maps.Map(mapContainer, mapOption);
};

function find(){	//find 버튼을 눌렀을 때(onClick)
	var gu = document.getElementById("gu");		//html의 gu를 가져온다.
	gus = gu.options[gu.selectedIndex].value; 	//gus는 gu의 값을 가지고 있다.(ex: 강북구, 강동구..)

	switch(gu.selectedIndex){//선택된 인덱스 번호
	case 0: //강남구
		mapOption = {
			center: new kakao.maps.LatLng(37.4968488,127.0679394),	//강남구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 1: //강동구
		mapOption = {
			center: new kakao.maps.LatLng(37.5492994,127.1464275),	//강동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 2: //강북구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6482131,127.0164069),	//강북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 3: //강서구 
		mapOption = {
			center: new kakao.maps.LatLng(37.552593,126.85051),	//강서구 좌표 지정
			level:7 // 지도의 확대 레벨
			};
		break;
	case 4: //관악구 
		mapOption = {
			center: new kakao.maps.LatLng(37.4654529,126.9442478),	//관악구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 5: //광진구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5388,127.083445),	//광진구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 6: //구로구   
		mapOption = {
			center: new kakao.maps.LatLng(37.495765,126.8578697),	//구로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 7: //금천구  
		mapOption = {
			center: new kakao.maps.LatLng(37.4599896,126.9012665),	//금천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 8: //노원구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6541956,127.0769692),	//노원구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 9: //도봉구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6662325,127.0298724),	//도봉구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 10: //동대문구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5835755,127.0505528),	//동대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 11: //동작구  
		mapOption = {
			center: new kakao.maps.LatLng(37.4971121,126.944378),	//동작구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 12: //마포구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5615964,126.9086431),	//마포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 13: //서대문구  
		mapOption = {
			center: new kakao.maps.LatLng(37.583312,126.9356601),	//서대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 14: //서초구  
		mapOption = {
			center: new kakao.maps.LatLng(37.483574,127.032661),	//서초구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 15: //성동구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5508768,127.0408952),	//성동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 16: //성북구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6023295,127.025236),	//성북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 17: //송파구 
		mapOption = {
			center: new kakao.maps.LatLng(37.504741,127.1144649),	//송파구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 18: //양천구 
		mapOption = {
			center: new kakao.maps.LatLng(37.527432,126.8558783),	//양천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 19: //영등포구 
		mapOption = {
			center: new kakao.maps.LatLng(37.525423,126.896395),	//영등포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 20: //용산구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5305208,126.9809672),	//용산구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 21: //은평구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6175107,126.9249166),	//은평구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 22: //종로구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6009106,126.9835817),	//종로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 23: //중구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5576747,126.9941653),	//중구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 24: //중랑구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5950497,127.0957062),	//중랑구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	}	//switch
	
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	map = new kakao.maps.Map(mapContainer, mapOption);

	// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
	var mapTypeControl = new kakao.map.mapTypeControl();

	// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
	// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);
	
	kakao.maps.event.addListener(map, 'dragend', function() {
		handleRefresh();//지도의 중심이 이동될때도 마커를 다시 표시
	});
	
	handleRefresh();	//검색버튼을 클릭할 때 마커 표시
}	//find

function handleRefresh() {
	for (var i=1; i<16000; i=i+1000 )	//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i + 999;
		var url="http://openAPI.seoul.go.kr:8088/4945456f676a6a3532327667467576/json/SeoulPublicLibraryInfo/"+i+"/"+j;
    $.getJSON(url, updateLibrary);
	}//for
	addBound();// 지도에 원을 표시
}	//handleRefresh

function updateLibrary(librarys) {	//16번 호출
   var librarys = librarys.SeoulPublicLibraryInfo.row;
   var addr = "";
   
   var center = map.getCenter(); // 중심 가져오기 
   var position = {
          latitude : center.getLat(),
		  longitude: center.getLng()
      };
   
   for (var i = 0; i < librarys.length; i++) {
      var lib = librarys[i];
      var imageSrc = "marker1.png",
		imageSize = new kakao.maps.Size(27, 40), //마커의 크기(kakaomap에서 size 검색, 크기정보를 가지고 있는 사이즈 객체 생성)
		imageOption = {offset: new kakao.maps.Point(14, 28)};//point 검색, 화면 좌표 정보를 담고 있는 포인터 객체 생성
	  
      var loc = {	//open API의 값들 위도와 경도
            latitude : lib.XCNTS,
			longitude: lib.YDNTS
      };
	  var km = computeDistance (position, loc);		//거리 계산, position 지도의 중심좌표이고 loc는 각 주차장 좌표
	  if(addr != lib.ADRES && km <= 3){		//주소가 중복되지 않고, 거리가 2km이내의 것들을 가져온다.
		  addr = lib.ADRES;
		  addMarker(imageSrc, imageSize, imageOption, lib.XCNTS, lib.YDNTS, lib.LBRRY_NAME,lib.ADRES,lib.TEL_NO, lib.FDRM_CLOSE_DATE);
	  }
   }
   
   //밑에 리스트 추가하는 부분
   var librarysDiv = document.getElementById("librarys");
	librarysDiv.innerHTML="";
	
	for(var i=0; i<librarys.length; i++){
		var lib = librarys[i];
		var div = document.createElement("div");
		div.setAttribute("class", "librarys");
		
		div.innerHTML="";
		if (lib.CODE_VALUE == gus) {
			div.innerHTML = "[" + lib.CODE_VALUE + "]" + lib.LBRRY_NAME;
			
			div.innerHTML += "<input type=button value=위치" + " onclick=\"window.open('http://www.google.co.kr/maps/search/" + lib.LBRRY_NAME + " ')\"/>"; 
			
			if (lib.TEL_NO != "") {
				div.innerHTML += "<br>" + "☎) " + lib.TEL_NO;
			}
			if (lib.ADRES != "") {
				div.innerHTML += "<br>" + "주소: " + lib.ADRES + "(x:"
						+ lib.XCNTS + "&nbsp;,&nbsp;y:" + lib.YDNTS + ")";
			}
			
			if (lib.FDRM_CLOSE_DATE != "") {
				div.innerHTML += "<br>휴관일 : " + lib.FDRM_CLOSE_DATE;
			}
			
			if(lib.HMPG_URL!=""){
				div.innerHTML +="<br> 홈페이지 :" +"<a href="+lib.HMPG_URL+" target=blank>"+lib.HMPG_URL+"</a>";
			}
			if(lib.TFCMN!=""){
				div.innerHTML+="<br> 오시는길:"+lib.TFCMN;
			}
			
			if(librarysDiv.childElementCount==0){
			librarysDiv.appendChild(div);
			}
			else{
				librarysDiv.insertBefore(div, librarysDiv.firstChild);
			}
		}
	}
}

function addBound(){
	// 지도에 표시할 원을 생성합니다
	var bound = new kakao.maps.Circle({
	   center : map.getCenter(),  // 원의 중심좌표 입니다 
	   radius: 3000, // 미터 단위의 원의 반지름입니다 
	   strokeWeight: 5, // 선의 두께입니다 
	   strokeColor: '#F7D358', // 선의 색깔입니다
	   strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	   strokeStyle: 'solid', // 선의 스타일 입니다
	   fillColor: '#F7FE2E', // 채우기 색깔입니다
	   fillOpacity: 0.3,  // 채우기 불투명도 입니다
	   zIndex: 1
	}); 
	
	// 지도에 원을 표시합니다 
	bound.setMap(map);

	kakao.maps.event.addListener(map, 'dragstart', function() {		//지도가 이동될때도 원이 다시 그려짐
		bound.setMap(null);
	});
}

//마커추가
function addMarker(imageSrc, imageSize, imageOption, latitude, longitude, name, address,tel, closeday) {
	
	//이미지 마커 맵에 추가
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(latitude, longitude);
	var marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
		clickable: true,
		zIndex: 7
	});
	
	marker.setMap(map);
	
	kakao.maps.event.addListener(map, 'dragstart', function() {
		marker.setMap(null);
	});
    
	var content =  "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>"+"도서관 : "+ '<b>'+ name +'</b>'+'<br>'+"주소 : " +address+'<br>'+"전화번호 : "+tel+'<br>'+"휴관일 : " +'<font color="red" >'+closeday+'</font>'+ "</div>";
	
	// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var iwContent = content, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
		iwPosition = markerPosition, //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

	// 인포윈도우를 생성합니다
	var infowindow = new kakao.maps.InfoWindow({
	   position : iwPosition,
	   content : iwContent,
	   removable : iwRemoveable,
	   zIndex : 10
	});

	// 마커에 클릭이벤트를 등록합니다
	kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);  
	});	
}

//거리계산. 준비된 코드
function computeDistance(startCoords,destCoords){
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads =degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    
    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads ) +
                             Math.cos(startLatRads) * Math.cos(destLatRads )  *
                             Math.cos(startLongRads -destLongRads )) * Radius;
    
    return distance ;
}

//도
function degreesToRadians(degrees){
    var radians = (degrees * Math.PI)/180;
    return radians;
}

function go_top(orix,oriy,desx,desy) {	//맨위 버튼 함수
	var Timer;
	if (document.body.scrollTop == 0) {	//밑에 있지 않을 때
		var winHeight = document.documentElement.scrollTop;
	} else {
		var winHeight = document.body.scrollTop;
	}
	if(Timer) clearTimeout(Timer);	//타이머 초기화
	startx = 0;
	starty = winHeight;
	if(!orix || orix < 0) orix = 0;	//맨위가 아닐때 x좌표 0
	if(!oriy || oriy < 0) oriy = 0;	//맨위가 아닐때 y좌표 0
	var speed = 7;	//올라가는 속도
	if(!desx) desx = 0 + startx;
	if(!desy) desy = 0 + starty;
	desx += (orix - startx) / speed;	//스피드 적용
	if (desx < 0) desx = 0;
	desy += (oriy - starty) / speed;	//스피드 적용
	if (desy < 0) desy = 0;
	var posX = Math.ceil(desx);	var posY = Math.ceil(desy);	//올림값 반환
	window.scrollTo(posX, posY);	//올라가기
	if((Math.floor(Math.abs(startx - orix)) < 1) && (Math.floor(Math.abs(starty - oriy)) < 1)){
		clearTimeout(Timer);//타이머 해제
		window.scroll(orix,oriy);	//올라가기
	}else if(posX != orix || posY != oriy){
		Timer = setTimeout("go_top("+orix+","+oriy+","+desx+","+desy+")",15);	//타이머설정
	}else{
		clearTimeout(Timer);	//타이머 해제
	}
}