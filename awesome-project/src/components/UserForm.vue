<template>
    <form class="w-100">
        <div v-for="(value, name) in user" :key="value" class="form-group">
            <label :for="name">{{ name | ucFirst }}</label>
            <input
                    type="text"
                    class="form-control"
                    :id="name"
                    :placeholder="name"
                    :value="value"
            >
        </div>
        <hr class="my-5">
        <button type="submit" class="btn btn-primary mb-3">Save change</button>
        <button type="submit" class="btn btn-danger ml-2 mb-3">Delete user</button>
    </form>
</template>

<script>
    export default {
        name: "users-form",
        props: {
            user: Object,
            required: true
        },
        filters: {
            ucFirst: function (value) {
                return (value) ? value[0].toUpperCase() + value.slice(1) : "";
            }
        }
    };
</script>