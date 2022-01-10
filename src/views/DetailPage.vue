<template>
  <div>
    <h1>About... {{ person.first_name }}</h1>
    <p>{{ person.email }}</p>
    <button @click="hideDetailHander" ref="hidebtn">hide details</button>

    <hr />
    <br />
    <h4>{{ message }}</h4>
  </div>
</template>
<script>
export default {
  props: ["person"],
  name: "",
  components: {},
  data() {
    return {
      message: "This is a message from the child",
    };
  },
  computed: {},
  methods: {
    hideDetailHander() {
      console.log("This is occured from parentComponent");
    },
    callFromParent() {
      console.log("this is called from parent");
    },
  },
  created() {},
  mounted() {
    this.$emit("send-message", this.message);
  },
  watch: {},
};
</script>
<style scoped></style>
