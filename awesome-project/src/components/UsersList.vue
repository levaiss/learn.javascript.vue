<template>
    <div>
        <div class="row pt-3">
            <div class="col-5">
                <per-page
                        :per-page="localPerPage"
                        title="Users per page"
                        @update="updatePerPage"
                ></per-page>
            </div>
            <div class="col-4 offset-3">
                <div class="form-group">
                    <input
                            type="search"
                            class="form-control"
                            id="search"
                            placeholder="Search by name.."
                            v-model="query"
                    />
                </div>
            </div>
        </div>

        <table class="table">
            <thead>
                <slot name="header"></slot>
            </thead>
            <tbody>
                <slot name="body" :sortedUsers="sortedUsers" :getFullName="getFullName"></slot>
            </tbody>
        </table>

        <pagination
                :items-length="usersLength"
                :current-page="currentPage"
                :per-page="localPerPage"
                @update="updatePagination"
        >
        </pagination>
    </div>
</template>

<script>

  export default {
    name: "UsersList",
    components: {
      Pagination: () => import("@/components/Pagination.vue"),
      PerPage: () => import("@/components/PerPage.vue"),
    },
    props: {
      users: {
        type: Array,
        required: true
      },
      perPage: {
        type: Number,
        default: 5
      }
    },
    data: function () {
      return {
        localPerPage: this.perPage,
        currentPage: 1,
        query: ""
      };
    },
    computed: {
      filteredUsers: function() {
        let vm = this;
        return this.users.filter(function (user) {
          return vm.getFullName(user).toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
        })
      },
      sortedUsers: function () {
        let startIndex = (this.currentPage - 1) * this.localPerPage;

        return this.filteredUsers
          .slice(0)
          .sort(function (a, b) {
            return parseInt(a.id) - parseInt(b.id);
          })
          .slice(startIndex, startIndex + this.localPerPage);
      },
      usersLength: function () {
        return this.filteredUsers.length;
      }
    },
    methods: {
      getFullName: function(user){
        return user.firstName + " " + user.lastName;
      },
      updatePagination: function (currentPage) {
        this.currentPage = currentPage;
      },
      updatePerPage: function (newPerPage) {
        this.localPerPage = newPerPage;
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
