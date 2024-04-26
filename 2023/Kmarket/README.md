<div align=center>
  
  ![290369406-bebfd6ff-c7af-4240-ae0b-db49c65f8a55](https://github.com/jeongminchoi1017/Project/assets/153606946/b7de9a78-82fc-415d-8a03-42fcca6cc02a)

</div>
<h1>🛒프로젝트 소개</h1><br>
jsp를 사용하여 제작한 쇼핑몰 사이트입니다.
<h1>⏱ 프로젝트 기간</h1><br>
2023년 09월 11일 ~ 2023년 09월 27일(1일 8H, 총 13일)
<br>
<h1>👫 멤버소개</h1>

|이름|직책| 역할                                        |
|:----|:----|:------------------------------------------|
|최정민|팀장| 총괄 관리, admin 화면 구현 및 기능 구현, seller 화면 구현 및 기능 구현 |
|정영재|팀원| cs 화면 및 기능 구현                      |
|김무현|팀원| product 화면 및 기능 구현                        |
|노수현|팀원| member 화면 및 기능 구현                         |

<br>
<h1>🌟프로젝트 메인 페이지 소개</h1><br>

![메인화면](https://github.com/jeongminchoi1017/Project/assets/153606946/c1685e01-ee5e-4e48-8ac3-db2c6efecb8e)


<h1>🌝본인 주요 개발기능</h1>

**1.관리자**<br>
**1)목록 조회(판매자, 회원, 관리자, 상품, 포인트 관리)** : 목록 10개씩 조회, 검색 기능, 페이징 처리를 했습니다.<br>
<br>
**2.판매자**<br>
**1)상품관리**<br/>
- **상품 등록** : 상품 등록, 1차카테고리에 해당하는 2차카테고리 조회, 파일업로드, 가격 입력 시 포인트 자동 완성 기능을 구현했습니다. <br>
- **상품 현황** : 판매자의 회사에 해당하는 상품목록 조회, 선택 삭제, 하나씩 삭제, 페이징처리를 하였습니다. (수정 클릭 시 수정 화면으로 전환) <br>
- **상품 수정** : 상품 코드에 해당하는 정보 불러오기, 변경된 정보 DB 수정, 파일 수정, 디렉토리에서 파일 수정 기능을 구현했습니다. <br>

**2)주문관리**<br>
- **주문현황** : 주문 목록 조회, 입금대기, 주문량 많은 순으로 조회, 검색 기능, 페이징처리 하였습니다. <br>
- **취소/반품/교환** : 주문 목록 조회, 취소, 반품, 교환별 조회, 검색기능, 페이지 번호 구현했습니다. <br>

**3) 서비스 기획 및 방향성 설정**
<br>

<h1>🖥개발 환경</h1>

**OS** : Window10<br>
**Browser** : Chorme 117.0.5938<br>
**Language(Server)** : Java17 Servlet4.0 JSP2<br>
**Language(Client)** : HTML5 CSS3 JavaScript(Es6) jQuery3.1<br>
**Library** : <br>activation-1.1.1.jar<br> cos-05Nov2022.jar<br> gson-2.10.1.jar <br>javax.mail-1.6.2.jar <br>jstl-1.2.jar<br> logback-classic-1.4.11.jar <br>logback-core-1.4.11.jar <br>mysql-connector-java-8.0.32.jar <br>slf4j-api-2.0.7.jar<br> etc<br>
**DMBS** : MySQL 8.0<br>
**Tool** : Eclipse IDE 2023-06, Mysql Workbench 8.0.21, HeidSQL 12.5 ,Git 2.41.0 ,Github
<br>

<h1>프로젝트를 하면서 느낀 점</h1>

### 느낀점

다른 팀과 차별성을 두기 위해 판매자 페이지와 관리자 페이지를 따로 나누어 작업하였습니다.

덕분에 처음 팀 프로젝트를 하면서 클론코딩이 아닌 팀의 의견이 적극적으로 들어간 결과물을 만들 수 있었던 것 같습니다.

수업과정에서 배운 것과는 다르게 다양한 오류와 실패를 겪으면서 새로운 지식과 알던 부분을 더 확실히 알게 된 계기가 되었습니다.

