<template>
  <section>
    home页面
    <Card :bordered="false" shadow>
      <HelloWorld />
      <hr />
      <HelloWorld />
      <hr />
      <HelloWorld />
      <hr />
      <HelloWorld />
      <hr />
    </Card>
  </section>
</template>

<script>
export default {
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
  },
  methods: {},
};
</script>

<style>
</style>