<template>
  <form class="w-100">
    <div v-for="(value, name) in user" :key="value" class="form-group">
      <label :for="name">{{ name | ucFirst }}</label>
      <input
        type="text"
        class="form-control"
        :id="name"
        :placeholder="name"
        v-model.lazy="localUser[name]"
        @blur="saveChange()"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  filters: {
    ucFirst: function(value) {
      return value ? value[0].toUpperCase() + value.slice(1) : "";
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      localUser: null
    };
  },
  created() {
    this.localUser = Object.assign({}, this.user);
  },
  methods: {
    saveChange: function() {
      this.$emit("update", this.localUser);
    }
  }
};
</script>
