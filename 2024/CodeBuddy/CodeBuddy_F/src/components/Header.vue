<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin Menu (어드민만 접근(보이게) 가능하게 바꿀거임)
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">112</a></li>
              <li><a class="dropdown-item" href="#">Notice</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">User management</a></li>
            </ul>
          </li>
        </ul>
        <div class="float">
          <button class="btn btn-outline-success login" type="button" href="#">로그인</button>
          <button class="btn btn-outline-success register" type="button" href="#">회원가입</button>
        </div>
        <form class="d-flex float">
          <input class="form-control me-2 SearchTxt" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success SearchBtn" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  h1 {
    text-decoration: underline;
  }
  
  .navbar {
     --bs-bg-opacity: 1;
     background-color: #ffb733;
   }
  button {
    background-color: #f8f8f8;
    color: black;
    border-color: #ffb733;
  }
  .login, .register  {
    margin-right: 10px;
  }


  .float  {
    
    float: right;
  }
  
</style>