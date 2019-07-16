<template>
  <div class="page user">
    <div v-if="usersLoading" class="text-center py-5">
      <div
        class="spinner-grow"
        style="width: 3rem; height: 3rem;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div v-else class="container">
      <div class="row">
        <div class="col-12 pb-2">
          <a href="#" class="text-success" @click.prevent="backToUsers()"
            >&laquo; Back</a
          >
        </div>
      </div>
      <div class="row pb-3">
        <div class="col-6 offset-3">
          <user-form :user="user" @update="updateUser"></user-form>
          <hr class="my-5" />
          <button @click="saveUser" class="btn btn-primary mb-3">
            Save change
          </button>
          <button
            v-if="id"
            @click="deleteUser"
            class="btn btn-danger ml-2 mb-3"
          >
            Delete user
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/components/UserForm.vue";

export default {
  components: {
    "user-form": UserForm
  },
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  data: function() {
    return {
      saveParams: {
        method: "post",
        url: "/users"
      },
      usersLoading: false,
      user: {}
    };
  },
  created: function() {
    let that = this;

    if (!that.id) return;

    this.saveParams.method = "patch";
    this.saveParams.url += `/${this.id}`;
    that.usersLoading = true;

    axios
      .get("http://localhost:3009/users/" + this.id)
      .then(response => {
        that.user = response.data;
        that.usersLoading = false;
        console.log("Данные получены!");
      })
      .catch(error => {
        console.log(error);
        that.usersLoading = true;
      });
  },
  methods: {
    saveUser: function() {
      axios[this.saveParams.method](
        `http://localhost:3009${this.saveParams.url}`,
        this.user
      )
        .then(() => {
          console.log("User saved!");
          this.$router.push({ name: "users" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteUser: function() {
      axios
        .delete("http://localhost:3009/users/" + this.id)
        .then(() => console.log("User delete!"))
        .catch(error => {
          console.log(error);
        });
    },
    updateUser: function(modifiedUser) {
      this.user = modifiedUser;
    },
    backToUsers: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.status {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--red);
  margin-left: 1rem;

  &.active {
    background-color: var(--green);
  }
}
</style>
