<style lang="less" scoped>
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
                @keyup.enter.native="handleSubmit"
              >
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import menuList from "@/mock/menuData/index";
export default {
  name: "login",
  components: {},

  data() {
    return {
      // 菜单数据
      menuList: menuList, // 本地模拟数据
      menuListApiData: [], // 后台返回数据
      // 表单
      form: {
        userName: "Design_admin",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //  this.$router.push 有接口就写入登录接口里面
          localStorage.setItem("token", JSON.stringify(this.form));
          this.$router.push({
            path: "/home",
          });

          // 菜单
          this.getMenuList();
        }
      });
    },

    // 获取菜单
    getMenuList() {
      // 通过接口获取菜单数据
      this.menuListApiData = $mockMenuList
        ? this.menuList
        : this.menuListApiData;

      // console.log($mockMenuList, this.menuListApiData, 333);
      localStorage.setItem("menuList", JSON.stringify(this.menuListApiData));
      if (this.menuListApiData && this.menuListApiData.length < 1) {
        console.error("菜单数据返回出错! 或者使用本地菜单~");
        localStorage.clear();
        this.$router.push({
          path: "/",
        });

        this.$Modal.error({
          title: "错误",
          content: "菜单数据返回出错! 请排查~",
        });
      }
    },
  },
};
</script>
