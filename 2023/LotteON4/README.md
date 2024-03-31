# LotteON

<div align=center>


</div>
<h1>🛒프로젝트 소개</h1><br>
롯데e-커머스 LOTTE ON 쇼핑몰 개발
<br>
<h1>⏱ 프로젝트 기간</h1><br>
2023년 10월 30일 ~ 2023년 11월 10일(1일 8H, 총 10일)
<br>
<h1>👫 멤버소개</h1>

| 이름  |직책|역할|
|:----|:----|:----|
| 하민수 |팀장|고객센터 페이지/기능 구현, git 관리, 팀원에 대한 분업 및 관리|
| 손영우 |팀원|관리자 페이지/기능 구현, 회사 소개 페이지|
| 정영재 |팀원|상품관련 페이지/기능 구현|
| 최정민 |팀원|유저 관련 페이지/기능 구현, 보고서 작성|
<br>
<h1>🌟프로젝트 메인 페이지 소개</h1><br>

![LotteOn 메인페이지](https://github.com/bllor/Project2023/assets/136154061/99dc1a6e-72b0-43fe-b49d-dc5c7b6dd123)

<h1>🌝본인 주요 개발기능</h1>

**1.회원관련**<br>
**1)회원가입**: 판매자와 일반 회원 가입에 필요한 항목을 thymeleaf 조건문으로 나눠서 출력, 유효성 및 중복 검사 기능 구현<br>
**2)홈로그인/로그아웃**: Security 라이브러리를 이용한 인증과 인가 처리 <br>
<br>
**2.myPage**<br>
**1)주문내역**: 아이디에 맞는 주문 내역 조회, 기간별 조회 처리, 수취확인 및 상품평 쓰기 팝업창 띄우기<br>
<br>
**3.서비스 기획 및 방향성 설정**
<br>
**4.AWS 서버에 배포** : AWS EC2 서버에 직접 배포
<h1>🖥개발 환경</h1>

**OS** : Window10<br>
**Browser** : Chorme 117.0.5938<br>
**Language(Server)** : Java17, Spring Boot, Spring Security, Spring Data JPA, Mybatis 
**Language(Client)** : HTML5, CSS3, JavaScript(Es6), jQuery3.1
**Library** : <br>
spring-boot-starter-data-jpa<br>
spring-boot-starter-oauth2-client<br>
spring-boot-starter-security <br>
spring-boot-starter-thymeleaf<br>
spring-boot-starter-web<br>
thymeleaf-extras-springsecurity6 <br>
lombok<br>
spring-boot-devtools <br>
mysql-connector-j<br>
thymeleaf-layout-dialect <br>
modelmapper <br>
spring-boot-starter-mail <br>
spring-boot-starter-data-jdbc <br>
mybatis-spring-boot-starter:3.0.2 <br>
thymeleaf-extras-java8time:3.0.4.RELEASE <br>
**DMBS** : MySQL 8.0<br>
**Tool** : IntelliJ IDEA 2023-02-04, Mysql Workbench 8.0.21, HeidSQL 12.5, Git 2.41.0, Github
<br>

<h1>프로젝트를 하면서 느낀 점</h1>

### 느낀점

SpringBoot를 이용하여 팀 프로젝트를 했습니다.
MyBatis와 JPA를 동시에 사용하여 데이터베이스를 자동 연동함으로써 좀 더 시간적 효율을 얻을 수 있었던 것 같습니다.
사용자 페이지 기능을 개발하면서 Spring Security에 자세히 배울 수 있는 경험이었습니다.
또한 AWS EC2 서버를 이용한 직접 배포에 대해서 배울 수 있었습니다.
이전 프로젝트보다 한 단계 기술적으로 성장할 수 있었던 프로젝트라고 생각합니다.

