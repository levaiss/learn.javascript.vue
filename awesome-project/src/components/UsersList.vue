<template>
  <div>
    <div class="row pt-3">
      <div class="col-5">
        <div class="form-group d-flex align-items-center">
          <label for="perPage" class="w-50">Users on page</label>
          <select class="form-control" id="perPage" v-model="perPage">
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

    <nav>
      <ul class="pagination" v-if="lastPage > 1">
        <li class="page-item" :class="{disabled : currentPage == 1}"><a @click.prevent="prevPage" href="#" class="page-link">Previous</a></li>
        <li v-for="item in lastPage" :key="item" class="page-item" :class="{disabled : currentPage == item}"><a @click.prevent.number="setPage(item)" class="page-link" href="#">{{ item }}</a></li>
        <li :class="{disabled : currentPage == lastPage}" class="page-item"><a @click.prevent="nextPage" class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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
  data: function() {
    return {
      perPage: 5,
      currentPage: 1
    }
  },
  computed: {
    sortedUsers: function() {
      let startIndex = (this.currentPage - 1)* this.perPage;

      return this.users.slice(0).sort(function(a, b) {
        return parseInt(a.id) - parseInt(b.id);
      }).slice(startIndex, startIndex + this.perPage);
    },
    lastPage: function () {

      return Math.ceil(this.users.length/this.perPage);
    }
  },
  methods: {
    nextPage: function () {
      if (this.currentPage < this.lastPage) {
        this.setPage(this.currentPage + 1);
      }
    },
    prevPage: function () {
      if (this.currentPage > 1) {
        this.setPage(this.currentPage - 1);
      }
    },
    setPage: function (page) {
      this.currentPage = parseInt(page);
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
