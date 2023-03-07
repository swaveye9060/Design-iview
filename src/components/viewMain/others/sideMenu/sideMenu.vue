<template>
  <section class="side-menu">
    <Menu
      v-show="!collapsed"
      :open-names="openNames"
      :active-name="activeName"
      theme="dark"
      width="auto"
      accordion
    >
      <template v-for="item in menuList">
        <Submenu
          v-if="item.children && item.children.length > 0"
          :name="item.name"
          :key="`menu-${item.name}`"
        >
          <template slot="title">
            <Icon :type="item.icon"></Icon>
            {{ item.title }}
          </template>
          <template v-for="item2 in item.children">
            <Submenu
              v-if="item2.children && item2.children.length > 0"
              :name="item2.name"
              :key="item2.name + 'item2'"
            >
              <template slot="title">
                <Icon :type="item2.icon"></Icon>
                {{ item2.title }}
              </template>
              <MenuItem
                v-for="item3 in item2.children"
                :key="item3.name + 'item3'"
                :name="item3.name"
                >{{ item3.title }}</MenuItem
              >
            </Submenu>
            <MenuItem v-else :key="item2.name + 'item2'" :name="item2.name">{{
              item2.title
            }}</MenuItem>
          </template>
        </Submenu>
        <MenuItem v-else :name="0" :key="`menu-${item.name}`">
          <Icon :type="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </MenuItem>
      </template>
    </Menu>
    <section class="dropdownbox" v-show="collapsed">
      <div v-for="item in menuList" :key="item.name + 'Dropdown'">
        <Dropdown trigger="hover" placement="right-start" transfer>
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
                    >
                      {{ item3.title }}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem v-else :key="item2.name + 'Dropdown'">
                  {{ item2.title }}
                </DropdownItem>
              </template>
            </template>
            <DropdownItem v-else>{{ item.title }}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  data() {
    return {
      openNames: ["test", "test-3"],
      activeName: "test-1",
      //
      menuList: [
        {
          name: "home",
          icon: "ios-navigate",
          title: "主页",
          children: [],
        },
        {
          name: "test",
          icon: "ios-keypad",
          title: "测试菜单 1",
          children: [
            {
              name: "test-1",
              icon: "ios-navigate",
              title: "子菜单 1",
              children: [],
            },
            {
              name: "test-2",
              icon: "ios-navigate",
              title: "子菜单 2",
              children: [
                {
                  name: "test-2-1",
                  icon: "ios-navigate",
                  title: "多层子菜单 1",
                  children: [],
                },
              ],
            },
            {
              name: "test-3",
              icon: "ios-navigate",
              title: "子菜单 3",
              children: [],
            },
          ],
        },
        {
          name: "test02",
          icon: "ios-analytics",
          title: "测试菜单 2",
          children: [
            {
              name: "test02-1",
              icon: "ios-analytics",
              title: "子菜单 1",
              children: [],
            },
            {
              name: "test02-2",
              icon: "ios-analytics",
              title: "子菜单 2",
              children: [],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less">
.ivu-select-dropdown.ivu-dropdown-transfer {
  overflow: initial;
}

.side-menu {
  .dropdownbox {
    text-align: center;

    .ivu-dropdown {
      padding: 6px 20px;
    }
  }
}
</style>