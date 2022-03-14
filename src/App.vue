<template>
  <div>
    <kendo-menu :items="items" @select="onSelect" />
    <router-view />
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import "bootstrap/scss/bootstrap.scss";

export default {
  name: "App",
  components: { "kendo-menu": Menu },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          data: {
            path: "/",
          },
        },
        {
          text: "Chứng từ",
          data: {
            path: "/about",
          },
          items: [
            {
              text: "Chứng từ & TT cá nhân",
              data: {
                path: "/about/team",
              },
              items: [
                {
                  text: "Nhập số liệu",
                  data: {
                    path: "/about/team",
                  },
                  items: [
                    {
                      text: "Nhập số liệu",
                      data: {
                        path: "/ctkt/ctkt",
                      },
                    },

                    {
                      text: "Nhập số liệu lương",
                      data: {
                        path: "/ctkt/ctkt",
                      },
                    },
                  ],
                },
              ],
            },
            {
              text: "Nhập số liệu",
              data: {
                path: "/ctkt/nsl",
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(e) {
      this.$router.push(e.item.data);
    },
  },
};
</script>

<style>
</style>