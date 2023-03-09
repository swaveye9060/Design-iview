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
                :to="item3.path"
              >
                {{ item3.title }}
              </MenuItem>
            </Submenu>
            <MenuItem
              v-else
              :key="item2.name + 'item2'"
              :name="`${item2.name}&${item2.title}`"
              :to="item2.path"
            >
              {{ item2.title }}
            </MenuItem>
          </template>
        </Submenu>
        <Submenu
          v-else
          :key="`menu-${item.name}`"
          :name="`${item.name}&${item.title}`"
          class="xxx"
        >
          <template slot="title">
            <router-link class="yyy" @click="xxx" :to="item.path">
              <Icon :type="item.icon"></Icon>
              {{ item.title }}
            </router-link>
          </template>
          <MenuItem :name="`${item.name}&${item.title}`"></MenuItem>
        </Submenu>
        <!-- <MenuItem
          v-else
          :name="`${item.name}&${item.title}`"
          :key="`menu-${item.name}`"
          :to="item.path"
        >
          <Icon :type="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </MenuItem> -->
      </template>
    </Menu>
    <!-- 收起 -->
    <section class="dropdownbox" v-show="collapsed">
      <div v-for="item in menuList" :key="item.name + 'Dropdown'">
        <Dropdown
          trigger="hover"
          placement="right-start"
          transfer
          transfer-class-name="transfer-class-nam-handle-open"
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
                    <div class="DropdownItem-2">
                      {{ item2.title }}
                      <Icon type="ios-arrow-forward"></Icon>
                    </div>
                  </DropdownItem>
                  <DropdownMenu slot="list">
                    <DropdownItem
                      v-for="item3 in item2.children"
                      :key="item3.name + 'DropdownMenu'"
                      :name="`${item3.name}&${item3.title}`"
                    >
                      <router-link :to="item3.path">
                        {{ item3.title }}
                      </router-link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem
                  v-else
                  :key="item2.name + 'Dropdown'"
                  :name="`${item2.name}&${item2.title}`"
                >
                  <router-link :to="item2.path">{{ item2.title }}</router-link>
                </DropdownItem>
              </template>
            </template>
            <DropdownItem v-else :name="`${item.name}&${item.title}`">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </DropdownItem>
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
      console.log(openNames, 111);
      this.menu.openNames = openNames;
    },

    handleSelect(name) {
      console.log(name, 33);
      if (!name) return;
      // console.log(name, 33);
      let headerTitle = name.split("&")[1];
      this.$emit("on-select-title", headerTitle);
      //
      this.menu.activeName = name;
      localStorage.setItem("menu", JSON.stringify(this.menu));
    },

    xxx() {
      console.log(333);
    },
  },
};
</script>

<style lang="less">
@Sider-bg: #001529; // 侧边栏背景色
@SiderMenu-bg: #000c17; // 子菜单背景色
@SiderMenu-active-bg: #2d8cf0; // 子菜单背景色

// 弹出层
.transfer-class-nam-handle-open {
  overflow: initial;
  left: 64px !important;
  .ivu-dropdown-menu {
    .ivu-dropdown-item {
      padding: 0;
      a {
        display: inline-block;
        width: 100%;
        padding: 7px 16px;
        color: #515a6e !important;
      }
    }

    .ivu-dropdown {
      .DropdownItem-2 {
        width: 100%;
        padding: 7px 16px;
      }
    }
  }
}

.side-menu {
  // 收起菜单-图标
  .dropdownbox {
    text-align: center;

    .ivu-dropdown {
      padding: 6px 20px;
    }
  }

  // 展开菜单
  .ivu-menu-dark {
    background-color: @Sider-bg !important;

    // 单个菜单-多层转单
    .xxx {
      .ivu-menu-submenu-title {
        // background-color: red;
        padding: 0;
        a {
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            color: #fff;
          }
        }
        .yyy {
          display: block;
          padding: 14px 24px;
        }
        i {
          margin-right: 8px;
        }
        .ivu-icon-ios-arrow-down {
          display: none;
        }
      }
      &.ivu-menu-opened {
        a {
          color: @SiderMenu-active-bg;
          background-color: @SiderMenu-bg;
          &:hover {
            color: @SiderMenu-active-bg;
          }
        }
      }
    }

    // 单个菜单
    .ivu-menu-item:hover {
      background-color: @Sider-bg !important;
    }
    .ivu-menu-item-selected,
    .ivu-menu-item-selected:hover {
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