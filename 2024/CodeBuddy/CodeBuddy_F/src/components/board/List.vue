<script setup>

</script>

<template>
  <div class="container">
    <!--  Search  -->
    <div class="input-group mb-3 mt-3">
      <input type="text" class="form-control" placeholder="검색함 해바라" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-warning" type="button" id="button-addon2">검색</button>
    </div>
    <!--  Content  -->
    <table class="table">
      <thead>
      <tr>
        <th scope="col">글번호</th>
        <th scope="col">제목</th>
        <th scope="col">글쓴이</th>
        <th scope="col">작성일</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr>
        <th scope="row">1</th>
        <td>뷰 힘들다</td>
        <td>나다</td>
        <td>99</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>글제목</td>
        <td>우앙</td>
        <td>19</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>글쓰니</td>
        <td>33</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>이순신</td>
        <td>거북선</td>
        <td>47</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>장</td>
        <td>보고 왔다</td>
        <td>61</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>오만원줘라</td>
        <td>신사임당</td>
        <td>22</td>
      </tr>
      </tbody>
    </table>
    <!--  Button  -->
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-warning me-md-2" type="button">삭제</button>
      <button class="btn btn-warning me-md-2" type="button">글쓰기</button>
    </div>

    <!--  Page  -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item active" aria-current="page">
          <span class="page-link">1</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
</style>