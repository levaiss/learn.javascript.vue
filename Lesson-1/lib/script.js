// Add your code here
import Copy from 'v-copy'

Vue.use(Copy)

new Vue({
    el: "#app",
    data: {
        showUsers: true,
        users: [
            {
                "surname": "Dou",
                "name": "John",
                "patronymic": "Johnovich",
                "photo": "https://picsum.photos/150"
            },
            {
                "surname": "Cartman",
                "name": "Jack",
                "patronymic": "Johnovich",
                "photo": "https://picsum.photos/150"
            },
            {
                "surname": "Ivich",
                "name": "Adam",
                "patronymic": "Fathervich"
            },
            {
                "surname": "Horm",
                "name": "Devid",
                "patronymic": "Johnovich",
                "photo": "https://picsum.photos/150"
            },
            {
                "surname": "Chili",
                "name": "Kevin",
                "patronymic": "Portovich"
            }
        ]
    },
    filters: {
        defaultPhoto: function(value) {
            let stub = "http://www.actuary.ru/upload/iblock/09f/09f950aad832c05f002589be9314af24.png";

            return (value) ? value : stub;
        },
        uppercase: function(value) {
            return (value) ? value.toUpperCase() : "";
        }
    },
    computed: {
        countUsers: function() {
            return this.users.length;
        },
        btnTitle: function() {
            return (this.showUsers) ? "Hide users" : "Show users";
        }
    },
    methods: {
        getUserFullName: function(index) {
            let user = this.users[index];

            return user.surname+` `+user.name+` `+user.patronymic;
        }
    }
})