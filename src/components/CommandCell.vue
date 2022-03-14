<template>
  <td class="k-command-cell">
    <kbutton :class="removeButtonClass" @click="removeHandler">
      {{ removeText }}
    </kbutton>
  </td>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
export default {
  components: {
    kbutton: Button,
  },
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
  },
  data() {
    return {
      navAttrs: {},
    };
  },
  computed: {
    editText() {
      if (this.$props.dataItem["inEdit"]) {
        return this.$props.dataItem.id ? "Cập nhật" : "Thêm mới";
      } else {
        return "Chỉnh sửa";
      }
    },
    removeText() {
      return "Xóa";
    },
    editButtonClass() {
      return this.$props.dataItem["inEdit"]
        ? "k-grid-save-command"
        : "k-grid-edit-command";
    },
    removeButtonClass() {
      return this.$props.dataItem["inEdit"]
        ? "k-grid-cancel-command"
        : "k-grid-remove-command";
    },
  },
  methods: {
    editHandler: function () {
      const command = this.$props.dataItem["inEdit"] ? "save" : "edit";
      this.$emit(command, { dataItem: this.dataItem });
    },
    removeHandler: function () {
      const command = this.$props.dataItem["inEdit"] ? "cancel" : "remove";
      this.$emit(command, { dataItem: this.dataItem });
    },
  },
};
</script>