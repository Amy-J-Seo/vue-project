<template>
  <slot-modal-layout>
    <template v-slot:header><h1>Popup title</h1></template>
    <template v-slot:default>
      <p>pop up content1</p>
      <p>pop up content2</p>
    </template>
    <template v-slot:footer>
      <button>close</button>
    </template>
  </slot-modal-layout>
</template>
<script>
import SlotModalLayout from "./SlotModalLayout.vue";
export default {
  name: "",
  components: { SlotModalLayout },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created: {},
  watch: {},
};
</script>
<style scoped></style>
