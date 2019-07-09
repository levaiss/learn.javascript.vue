<template>
  <div class="page users">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Users list</h1>

          <div v-if="usersLoading" class="text-center py-5">
            <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <users-list v-else :users="users"></users-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios";
    import UsersList from "@/components/UsersList.vue";

    export default {
        components: {
            UsersList
        },
        data: function() {
            return {
                users: [],
                usersLoading: true
            }
        },
        created: function () {
            let that = this;

            axios.get('http://localhost:3009/users')
                .then(function (response) {

                    that.users = response.data;
                    that.usersLoading = false;
                    console.log("Данные получены!");
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    };
</script>
