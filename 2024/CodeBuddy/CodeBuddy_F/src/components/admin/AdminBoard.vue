<!-- PostDetail.vue -->

<template>
  <div>
    <b-container>
      <b-row class="boardMain">
        <b-row>
          <h2>{{ post.cate }}</h2>
        </b-row>
        <b-col>
          <h6>글 제목: {{ post.title }}</h6>
          <h6>글 쓴이: {{post.id}}</h6>
          <b-card>
            <b-card-text v-html="formattedContent"></b-card-text>
          </b-card>
          <b-button variant="outline-primary" style="float: right"> 목록</b-button>
          <b-button variant="outline-primary" style="float: right"> 삭제</b-button>
        </b-col>
      </b-row>
      <b-row class="boardComment">
        <b-col>
          <div>
            <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>
  
<!--            <pre class="mt-3 mb-0">{{ text }}</pre>-->
          </div>
            <b-button variant="outline-primary" style="float: right"> 댓글 등록</b-button>
<!--            <b-button variant="outline-primary" style="float: right"> 어디 써먹어야 하려나 </b-button>  -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        cate: "'119' or 'notice' or 'Management'",
        id: 1,
        title: '임시 데이터',
        content:
            '한산섬 달 밝은 밤에 \n' +
            '수루(적의 동정을 살피는 누각)에 혼자 앉아,\n' +
            '큰 칼 옆에 차고\n' +
            '나라를 위한 깊은 시름에 빠질 때에\n' +
            '어디선가 들려오는 한 줄기 피리 소리가\n' +
            '나의 창자를 끊는 듯싶구나',
      },
      text: ''
    };
  },
  computed: {
    formattedContent() {
      // 개행을 <br> 태그로 변경
      return this.post.content.replace(/\n/g, '<br>');
    }
  }
};
</script>

<style scoped>

.container {
  margin: 10%;
}

h2 {
  margin-bottom: 40px;
}

button {
  margin: 15px 0 0 10px;
}

.boardComment {
  margin-top: 50px;
}
</style>