<template>
    <div class="page login">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="pb-5">{{ Greeting }}</h1>
                </div>

                <div class="col-4 offset-4">
                    <form v-if="!isAdmin" @submit.prevent="Login()">
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" placeholder="Enter email" required>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="password" class="form-control" id="InputPassword" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                isAdmin: window.auth.isAdmin
            }
        },
        computed: {
            Greeting() {
                return (this.isAdmin) ? "Hello, Admin!" : "Login";
            }
        },
        methods: {
            Login: function() {
                auth.login();
            }
        }
    };
</script>