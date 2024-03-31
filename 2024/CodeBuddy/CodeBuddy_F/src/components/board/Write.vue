<script setup>
</script>

<template>
  <div class="container">
    <form>
      <div class="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label">제목</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-warning me-md-2" type="submit">글쓰기</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>