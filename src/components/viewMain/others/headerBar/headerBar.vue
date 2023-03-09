<template>
  <section class="headerbar">
    <section class="left">
      <div
        class="coll"
        @click="
          $emit('on-coll-change');
          isShow = !isShow;
        "
      >
        <Icon
          class="sider-trigger"
          :class="{ 'is-show': isShow }"
          type="md-menu"
          size="26"
        />
      </div>
      <div class="breadcrumb">
        <BreadcrumbItem to="">{{ headerTitle }}</BreadcrumbItem>
      </div>
    </section>
    <div class="user">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headerTitle: String,
  },

  data() {
    return {
      isShow: false,
    };
  },

  created() {},
};
</script>

<style lang="less" scoped>
.headerbar {
  display: flex;
  justify-content: space-between;
  align-items: start;

  .left {
    display: flex;

    .coll {
      cursor: pointer;

      .sider-trigger {
        transform: translateY(2.6px);
      }

      .is-show {
        transform: translateY(2.6px) rotateY(120deg);
      }
    }

    .breadcrumb {
      margin-left: 20px;
      font-weight: 700;
      font-size: 18px;
    }
  }
  .user {
    margin-right: 20px;
    transform: translateY(-1px);
  }
}
</style>