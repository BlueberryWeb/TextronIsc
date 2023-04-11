<template>
    <!-- @click="$router.push({ name: 'business_updates-detail', params: { id: item.id } })" -->
    <div class="admin-panel">
        <div class="container p-0">
            <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
            <!-- Navbar menú -->
            <nav class="nav mt-5">
                <a class="nav-link text-light pointer"
                    @click="$router.push({ name: 'admin_panel-business_updates' })">Business Updates</a>
                <a @click="$router.push({ name: 'admin_panel-success_stories' })"
                    class="nav-link text-light pointer">Success Stories</a>
                <a @click="$router.push({ name: 'admin_panel-sharepoints' })"
                    class="nav-link text-light pointer">Training Plan</a>
                <a @click="$router.push({ name: 'admin_panel-sharepoints' })"
                    class="nav-link text-light pointer">Sharepoints</a>
            </nav>
            <!-- Endx Navbar menú -->
            <hr>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>