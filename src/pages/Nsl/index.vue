<template>
  <div class="row p-5">
    <div class="col-xs-12 example-col">
      <k-form
        @submit="handleSubmit"
        ref="formRef"
        v-kendo-validator="set"
        @submit.prevent="onSubmit"
      >
        <Header />
        <div class="pt-5">
          <Grid :myValidator="getValidator" />
        </div>
        <div class="pt-5">
          <Footer />
        </div>
      </k-form>
    </div>
  </div>
</template>

<script>
import Header from "./form/Header";
import Footer from "./form/Footer";
import Grid from "./form/Grid";
import { Form } from "@progress/kendo-vue-form";
import kendo from "@progress/kendo-ui";
export default {
  name: "app",
  components: {
    "k-form": Form,
    Grid,
    Header,
    Footer,
  },
  methods: {
    getValidator: function () {
      return kendo.jQuery(this.$refs.formRef).getKendoValidator();
    },
    onSubmit: function (ev) {
      var validator = kendo.jQuery(this.$refs.formRef).getKendoValidator();
      if (validator.validate()) {
        return alert("ok");
      }
      return alert("NG");
    },
  },
};
</script>