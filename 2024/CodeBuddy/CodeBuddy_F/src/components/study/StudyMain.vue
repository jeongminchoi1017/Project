<script setup>
import { ref, onMounted } from 'vue';
import studyMainConfig from "../../config/studyMain.js";

let map = null;

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    console.log("맵 생성~~~")
    initMap();
  } else {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${studyMainConfig.mapkey}&libraries=services`;
    document.head.appendChild(script);
  }
});

const initMap = () => {
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };
  console.log("mapContainer")
  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  console.log("map")

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();

  console.log("ps")
  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
  if (navigator.geolocation) {
    console.log("geolocation 됨")
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("getCurrentPosition")
      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
      console.log("lat : "+lat,"lon : "+lon)
      // 키워드로 장소를 검색합니다
      ps.keywordSearch('카페', placesSearchCB);
      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      console.log("ps.keywordSearch : "+ps.keywordSearch);
      /*function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          console.log("status === kakao.maps.services.Status.OK")
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          var bounds = new kakao.maps.LatLngBounds();

          for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          console.log("for문")
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
          console.log("setBounds")
        }
      }*/

      var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      console.log("locPositon")
      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition);
      console.log("displayMarker")
    });

  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    displayMarker(locPosition);
  }

// 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x)
    });

    var iwContent = place.place_name, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable,
      zIndex:1
    });


    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
  }
};
</script>

<template>
  <div class="studyMain">
    <b-container class="bv-example-row" fluid="xl">
      <div class="overflow-auto layout">
        <h4>Study Cafe</h4>
        <!--근처스터디카페(지도 API)
          키워드로 장소 검색  https://apis.map.kakao.com/web/sample/keywordBasic/
          geolocation으로 마커 표시하기  https://apis.map.kakao.com/web/sample/geolocationMarker/-->
        <div id="map"></div>
      </div>
      <div class="overflow-auto layout">
        <h4>Join List</h4>
        <form class="d-flex searchForm">
          <!--모임 검색(지역별, 이름, 날짜)-->
          <select>
            <option value="location">지역별</option>
            <option value="studyName">모임명</option>
            <option value="studyDate">날짜</option>
          </select>
          <input class="form-control me-2 SearchTxt" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success SearchBtn" type="submit">Search</button>
        </form>
        <!--모임 목록 (더보기 버튼으로 목록페이지 들어가기)-->
        <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List Group item heading</h5>
              <small>3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List Group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Disabled List Group item</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="overflow-auto layout">
        <!--모임 만들기 버튼-->
        <b-button block>스터디 모집</b-button>
      </div>
    </b-container>
  </div>

</template>

<style scoped>
  #map {
    width:100%;
    height:350px;
  }
  h4 {
    font-family: Impact;
  }
  .btn {
    border: #ffb733;
    background-color: #ffb733;
    color: black;
  }
  /*.btn:hover {
    background-color: var(--bs-btn-hover-bg);
  }*/
  .overflow-auto {
    margin : 20px;
    padding: 10px;
  }
  .searchForm {margin-bottom: 10px;}
</style>