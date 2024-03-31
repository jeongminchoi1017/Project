<script setup>
</script>

<template>
  <div class="container">
    <form>
      <div class="mb-3 mt-3">
        <label for="exampleInputEmail1" class="form-label" readonly="">제목</label>
        <textarea class="form-control" id="exampleFormControlTextarea1 title" rows="3" readonly>글 제목이당 ㅎㅋㅎㅋ</textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label" readonly="">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1 content" rows="3" readonly>글 내용이당 ㅎㅋㅎㅋ</textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-warning me-md-2" type="submit">목록</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>