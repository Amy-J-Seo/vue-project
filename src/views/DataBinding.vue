<template>
  <div>
    <div>
      <h2>Hello, {{ title }}</h2>
      <input type="text" v-model="valueModel" />
      <hr />
      <select v-model="city">
        <option value="02">Seoul</option>
        <option value="053">Daegu</option>
        <option value="064">Jeju</option>
      </select>
    </div>
    <div>
      <label for="seoul">
        <input
          type="checkbox"
          id="seoul"
          v-model="checked"
          value="seoul"
        />Seoul
      </label>
      <label for="daegu">
        <input
          type="checkbox"
          id="daegu"
          v-model="checked"
          value="daegu"
        />Deagu
      </label>
      <label for="jeju">
        <input type="checkbox" id="jeju" v-model="checked" value="jeju" />Jeju
      </label>
      <br />
      <span>Checked areas:{{ checked }}</span>
    </div>
    <div>
      <input type="text" v-model="yourName" />
      <br />
      {{ yourName }}
      <button v-bind:disabled="yourName == ''">Click me</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataBinding",
  components: {},
  data() {
    return {
      yourName: "",
      title: "Hambo",
      valueModel: "this is value",
      city: "064",
      checked: [],
    };
  },
  methods: {},
  created: {},
  watch: {},
};
</script>
<style scoped></style>
