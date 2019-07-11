<template>
    <table class="table">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tr v-for="user in users" :key="user.name + '-' + user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>
            <img :src="user.picture" class="avatar" alt="">
          </td>
          <td>
            <router-link :to="{ name: 'user' , params: { id: user.id }}">
              {{ user.firstName + " " + user.lastName }}
            </router-link>
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ user.phone }}
          </td>
            <td>
                <router-link :to="{ name: 'userEdit' , params: { id: user.id }}" class="btn btn-info">
                    Edit
                </router-link>
            </td>
        </tr>
      </table>
</template>

<script>
  export default {
    name: "users-list",
    props: {
      users: Array,
      required: true
    }
  };
</script>

<style>
  .avatar {
    width: 50px;
    height: 50px;
  }
</style>