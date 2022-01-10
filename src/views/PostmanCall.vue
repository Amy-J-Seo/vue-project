<template>
  <div>
    <div>
      <table>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Ip</th>
        </tr>
        <tr v-for="person in members" :key="person.id">
          <td>
            <input
              type="radio"
              v-model="selected"
              :value="person"
              @change="showId"
            />
          </td>
          <td>{{ person.id }}</td>
          <td>{{ person.first_name }} {{ person.last_name }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.gender }}</td>
          <td>{{ person.ip_address }}</td>
        </tr>
      </table>
    </div>
    <div>
      <button @click="showDetail">
        Check for the details of {{ selected.first_name }}
      </button>
      <detail-page
        v-show="showDetailComponent"
        :person="selected"
        ref="page"
        @send-message="sendMessage"
      />
    </div>
    <div>
      <button @click="changeChildData">change child message</button>
      {{ messageFromChild }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DetailPage from "./DetailPage.vue";

export default {
  name: "",
  components: { DetailPage },
  data() {
    return {
      members: [],
      selected: {},
      showDetailComponent: false,
      messageFromChild: "",
    };
  },
  computed: {},
  methods: {
    async getList() {
      const response = await axios.get(
        "https://c25954ed-7e10-48e8-b41f-ff9a3f2dcf74.mock.pstmn.io/list"
      );
      this.members = response.data;
    },
    showId() {
      console.log(this.selected);
    },
    showDetail() {
      this.showDetailComponent = !this.showDetailComponent;
      console.log(this.showDetailComponent);
    },
    changeChildData() {
      this.$refs.page.message = "changed from parent";
    },
    sendMessage(data) {
      console.log(data);
      this.messageFromChild = data;
    },
  },
  created() {
    this.getList();
  },
  mounted() {
    console.log(this.$refs.page);
    this.$refs.page.$refs.hidebtn.click();
    this.$refs.page.callFromParent();
  },
  watch: {},
};
</script>
<style scoped>
table {
  border-collapse: left;
  padding: 8px;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