- MyBatis와 JPA 이용

  JDBC의 길고 반복적인 코드와 좋지 못한 유연성을 해결하기 위해 MyBatis와 JPA를 이용하였습니다.
  기본 CRUD의 경우 쿼리문을 직접 작성하지 않아 간단하게 사용할 수 있고 컴파일 오류로 확인할 수 있는 JPA를 이용하고,
  JPA의 경우 단독으로 사용하기에 복잡한 연산은 무리이므로 Join문과 같은 복잡한 쿼리문이 필요할 때는 MyBatis를 사용하여 최적화된 쿼리를 구현하였습니다.
  JPA와 MyBatis를 사용하면서 ORM 기술에 대해 공부할 수 있는 기회가 되었고, 특히 JPA를 사용하면서 entity와 연관관계 관리하는 방법에 대해 배울 수 있었습니다.

- Security를 이용한 인증/인가 방식
  로그인과 로그아웃, 그리고 페이지에 접근할 수 있는 role에 맞게 인가 처리해야 하는데, Spring Security는 Servlet Filter 기반으로 동작하고, 다양한 기능들을 Filter로 제공하여 인증과 인가처리와 보안 관련 처리를 할 수 있습니다. UsernamePasswordAuthenticationFilter는 인증 처리, FilterSecurityInterceptor는 인증에 성공했을 때 리소스에 접근할 권한이 있는지 검증하는 filter입니다. 내부적으로 실행되는 작업이기 때문에 이해하는 데 어려움이 많았지만 이번 프로젝트를 하면서 security 라이브러리에 대해 배울 수 있는 기회가 되었습니다.

### 어려웠던 점과 해결방법



- 기간별 조회시 조건

  기간별 조회 시 어떤 클래스에서 조건을 붙여 분기해야하는지 고민이 많았습니다. 하드코딩이 되지 않고 유지보수가 쉬운 방식을 이용하고 싶었기 때문에 오랜 시간 고민을 했던 것 같습니다. 여러가지 방법이 있고, 멘토링을 하면서 어떻게 하는지는 개발자의 성향에 다른 것이라는 얘기를 들었고 저는 제가 생각했던 방향인 파라미터로 보낸 dateType을 받아온 뒤 시작 날짜를 dto에서 메서드를 이용해 연산하는 방법을 선택하여 기능을 구현했습니다.

    ```java
    public void getBeginDate(String dateType){
            this.dateType = dateType;
            LocalDate beginDate=null;
            // 현재 날짜와 시간
            LocalDate currentDate = LocalDate.now();
            if(dateType.equals("day7")){
                // 1주일 전 날짜와 시간
                beginDate = currentDate.minusWeeks(1);
            }else if(dateType.equals("day15")){
                // 15일 전 날짜와 시간
                beginDate = currentDate.minusDays(15);
            }else if(dateType.equals("month1")){
                // 한 달 전 날짜와 시간
                beginDate = currentDate.minusMonths(1);
            }else if(dateType.equals("period")){
                beginDate = this.beginDate;
            }else if(dateType.equals("month_0")){
                beginDate = currentDate.withDayOfMonth(1);
                this.endDate = currentDate.with(TemporalAdjusters.lastDayOfMonth());
            }else if(dateType.equals("month_1")){
                beginDate = currentDate.minusMonths(1).withDayOfMonth(1);
                this.endDate = currentDate.minusMonths(1).with(TemporalAdjusters.lastDayOfMonth());
            }else if(dateType.equals("month_2")){
                beginDate = currentDate.minusMonths(2).withDayOfMonth(1);
                this.endDate = currentDate.minusMonths(2).with(TemporalAdjusters.lastDayOfMonth());
            }else if(dateType.equals("month_3")){
                beginDate = currentDate.minusMonths(3).withDayOfMonth(1);
                this.endDate = currentDate.minusMonths(3).with(TemporalAdjusters.lastDayOfMonth());
            }else if(dateType.equals("month_4")){
                beginDate = currentDate.minusMonths(4).withDayOfMonth(1);
                this.endDate = currentDate.minusMonths(4).with(TemporalAdjusters.lastDayOfMonth());
            }
            this.beginDate = beginDate;
        }
    
    ```

  이후 다른 팀의 코드를 보면서 어떤 방법이 있는지 공부하였고, 그중 javascript를 이용하여 ajax를 이용한 방식에 대해서 배울 수 있었습니다. 좀 더 확장성이 가능하고 유지보수하기 쉬운 방법이라는 생각이 들어 다음에는 그 방식을 이용해보고 싶습니다.