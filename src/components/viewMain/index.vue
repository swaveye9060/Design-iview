<style lang="less" scoped>
@import "./index.less";
</style>

<template>
  <Layout style="height: 100%" class="main">
    <Sider
      hide-trigger
      collapsible
      :width="256"
      :collapsed-width="64"
      v-model="collapsed"
      class="left-sider"
      :style="{ overflow: 'hidden' }"
    >
      <sideMenu
        :collapsed="collapsed"
        @on-select-title="headerTitle = $event"
      ></sideMenu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <headerBar
          @on-coll-change="collapsed = !collapsed"
          :headerTitle="headerTitle"
        >
          <user :userAvator="userAvator" />
        </headerBar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <router-view></router-view>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  components: {
    user: () => import("./others/user/user.vue"),
    headerBar: () => import("./others/headerBar/headerBar.vue"),
    sideMenu: () => import("./others/sideMenu/sideMenu.vue"),
  },
  data() {
    return {
      // 展开/收起
      collapsed: false,
      // user
      num: "02",
      userAvator: "",
      headerTitle: "",
    };
  },

  created() {
    this.userAvator = require(`../../assets/images/user/${this.num}.jpg`);

    // 获取title
    this.headerTitle = (
      JSON.parse(localStorage.getItem("menu"))
        ? JSON.parse(localStorage.getItem("menu")).activeName
        : "home&主页"
    ).split("&")[1];
  },

  methods: {},
};
</script>
