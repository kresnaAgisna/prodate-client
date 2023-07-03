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
            <form-add-vue/>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'pinia';
    import { useProfileStore } from '../stores/userProfile'
    import FormAddVue from '../components/FormAdd.vue';

    export default {
        components: {
            FormAddVue
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