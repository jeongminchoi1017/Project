
<div align=center>

![412553f50b838198](https://github.com/jeongminchoi1017/Project/assets/153606946/1c3189d0-7673-4a58-a5d3-d079187617ff)

</div>
<h1>🛒프로젝트 소개</h1><br>
스프링부트를 이용한 떡볶이 판매 서비스
<br>
<h1>⏱ 프로젝트 기간</h1><br>
 2023.10.31~2023.12.08(총 29일)
<br>

<h1>👫 멤버소개</h1>

| 이름  |직책|역할|
|:----|:----|:----|
| 신진성 |팀장|유저 관련 페이지/기능 구현, git 관리|
| 강나은 |팀원|결제 API 구현, 주문 기능 구현|
| 이지민 |팀원|고객센터 페이지/기능 구현, 관리자 페이지/기능 구현, 문서화 작업|
| 최정민 |팀원|메뉴 페이지/기능 구현, 회사소개 페이지 구현, 문서화작업 및 시연영상 제작|
<br>
<h1>🌟프로젝트 메인 페이지 소개</h1><br>

![스크린샷 2023-12-30 204952](https://github.com/jeongminchoi1017/Project/assets/153606946/0aa8af52-4128-4f2f-8606-ae2e550d6b9a)

<h1>🌝본인 주요 개발기능</h1>

**1.메뉴 관련 기능 구현**<br>
**1)메뉴 조회(메인, 메뉴, 관리자)**: 메인화면 인기순으로 메인 메뉴 조회, 메뉴화면 메인메뉴, 사이드, 음료별로 최순으로 조회, 페이지처리<br>
**2)메뉴 상세 보기**: 메뉴 조회 시 사진 클릭 시 상세보기 페이지로 전환. 메인메뉴 등록시 정해진 사이즈와 맵기, 토핑 출력<br>
**3)메뉴 상품 삽입**: 관리자 페이지에서 카테고리별 메뉴 등록 기능 구현. 메인메뉴의 경우 사이즈와 맵기, 토핑 등 유연성있게 선택할 수 있도록 테이블 정규화<br>
<br>
**2.화면 구현**<br>
**1)관리자 상품등록 화면**: 카테고리별 동적 화면 구현. 일반 메뉴 선택 시 사이즈와 메뉴, 토핑의 개수 입력 시 그 개수에 맞는 입력창 생성되도록 구현<br>
**2)header, footer**:router를 이용하여 공통적인 header, footer 모듈화<br>
**3)브랜드 소개**:브랜드 소개 페이지 구현 시 kakaomapOPEN API를 이용하여 지도 생성, navigation을 사이드에 두어 클릭 시 해당 화면으로 스크롤 이동<br>
**4)로그인 및 회원가입 화면 구현**<br>
**3.서비스 기획 및 방향성 설정** : DB 설계 및 ERD 생성<br>
**4.AWS 서버에 배포** : AWS EC2 서버에 직접 배포
<br>

<h1>🖥개발 환경</h1>

**OS** : Window10<br>
**Browser** : Chorme 117.0.5938<br>
**Language(Server)** : Java17, Spring Boot, React Spring Security, Spring Data JPA, Mybatis
**Language(Client)** : HTML5, CSS3, JavaScript(Es6), jQuery3.1
**Library** : <br>
spring-boot-starter-data-jpa<br>
spring-boot-starter-oauth2-client<br>
spring-boot-starter-security<br>
log4jdbc-log4j2-jdbc4.1:1.16<br>
spring-boot-starter-web<br>
thymeleaf-extras-springsecurity6<br>
lombok<br>
spring-boot-devtools<br>
mysql-connector-j<br>
jaxb-api<br>
jaxb-core<br>
jaxb-impl<br>
modelmapper<br>
spring-boot-starter-mail<br>
spring-boot-starter-data-jdbc<br>
io.jsonwebtoken:jjwt:0.9.1<br>
**DMBS** : MySQL 8.0<br>
**Tool** : IntelliJ IDEA 2023-02-04, Mysql Workbench 8.0.21, HeidSQL 12.5, Git 2.41.0, Github
<br>
<h1>프로젝트를 하면서 느낀 점</h1>

### 느낀점

이번 프로젝트를 하면서 협업과 프로젝트의 기획과 계획의 중요성에 대해 한번더 깨닫는 계기가 되었던 것 같습니다.
또한 React를 사용하면서 새로운 템플릿엔진에 대해 배울 수 있었습니다. 프론트 skill 성장에 도움이 되는 경험이었습니다.

