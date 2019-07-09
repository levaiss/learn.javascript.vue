<template>
    <table class="table">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
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
            <a href="">
              {{ user.firstName + " " + user.lastName }}
            </a>
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ user.phone }}
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