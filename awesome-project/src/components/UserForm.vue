<template>
  <form class="w-100">
    <div class="form-group">
      <label for="firstName">First name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder="First name"
        v-model.lazy="localUser.firstName"
      />
    </div>

    <div class="form-group">
      <label for="firstName">Last name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder="First name"
        v-model.lazy="localUser.lastName"
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="Phone"
        v-model.lazy="localUser.phone"
      />
    </div>

    <div class="form-group">
      <label>Register date</label>
      <date-picker v-model="localUser.registered"></date-picker>
    </div>

    <div class="form-group">
      <label for="email">E-mail</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="E-mail address"
        v-model.lazy="localUser.email"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        placeholder="Address"
        v-model.lazy="localUser.address"
      />
    </div>

    <div class="form-group">
      <label for="company">Company</label>
      <input
        type="text"
        class="form-control"
        id="company"
        placeholder="Company name"
        v-model.lazy="localUser.company"
      />
    </div>

    <div class="form-group">
      <label for="about">About</label>
      <textarea
        class="form-control"
        id="about"
        placeholder="About"
        v-model.lazy="localUser.about"
      ></textarea>
    </div>
  </form>
</template>

<script>

export default {
  components: {
    DatePicker: () => import("@/components/DatePicker.vue")
  },
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
  watch: {
    localUser: {
      deep: true,
      handler: function () {
        this.$emit("update", this.localUser);
      }
    }
  },
};
</script>
