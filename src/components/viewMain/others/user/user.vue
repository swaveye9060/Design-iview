<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick" transfer>
      <Avatar :src="userAvator" />
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  props: {
    userAvator: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleClick() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
        // localStorage.removeItem("token");
        localStorage.removeItem("menuList"); // 全部清空
        sessionStorage.removeItem("token"); // 全部清空
        sessionStorage.removeItem("menu"); // 全部清空
        this.$router.push("/");
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  &-avator-dropdown {
    cursor: pointer;
    display: inline-block;
    // height: 64px;
    vertical-align: middle;
    // line-height: 64px;
  }
}
</style>