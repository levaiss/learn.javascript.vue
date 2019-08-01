<template>
  <div>
    <div class="row pt-3">
      <div class="col-5">
        <div class="form-group d-flex align-items-center">
          <label for="perPage" class="w-50">Users per page</label>
          <select class="form-control" id="perPage" v-model.number="perPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Balance</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tr v-for="user in sortedUsers" :key="user.name + '-' + user.id">
        <th scope="row">
          {{ user.id }}
        </th>
        <td>
          <img :src="user.picture" class="avatar" alt="" />
        </td>
        <td>
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            {{ user.firstName + " " + user.lastName }}
          </router-link>
        </td>
        <td>
          {{ user.email }}
        </td>
        <td>
          {{ user.balance }}
        </td>
        <td class="text-right">
          <router-link
            :to="{ name: 'userEdit', params: { id: user.id } }"
            class="btn btn-info"
          >
            Edit
          </router-link>
        </td>
      </tr>
    </table>

    <pagination
            :itemsLength="usersLength"
            :currentPage="currentPage"
            :perPage="perPage"
           @update="updatePagination">
    </pagination>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    Pagination: () => import("@/components/Pagination.vue")
  },
  data: function() {
    return {
      perPage: 5,
      currentPage: 1
    };
  },
  computed: {
    sortedUsers: function() {
      let startIndex = (this.currentPage - 1) * this.perPage;

      return this.users
        .slice(0)
        .sort(function(a, b) {
          return parseInt(a.id) - parseInt(b.id);
        })
        .slice(startIndex, startIndex + this.perPage);
    },
    usersLength: function () {
      return this.users.length;
    }
  },
  methods: {
    updatePagination: function (currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>

<style>
.avatar {
  width: 50px;
  height: 50px;
}
</style>
