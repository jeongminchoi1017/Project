<script>
export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone', accepted: false },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone', accepted: false },
        { id: 3, first_name: 'Barney', last_name: 'Rubble', accepted: false },
        { id: 4, first_name: 'Betty', last_name: 'Rubble', accepted: false },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone', accepted: false },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble', accepted: false },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo', accepted: false },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate', accepted: false },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople', accepted: false }
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
  <div class="overflow-auto">
    <h2>Notice</h2><br>

    <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
    >
      <template v-slot:thead()="{ fields }">
        <th v-for="field in fields" :key="field.key">
          {{ field.label }}
        </th>
        <th>동의</th>
      </template>

      <!-- 사용자 지정 행 컴포넌트 -->
      <template v-slot:tbody-tr="{ item, index }">
        <tr>
          <td v-for="(field, fieldKey) in item" :key="fieldKey">
            {{ field }}
          </td>
          <td>
            <b-form-checkbox
                v-model="item.accepted"
                name="checkbox-{{ index }}"
                value="accepted"
                unchecked-value="not_accepted"
            ></b-form-checkbox>
          </td>
        </tr>
      </template>
    </b-table>

    <b-button variant="outline-primary" style="float: right">공지 작성</b-button>
    <p class="mt-3">현재 페이지: {{ currentPage }}</p>

    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<style scoped>
div {
  margin: 50px;
}

h2 {
  font-family: Impact;
}
</style>