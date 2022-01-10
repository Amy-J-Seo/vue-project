<template>
  <div>
    <h1>Computed</h1>
    <h1>Fullname:{{ fullName }}</h1>
    <button @click="changeName">change</button>
  </div>
</template>
<script>
export default {
  name: "Computed",
  components: {},
  data() {
    return {
      firstName: "Hambo",
      lastName: "Park",
      fullName: "",
    };
  },
  computed: {},
  methods: {
    changeName() {
      this.firstName = "foxy";
    },
  },
  created: {},
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
};
</script>
<style scoped></style>
