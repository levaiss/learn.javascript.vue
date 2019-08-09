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
        <div class="col-3">
          <img :src="user.pictureOrigin" class="img-fluid" alt="" />
        </div>
        <div class="col-7">
          <h1 class="pb-1">{{ getFullName }}</h1>
          <p><b>Age</b>: {{ user.age }}</p>
          <p><b>Company</b>: {{ user.company }}</p>
          <p><b>Address</b>: {{ user.address }}</p>
          <p><b>Phone</b>: {{ user.phone }}</p>
        </div>
        <div class="col-2">
          <div class="d-flex align-items-center">
            Status:
            <span class="status" :class="{ active: user.isActive }"></span>
          </div>
        </div>
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <h3 class="pb-2">Bio</h3>
          <div v-html="user.about"></div>
        </div>
        <div class="col-4 offset-1">
          <h3 class="pb-2">Account information</h3>
          <p><b>Balance</b>: {{ user.balance }}</p>
          <p><b>E-mail</b>: {{ user.email }}</p>
          <p><b>Registered</b>: {{ user.registered }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import UsersList from "@/components/UsersList.vue";

export default {
  components: {},
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: function() {
    return {
      usersLoading: true,
      user: {}
    };
  },
  computed: {
    getFullName: function() {
      return this.user.firstName + " " + this.user.lastName;
    }
  },
  created: function() {
    let that = this;

    axios
      .get("http://localhost:3009/users/" + that.id)
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
