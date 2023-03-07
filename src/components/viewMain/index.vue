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
      <sideMenu :collapsed="collapsed"></sideMenu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <headerBar @on-coll-change="collapsed = !collapsed">
          <user :userAvator="userAvator" />
        </headerBar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <router-view></router-view>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import menuList from "@/mock/data/index";
console.log(menuList, 333);
export default {
  components: {
    user: () => import("./others/user/user.vue"),
    headerBar: () => import("./others/headerBar/headerBar.vue"),
    sideMenu: () => import("./others/sideMenu/sideMenu.vue"),
  },
  data() {
    return {
      menuList: menuList,
      collapsed: false,
      // minLogo,
      // maxLogo,
      // isFullscreen: false,

      // menuList: [],
      // theme: "dark",
      // rootIconSize: 20,
      // iconSize: 16,
      // accordion: true,
      // activeName: "",
      // openNames: [],

      // openedNames: [],
      // user
      num: "02",
      userAvator: "",
    };
  },

  created() {
    this.userAvator = require(`../../assets/images/user/${this.num}.jpg`);
  },

  methods: {
    handleSelect() {
      // this.$emit("on-select", name);
    },
  },
};
</script>
