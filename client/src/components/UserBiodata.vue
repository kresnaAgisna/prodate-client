<template>
    <div class="w-100 h-75">
        <h3 class="mb-5 border-bottom"> Biodata </h3>
        <div class="d-flex gap-5">
            <div>
                <p class="fw-bold">First name:</p>
                <p class="fw-bold">Last name:</p>
                <p class="fw-bold">Age:</p>
                <p class="fw-bold">Gender:</p>
            </div>
            <div>
                <p>{{ profile.firstName }}</p>
                <p>{{ profile.lastName }}</p>
                <p>{{ profile.age }}</p>
                <p>{{ profile.gender }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['profile']
    }
</script>