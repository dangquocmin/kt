<template>
  <div>
    <Grid
      ref="grid"
      :sortable="true"
      :take="take"
      :skip="skip"
      :data-items="gridData"
      :edit-field="'inEdit'"
      @edit="edit"
      @remove="remove"
      @save="save"
      @cancel="cancel"
      @itemchange="itemChange"
      :columns="columns"
      :resizable="true"
    >
      <template v-slot:myTemplate="{ props }">
        <custom
          :data-item="props.dataItem"
          @edit="edit"
          @save="save"
          @remove="remove"
          @cancel="cancel"
        />
      </template>
      <GridToolbar>
        <button title="Add new" class="k-button k-primary" @click="insert">
          Thêm mới
        </button>
      </GridToolbar>
    </Grid>
  </div>
</template>

<script>
import CommandCell from "../../../components/CommandCell.vue";
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";

export default {
  props: ["myValidator"],
  name: "app",
  components: {
    Grid,
    GridToolbar,
    custom: CommandCell,
  },
  data: function () {
    return {
      filter: null,
      sort: null,
      updatedData: [],
      editID: null,
      columns: [
        { field: "tkno", title: "TK nợ" },
        { field: "tkco", title: "TK có" },
        {
          field: "mtmuc",
          title: "Hạng mục",
        },
        {
          field: "mtmuc1",
          title: "Hạng mục 1",
        },
        {
          field: "mctrinh",
          title: "Mã chương trình",
        },

        {
          field: "mctrinh1",
          title: "Mã chương trình 1",
        },
        {
          field: "mdvi",
          title: "Mã đơn vị",
        },

        {
          field: "mdtuong",
          title: "Mã đối tượng",
        },

        {
          field: "mnguon",
          title: "Mã nguồn",
        },

        {
          field: "mdtuong1",
          title: "Mã đối tượng 1",
        },

        {
          field: "ptthue",
          title: "PT Thuế",
        },

        {
          field: "mcnhan",
          title: "Mã cá nhân",
        },

        {
          field: "mc_trinh",
          title: "Mã chương trình",
        },

        {
          field: "gtri",
          title: "Số phát sinh",
        },

        {
          field: "ck_chi",
          title: "Ck chi",
        },

        {
          field: "dgiai",
          title: "Diễn giải",
        },

        {
          field: "shdon",
          title: "Số hóa đơn",
        },

        {
          field: "nvhdon",
          title: "NV hóa đơn",
        },
        {
          field: "ctl_quan",
          title: "Chứng từ liên quan",
        },

        {
          field: "nhtoan",
          title: "nhtoan",
        },

        {
          field: "nnbang",
          title: "nnbang",
        },
        {
          field: "gtri1",
          title: "gtri1",
        },
        { cell: "myTemplate", width: "100px" },
      ],
      gridData: [
        {
          inEdit: true,
          id: 1,
          tkno: "Chai",
          tkco: 39,
          mtmuc: "false",
          mtmuc1: "mtmuc1",
          mctrinh: "mctrinh",
          mctrinh1: "mctrinh1",
          mdvi: "mdvi",
          mdtuong: "mdtuong",
          mnguon: "mnguon",
          mdtuong1: "mdtuong1",
          ptthue: "ptthue",
          mcnhan: "mcnhan",
          mc_trinh: "mc_trinh",
          gtri: "gtri",
          ck_chi: "ck_chi",
          dgiai: "dgiai",
          shdon: "shdon",
          nvhdon: "nvhdon",
          ctl_quan: "ctl_quan",
          nhtoan: "nhtoan",
          nnbang: "nnbang",
          gtri1: "gtri1",
        },
      ],
    };
  },
  mounted: async function () {},
  computed: {
    hasItemsInEdit() {
      return this.gridData.filter((p) => p.inEdit).length > 0;
    },
  },
  methods: {
    itemChange: function (e) {
      e.dataItem[e.field] = e.value;
    },
    insert() {
      console.log(this.myValidator);
      var validator = this.myValidator();
      if (validator.validate()) {
        return alert("ok");
      }
      return alert("NG");
      const dataItem = { inEdit: true };
      this.gridData.push(dataItem);
    },
    edit: function (e) {
      e.dataItem["inEdit"] = true;
    },
    save: function (e) {
      if (!e.dataItem.id) {
        const product = { ...e.dataItem };
        delete product.inEdit;
        product.id = this.generateID();
        this.gridData.pop();
      } else {
        const product = { ...e.dataItem };
        delete product.inEdit;
      }
    },
    generateID() {
      let id = 1;
      this.gridData.forEach((p) => {
        if (p.id) id = Math.max(p.id + 1, id);
      });
      return id;
    },
    update(data, item, remove) {
      let updated;
      let index = data.findIndex(
        (p) =>
          JSON.stringify({ ...p }) === JSON.stringify(item) ||
          (item.id && p.id === item.id)
      );
      if (index >= 0) {
        updated = Object.assign({}, item);
        data[index] = updated;
      }

      if (remove) {
        data = data.splice(index, 1);
      }
      return data[index];
    },
    cancel(e) {
      if (e.dataItem.id) {
        e.dataItem["inEdit"] = undefined;
      } else {
        this.update(this.gridData, e.dataItem, true);
      }
    },
    remove(e) {
      e.dataItem["inEdit"] = undefined;
      this.update(this.gridData, e.dataItem, true);
    },
    cancelChanges(e) {
      let dataItems = this.gridData.filter((p) => p.inEdit === true);
      for (let i = 0; i < dataItems.length; i++) {
        this.update(this.gridData, dataItems[i], true);
      }
    },
    initialise() {},
    subscribeToUpdate() {},
  },
};
</script>