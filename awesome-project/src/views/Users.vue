<template>
  <div class="page users">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1 class="pb-3">Users list</h1>

          <router-link :to="{ name: 'userCreate' }" class="btn btn-info"
            >Create user</router-link
          >
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

          <users-list v-else :users="users" :perPage="5" >
            <template v-slot:header>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Balance</th>
                <th scope="col"></th>
              </tr>
            </template>
            <template v-slot:body="props">
              <tr v-for="user in props.sortedUsers" :key="user.name + '-' + user.id">
                <th scope="row">
                  {{ user.id }}
                </th>
                <td>
                  <img :src="user.picture" class="avatar" alt=""/>
                </td>
                <td>
                  <router-link :to="{ name: 'user', params: { id: user.id } }">
                    {{ props.getFullName(user) }}
                  </router-link>
                </td>
                <td>
                  <a :href="'mailto:' + user.email" title="">{{ user.email }}</a>
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
            </template>
          </users-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
        console.log("Данные получены!");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
