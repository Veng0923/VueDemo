<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot ></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "slot-base-layout"
    }
</script>

<style scoped>

</style>