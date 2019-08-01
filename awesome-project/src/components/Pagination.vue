<template>
  <nav>
    <ul class="pagination" v-if="lastPage > 1">
      <li class="page-item" :class="{ disabled: currentPageLocal == 1 }">
        <a @click.prevent="prevPage" href="#" class="page-link">Previous</a>
      </li>
      <li
        v-for="item in lastPage"
        :key="item"
        class="page-item"
        :class="{ disabled: currentPageLocal == item }"
      >
        <a @click.prevent="setPage(item)" class="page-link" href="#">{{
          item
        }}</a>
      </li>
      <li :class="{ disabled: currentPageLocal == lastPage }" class="page-item">
        <a @click.prevent="nextPage" class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    itemsLength: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      currentPageLocal: this.currentPage
    };
  },
  computed: {
    lastPage: function() {
      return Math.ceil(this.itemsLength / this.perPage);
    }
  },
  methods: {
    nextPage: function() {
      if (this.currentPageLocal < this.lastPage) {
        this.setPage(this.currentPageLocal + 1);
      }
    },
    prevPage: function() {
      if (this.currentPageLocal > 1) {
        this.setPage(this.currentPageLocal - 1);
      }
    },
    setPage: function(page) {
      this.currentPageLocal = parseInt(page);
      this.$emit("update", this.currentPageLocal);
    }
  }
};
</script>
