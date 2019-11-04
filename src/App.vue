<template>
    <div id="app">
        <div class="container">
            <transition name="custom-classes-transition" enter-active-class="animated fadeIn"
                        leave-class="animated fadeOut">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
            </transition>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  }
}
</script>

<style>

</style>