- 프로젝트의 기획 및 계획 과정

  기획 단계에서 브레인스토밍을 통한 다양한 의견들이 나왔고, 그중 타겟팅이 확실했음 좋겠다는 의견을 수렴해 떡볶이 판매 서비스를 기획하였습니다.
  실현 단계에 다다랐을 때 팀원들의 개인 사정으로 인해 모두 함께 만나서 코딩을 할 수 없는 상황들이 있었고  시간을 정하여 오늘의 계획 작업량을 공유하고 매일 수행한 작업을 git hub를 이용해 merge, 또한 디스코드를 통해 업무상황을 공유하였습니다.
  다행히 마감 기한에 맞게 프로젝트를 마무리할 수 있었습니다. 이 경험을 통하여 스케쥴 관리의 중요성과 커뮤니케이션의 중요성을 한번더 느꼈습니다.

- React 사용
  React bootstrap을 이용한 화면 구현을 했습니다. React는 팀원 모두가 처음 써보는 기술이었기에 사용하는 데 어려움이 많았습니다. 그래서 기능을 구현하는 데 시간이 좀 더 걸린 것 같습니다. 하지만 새로운 기술을 이론으로만 배우는 것이 아닌 프로젝트를 하면서 직접 체득할 수 있는 기회가 된 것 같습니다. 또한 thymeleaf와 jsp를 사용했을 때와 달리 새로고침을 하지 않음으로써 화면 깜빡임을 줄이고 좀 더 깔끔한 UX를 얻을 수 있었습니다.

### 어려웠던 점과 해결방법



- React의 axios를 이용한 데이터 전달

  axios를 이용하면서 controller로 formData가 전달되지 않아 상품 등록에 어려움을 겪었습니다. 여러 방법을 서치하면서 파일 전달하면서 생긴 일이라 판단했고 axios를 사용하면서  요청 헤더에 Content-Type을 multipart/form-data로 설정해주는 객체를 추가해주었습니다.

    ```jsx
    const registerMenu = (e)=>{
            e.preventDefault();
    
            const registerForm = document.getElementById('registerForm');
            const formData = new FormData(registerForm);
    
            for (let pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]);
            }
    
                // axios를 사용한 폼 전송
                axios.post('/api/menu/register', formData,{
                    headers:{'Content-Type': 'multipart/form-data'}
                })
    
                    .then((res) => {
    
                        alert("등록완료");
                        window.location.replace("/admin/menu/AdminMenuRegister")
                    })
                    .catch((err) => {
                        console.error("전송실패: " + err);
                    });
    
        };
    
    ```

- React 동적화면 구현

  옵션 입력창에 입력된 숫자만큼 옵션의 입력창을 동적으로 구현하고 싶었습니다. onChange 함수를 이용하여 event 설정하는 방식을 생각하였고, react의 hook 중 useState를 이용하자는 생각을 했습니다. 하지만 생성되어야할 부분을 어떻게 구현해야할지에 대한 고민이 많았습니다. 오랜 검색 끝에 useState를 이용한 변수에 map을 이용하여 화면 컴포넌트를 넣어주는 방법을 찾을 수 있었습니다.

    ```jsx
    // 카테고리가 일반 메뉴일 때 옵션 화면 구현
    {selectedType === "normal" && (
          <InputGroup className="mb-3" id="sizeOption">
              <InputGroup.Text>사이즈 옵션</InputGroup.Text>
              <Form.Control name="sizeCount" onChange={handleSizeCountChange} />
              <InputGroup.Text>개</InputGroup.Text>
          </InputGroup>
    )}
    ```

    ```jsx
    // 사이즈 옵션의 값이 바뀔 때 실행되는 event
    const handleSizeCountChange = (e) => {
            const count = parseInt(e.target.value, 10) || 0;
            setSizeCount(count);
            // Generate an array with the new count of size inputs
            const newSizes = Array.from({ length: count }, (_, index) => index + 1);
            setSizes(newSizes);
        };
    ```

    ```jsx
    // 사이즈 옵션의 값이 바뀔 때 아래 컴포넌트가 숫자만큼 변화
    {sizes.map((size) => (
          <InputGroup className="mb-3 size" key={size} >
                  <InputGroup.Text>사이즈</InputGroup.Text>
                  <Form.Control className="sizeValue" name={`sizeDTOs[${size-1}].size`} />
          </InputGroup>
    ))}
    ```
