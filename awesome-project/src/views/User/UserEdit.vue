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
          <a href="#" class="text-success" @click.prevent="$router.go(-1)"
            >&laquo; Back</a
          >
        </div>
      </div>
      <div class="row pb-3">
        <div class="col-6 offset-3">
          <user-form :user="user" @update="user = $event"></user-form>
          <hr class="my-5" />
          <button @click="saveUser" class="btn btn-primary mb-3">
            Save change
          </button>
          <button @click="deleteUser" class="btn btn-danger ml-2 mb-3">
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
  data: function() {
    return {
      usersLoading: true,
      id: this.$route.params.id,
      user: {}
    };
  },
  created: function() {
    let that = this;

    axios
      .get("http://localhost:3009/users/" + this.id)
      .then(function(response) {
        that.user = response.data;
        that.usersLoading = false;
        console.log("Данные получены!");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    saveUser: function() {
      axios
        .patch("http://localhost:3009/users/" + this.id, this.user)
        .then(function() {
          console.log("User saved!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteUser: function() {
      axios
        .delete("http://localhost:3009/users/" + this.id)
        .then(function() {
          console.log("User delete!");
        })
        .catch(function(error) {
          console.log(error);
        });
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
