<template>
    <div class="form-group d-flex align-items-center">
        <label for="perPage" class="w-50">{{ title }}</label>
        <select class="form-control" id="perPage" v-model.number="perPageLocal" @change="perPageUpdate">
            <option v-for="(value, index) in perPageList" :key="index" :value="value">{{ value }}</option>
        </select>
    </div>
</template>

<script>
    export default {
      name: "PerPage",
      props: {
        perPage: {
          type: Number,
          default: 5
        },
        title: {
          type: String,
          default: "Items per page"
        }
      },
      data: function () {
        return {
          perPageLocal: this.perPage,
          perPageList: [5, 10, 15]
        }
      },
      methods: {
        perPageUpdate: function () {
          this.$emit("update", this.perPageLocal);
        }
      }
    }
</script>