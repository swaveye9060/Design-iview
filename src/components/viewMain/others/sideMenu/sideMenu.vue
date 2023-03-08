<template>
  <section class="side-menu">
    <slot></slot>
    <Menu
      ref="menu"
      v-show="!collapsed"
      :open-names="menu.openNames"
      :active-name="menu.activeName"
      theme="dark"
      width="auto"
      accordion
      @on-select="handleSelect"
      @on-open-change="handleOpenChang"
    >
      <!-- 展开 -->
      <template v-for="item in menuList">
        <Submenu
          v-if="item.children && item.children.length > 0"
          :name="`${item.name}&${item.title}`"
          :key="`menu-${item.name}`"
        >
          <template slot="title">
            <Icon :type="item.icon"></Icon>
            {{ item.title }}
          </template>
          <template v-for="item2 in item.children">
            <Submenu
              v-if="item2.children && item2.children.length > 0"
              :name="`${item2.name}&${item2.title}`"
              :key="item2.name + 'item2'"
            >
              <template slot="title">
                <Icon :type="item2.icon"></Icon>
                {{ item2.title }}
              </template>
              <MenuItem
                v-for="item3 in item2.children"
                :key="item3.name + 'item3'"
                :name="`${item3.name}&${item3.title}`"
              >
                {{ item3.title }}
              </MenuItem>
            </Submenu>
            <MenuItem
              v-else
              :key="item2.name + 'item2'"
              :name="`${item2.name}&${item2.title}`"
              >{{ item2.title }}</MenuItem
            >
          </template>
        </Submenu>
        <MenuItem
          v-else
          :name="`${item.name}&${item.title}`"
          :key="`menu-${item.name}`"
        >
          <Icon :type="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </MenuItem>
      </template>
    </Menu>
    <!-- 收起 -->
    <section class="dropdownbox" v-show="collapsed">
      <div v-for="item in menuList" :key="item.name + 'Dropdown'">
        <Dropdown
          trigger="hover"
          placement="right-start"
          transfer
          @on-click="handleSelect"
        >
          <a href="javascript:void(0)">
            <Icon :type="item.icon" :size="20" color="#fff"></Icon>
          </a>
          <DropdownMenu slot="list">
            <template v-if="item.children && item.children.length > 0">
              <template v-for="item2 in item.children">
                <Dropdown
                  v-if="item2.children && item2.children.length > 0"
                  :key="item2.name + 'Dropdown'"
                  trigger="hover"
                  placement="right-start"
                >
                  <DropdownItem>
                    {{ item2.title }}
                    <Icon type="ios-arrow-forward"></Icon>
                  </DropdownItem>
                  <DropdownMenu slot="list">
                    <DropdownItem
                      v-for="item3 in item2.children"
                      :key="item3.name + 'DropdownMenu'"
                      :name="`${item3.name}&${item3.title}`"
                    >
                      {{ item3.title }}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem
                  v-else
                  :key="item2.name + 'Dropdown'"
                  :name="`${item2.name}&${item2.title}`"
                >
                  {{ item2.title }}
                </DropdownItem>
              </template>
            </template>
            <DropdownItem v-else :name="`${item.name}&${item.title}`">{{
              item.title
            }}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </section>
  </section>
</template>

<script>
import menuList from "@/mock/menuData/index";

export default {
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  data() {
    return {
      menu: {
        openNames: JSON.parse(localStorage.getItem("menu"))
          ? JSON.parse(localStorage.getItem("menu")).openNames
          : ["home&主页"],
        activeName: JSON.parse(localStorage.getItem("menu"))
          ? JSON.parse(localStorage.getItem("menu")).activeName
          : "home&主页",
      },
      // 菜单数据
      menuList: menuList,
    };
  },

  created() {
    if (this.menu.activeName === "home&主页")
      this.menu.openNames = ["home&主页"];
  },

  methods: {
    handleOpenChang(openNames) {
      // console.log(openNames, 111);
      this.menu.openNames = openNames;
    },

    handleSelect(name) {
      if (!name) return;
      // console.log(name, 33);
      let headerTitle = name.split("&")[1];
      this.$emit("on-select-title", headerTitle);
      //
      this.menu.activeName = name;
      localStorage.setItem("menu", JSON.stringify(this.menu));
    },
  },
};
</script>

<style lang="less">
@Sider-bg: #001529; // 侧边栏背景色
@SiderMenu-bg: #000c17; // 子菜单背景色
@SiderMenu-active-bg: #2d8cf0; // 子菜单背景色

.ivu-select-dropdown.ivu-dropdown-transfer {
  overflow: initial;
  left: 64px !important;
}

.side-menu {
  .dropdownbox {
    text-align: center;

    .ivu-dropdown {
      padding: 6px 20px;
    }
  }

  // 菜单
  .ivu-menu-dark {
    background-color: @Sider-bg !important;
    // 单个菜单
    .ivu-menu-item:hover {
      background-color: @Sider-bg !important;
    }
    .ivu-menu-item-selected {
      background-color: @SiderMenu-bg !important;
    }

    // 多层菜单
    .ivu-menu-submenu {
      background-color: @Sider-bg !important;
      &.ivu-menu-opened {
        .ivu-menu-submenu-title {
          background-color: @Sider-bg !important;
        }

        .ivu-menu,
        .ivu-menu .ivu-menu-submenu-title {
          background-color: @SiderMenu-bg !important;
        }
      }
      .ivu-menu-submenu-title:hover {
        background-color: @Sider-bg !important;
      }
    }
  }
}
</style>