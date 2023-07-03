<template>
    <div class="col-md-6 rounded-3 shadow-main p-5 justify-content-center d-flex flex-column align-items-center">
        <h3 class="text-center mb-5">Finish your profile</h3>
        <form class="d-flex flex-column align-items-center justify-content-center w-75" @submit.prevent="createProfile(formProfile)">
            <div class="d-flex justify-content-center gap-5 mb-3">
                <div>
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control border border-secondary" v-model="formProfile.firstName">
                </div>
                <div>
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control border border-secondary" v-model="formProfile.lastName">
                </div>
            </div>
            <div class="d-flex justify-content-center gap-5 mb-5">
                <div class="w-50">
                    <label class="form-label">Gender</label>
                    <select class="form-select border border-secondary" v-model="formProfile.gender">
                        <option selected>Select gender...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="w-50">
                    <label class="form-label">Age</label>
                    <input type="number" class="form-control border border-secondary" v-model="formProfile.age">
                </div>
            </div>
            <button type="submit" class="buttons rounded-3 text-white fw-bold w-100">Submit</button>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'pinia';
    import { useProfileStore } from '../stores/userProfile'

    export default {
        data() {
            return {
                formProfile: {
                    firstName: '',
                    lastName: '',
                    gender: '',
                    age: ''
                }
            }
        },
        methods: {
            ...mapActions(useProfileStore, ['createProfile'])
        }
    }

</script>

<style scoped>
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