<script>

export default {
  setup() {
    return {
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>

<template>
  <div class="main">
    <b-container class="bv-example-row" fluid="xl">
      <b-row>
        <b-col >
          <div class="overflow-auto">
        

            <h4>Notice</h4>

            <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
            ></b-table>
          </div>
        </b-col>
        <b-col>
          <div class="overflow-auto">
            
            <h4>Join Study</h4>

            <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
            ></b-table>
          </div>
        </b-col>
      <b-row class="col">
          <h4 class>Users</h4>
        <p style="border-top: solid 1px #c0b9b9;">Total: 몇명? 여기 별로 맘에 안듬 채팅관련 bootstrap이 없어서 걍 방문자수나 유저 수로 때움<br>
          Today visitors: 몇명?</p>
        <b-list-group style="max-width: 100%;">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
            <span class="mr-auto">BootstrapVue</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto">Super Kitty</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
            <span class="mr-auto">ACME group</span>
          </b-list-group-item>
        </b-list-group>
      </b-row>
      </b-row>
      <b-row>
        <div class="overflow-auto">
          <h4>Job Notice</h4>
          <b-table
              id="my-table"
              :items="items"
              :per-page="perPage"
              :current-page="currentPage"
              small
          ></b-table>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

/*
.main {
  margin: 50px;
}
*/

b-col {
  border: 1px solid blue;
  width: 100%;
}
h4, p{
  font-family: Impact;
}
.col {
  margin: 10px;
  border: 1px solid #c0b9b9;
}
.mr-auto {
  margin-left: 30px;
}

.sub {
  float: right;
}

</style>