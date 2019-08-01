<template>
    <div class="page users">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <h1 class="pb-3">Phone book</h1>
                </div>
                <div class="col-12">
                    <div v-if="usersLoading" class="text-center py-5">
                        <div
                                class="spinner-grow"
                                style="width: 3rem; height: 3rem;"
                                role="status"
                        >
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                    <users-list v-else :users="users" :perPage="10">
                        <template v-slot:header>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </template>
                        <template v-slot:body="props">
                            <tr v-for="user in props.sortedUsers" :key="user.name + '-' + user.id">
                                <td>
                                    {{ user.firstName + " " + user.lastName }}
                                </td>
                                <td>
                                    <a :href="'tel:' + user.phone" title="">{{ user.phone }}</a>
                                </td>
                            </tr>
                        </template>
                    </users-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    components: {
      UsersList: () => import("@/components/UsersList.vue"),
    },
    data: function() {
      return {
        users: [],
        usersLoading: true
      };
    },
    created: function() {
      let that = this;

      axios
        .get("http://localhost:3009/users")
        .then(function(response) {
          that.users = response.data;
          that.usersLoading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
</script>
