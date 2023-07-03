<template>
    <div class="container">
        <div class="row justify-content-center gap-4 my-5" id="user-info">
            <div class="col-md-3 rounded-3 shadow-main d-flex justify-content-center align-items-center">
                <img src="https://fajar.co.id/wp-content/uploads/2022/11/IMG_20221130_091433.jpg" alt="" class="w-75 h-75 rounded-circle border border-danger border-4 clickable">
            </div>
            <div class="col-md-6 rounded-3 shadow-main"></div>
        </div>
        <div class="row justify-content-center gap-4" id="user-content">
            <div class="col-md-3 rounded-3 shadow-main"></div>
            <div class="col-md-6 rounded-3 shadow-main p-5 justify-content-center d-flex flex-column align-items-center">
                <form-add-vue v-if="!isProfile"/>
                <UserBiodata :profile="profile" v-if="userInfo"/>
                <div class="btn-group align-self-end" role="group">
                    <input type="radio" class="btn-check" name="btnradio" id="biodata" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="biodata">Biodata</label>

                    <input type="radio" class="btn-check" name="btnradio" id="edit" autocomplete="off">
                    <label class="btn btn-outline-primary" for="edit">Edit Biodata</label>

                    <input type="radio" class="btn-check" name="btnradio" id="chat" autocomplete="off">
                    <label class="btn btn-outline-primary" for="chat">Chat</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import { useProfileStore } from '../stores/userProfile'
    import FormAdd from '../components/FormAdd.vue';
    import UserBiodata from '../components/UserBiodata.vue';
    

    export default {
        components: {
            FormAdd,
            UserBiodata
        },
        data() {
            return {
                isProfile: false,
                userInfo: false,
            }
        },
        computed: {
            ...mapState(useProfileStore, ['profile'])
        },
        methods: {
            ...mapActions(useProfileStore, ['getUser'])
        },
        async created() {
           await this.getUser()
           if(this.profile) {
            this.isProfile = true
            this.userInfo = true
           }
        }
    }

</script>

<style scoped>
    #user-info {
        min-height: 25vh;
    }

    #user-content {
        min-height: 50vh;
    }

    .buttons {
    background-color: var(--third-color);
    border: 0px;
    height: 4vh;
    transition: 0.3s;
    }
    .buttons:hover {
        opacity: 0.8;
    }
    .buttons:active {
    transform: translateY(2px);
}
</style>