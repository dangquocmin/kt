<template>
  <form-element>
    <fieldset class="k-form-fieldset">
      <div class="row">
        <div class="col-4">
          <field
            :id="'fullName'"
            :name="'fullName'"
            :label="'Mã chương'"
            :component="'myTemplate'"
            :hint="'Nhập mã chương'"
            :validator="nameValidator"
          >
            <template v-slot:myTemplate="{ props }">
              <forminput
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              />
            </template>
          </field>

          <field
            :id="'email'"
            :name="'email'"
            :label="'Họ tên người: Nhận/nộp tiền'"
            :hint="'Họ tên người: Nhận/nộp tiền'"
            :component="'myTemplate'"
            :validator="emailValidator"
          >
            <template v-slot:myTemplate="{ props }">
              <forminput
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              ></forminput>
            </template>
          </field>
        </div>
        <div class="col-4">
          <field
            :id="'arrivalDate'"
            :name="'arrivalDate'"
            :label="'Ngày tháng'"
            :hint="'Ngày tháng'"
            :component="'myTemplate'"
            :validator="arrivalDateValidator"
          >
            <template v-slot:myTemplate="{ props }">
              <formdatepicker
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              ></formdatepicker>
            </template>
          </field>
          <field
            :id="'fullName'"
            :name="'fullName'"
            :label="'Địa chỉ'"
            :component="'myTemplate'"
            :validator="nameValidator"
          >
            <template v-slot:myTemplate="{ props }">
              <formtextarea
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              ></formtextarea>
            </template>
          </field>
        </div>
        <div class="col-4">
          <field
            :id="'guestsCount'"
            :name="'guestsCount'"
            :label="'Tổng số tiền'"
            :hint="'Tổng số tiền muốn nhập'"
            :format="'n0'"
            :component="'myTemplate'"
            :validator="guestsValidator"
          >
            <template v-slot:myTemplate="{ props }">
              <formnumerictextbox
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              ></formnumerictextbox>
            </template>
          </field>
          <field
            :id="'comments'"
            :name="'comments'"
            :label="'Còn lại'"
            :component="'myTemplate'"
            :disabled="true"
            :hint="'Tổng số tiền còn lại'"
          >
            <template v-slot:myTemplate="{ props }">
              <forminput
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              />
            </template>
          </field>
          <kbutton type="submit" :disabled="!kendoForm.allowSubmit">
            Submit
          </kbutton>
        </div>
      </div>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "../../../components/FormInput.vue";
import { Button } from "@progress/kendo-vue-buttons";

import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
} from "./validators";

const genders = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
export default {
  components: {
    field: Field,
    "form-element": FormElement,
    forminput: FormInput,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      termsValidator,
      emailValidator,
      nameValidator,
      phoneValidator,
      guestsValidator,
      nightsValidator,
      arrivalDateValidator,
    };
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
    },
  },
};
</script>