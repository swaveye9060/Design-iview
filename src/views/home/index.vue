<template>
  <section>
    <!-- <Button @click="handleLoginOut" type="primary" long>退出登录</Button> -->
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
  methods: {
    handleLoginOut() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
        localStorage.removeItem("token");
        this.$router.push("/");
      }, 2000);
    },
  },
};
</script>

<style>
</style>