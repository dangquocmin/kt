<template>
  <form-element>
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend"><h1>Nhập số liệu</h1></legend>
    
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  components: {
    "form-element": FormElement,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {};
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
    },
  },
};
</script>