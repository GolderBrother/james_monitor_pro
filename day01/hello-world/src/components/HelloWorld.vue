<template>
  <div class="hello">
    <h1 @click="handleClick">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    handleClick() {
      console.log(window.a.b);
    },
  },
};
</script>
