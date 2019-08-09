<template>
  <form class="w-100">
    <div class="form-group">
      <label for="Photo">Photo</label>
      <input
              type="text"
              class="form-control"
              id="Photo"
              placeholder="Photo"
              :value="localUser.pictureOrigin"
              @input="savePhoto"
      />
    </div>

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
      <label for="Age">Age</label>
      <input
              type="text"
              class="form-control"
              id="Age"
              placeholder="Age"
              v-model.lazy="localUser.age"
      />
    </div>

    <div class="form-group">
      <label for="Balance">Balance</label>
      <input
              type="text"
              class="form-control"
              id="Balance"
              placeholder="Balance"
              v-model.lazy="localUser.balance"
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
      <date-picker :date="localUser.registered" @update="saveData"></date-picker>
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
      <p>About</p>
      <medium-editor :text="localUser.about" :options="option" custom-tag="div" @edit="saveAbout"></medium-editor>
    </div>
  </form>
</template>

<script>
import "medium-editor/dist/css/medium-editor.css"
import "medium-editor/dist/css/themes/default.css"

export default {
  name: "UserForm",
  components: {
    DatePicker: () => import("@/components/DatePicker.vue"),
    MediumEditor: () => import("vue2-medium-editor")
  },
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
      option: {
        toolbar: {buttons: ["bold", "strikethrough", "h1"]}
      },
      localUser: null
    };
  },
  watch: {
    localUser: {
      deep: true,
      handler: function() {
        this.$emit("update", this.localUser);
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user);
  },
  methods: {
    saveData: function (data) {
      this.localUser.registered = data;
    },
    savePhoto: function ($event) {
      this.localUser.pictureOrigin = $event.target.value;
      this.localUser.picture = $event.target.value;
    },
    saveAbout: function (operation) {
      this.localUser.about = operation.api.origElements.innerHTML;
    }
  }
};
</script>