- JDBC 프로그래밍

  JDBC 드라이버를 이용하여 순수 자바프로그래밍으로 데이터베이스 연동을 했기 때문에 코드를 짜는 데 효율성이 떨어지는 것을 느꼈습니다.

  물론 데이터베이스 커넥션 풀을 이용하며 모듈화를 시키긴 했지만 여전히 불필요한 반복 작업이 많았고 재사용성과 확장성이 부족한 것 같다고 느꼈습니다.

  다음 프로젝트를 할 때는 MyBatis나 JPA를 이용한 데이터베이스 연동을 통해 좀 더 효율적으로 할 수 있었으면 좋겠습니다.

  그렇지만 이 경험을 통해 데이터베이스 연동에 대한 지식을 얻게 되어 ORM과 같은 현재 공부하고 있는 기술에 대한 이해에도 도움이 될 것으로 보입니다.

- 커뮤니케이션과 작업 분류의 중요성

  어려운 문제를 마주했을 때 함께 회의하며 해결 방안에 대해 이야기하면서 팀원들과의 협업과 도움이 중요하단 것을 한 번 더 깨닫게 되었습니다.

  깃허브를 사용하면서 기능의 연관성 때문에 생기는 공통 클래스 작업에 머지를 할 때 충돌 경험이 있었고 그 부분에 대해서 매일 함께 팀원들과 회의를 하며

  하루에 작업할 파트를 정확하게 계획하고 작업하였습니다.




### 어려웠던 점과 해결방법



- AJAX를 이용한 동적화면 구현

  상품등록 시 1차 카테고리를 선택했을 때 1차 카테고리에 해당하는 2차카테고리가 조회 되도록 하는 기능과 파일 업로드 시 카테고리별로 경로를 설정할 수 있도록 구현을 하고 싶었습니다.

  ajax를 이용하여 cate1의 값이 변할 때 jsonData로 cate1의 값을 서버로 넘겨 해당하는 cate2의 리스트를 조회한 후 append와 each를 이용해 list를 출력했습니다.

    ```java
    <script>
        function changeSelect() {
            const selectValue = $('#selectBox').val();
    
            const jsonData = {
                "selectValue": selectValue
            };
    
            $.ajax({
                url: '/Kmarket/seller/product/cate2.do',
                type: 'GET',
                data: jsonData,
                dataType: 'json',
                success: function(data) {
                    console.log(data);
    
                    const cate2Select = $('#cate2');
                    cate2Select.empty(); // 기존 옵션을 모두 제거합니다.
    
                    // 새로운 옵션 추가
                    cate2Select.append($('<option>', {
                        value: '',
                        text: '2차 분류 선택',
                        disabled: 'disabled',
                        selected: 'selected'
                    }));
    
                    // 데이터를 이용하여 옵션을 동적으로 생성
                    $.each(data, function(index, item) {
                        cate2Select.append($('<option>', {
                            value: item.cate2,
                            text: item.c2Name
                        }));
                    });
                }
            });
        }
        
    </script>
    ```


- 파일 업로드 경로 설정

  파일 업로드를 할 때 MultipartRequest를 이용해 경로 설정을 먼저 해준 뒤 파일 업로드를 하고, 이후 파라미터 값들을 받아오는 작업을 해주어야 하는데, cate2를 선택했을 때, form태그의 action 속성의 경로를 cate1과 cate2의 값을 파라미터로 넘겨주는 주소로 변경해준 다음 cate1과 cate2 값을 HttpServletRequest를 이용하여 받아와 파일 업로드를 하고, formData를 doPost로 받아올 수 있도록 하였습니다.<br>

![Untitled](https://github.com/jeongminchoi1017/Project/assets/153606946/68c3d2b0-8e14-4b18-97e0-4470d5c02de5)

```java
$(function(){
    	// formData를 서버로 전달할 때 선택한 cate1과 cate2의 값을 전달
    	 
    	$('select[name=prodCate2]').change(function(){
    		
    		let cate1 = $('select[name=prodCate1]').val();
    		let cate2 = $(this).val();
    		
    		
    		let actionUrl = "/Kmarket/seller/product/register.do?cate1="+cate1+"&cate2="+cate2;
    		$('#formRegister').attr('action', actionUrl);
    		
    		
    	});
    	
    });
```
