<template>
    <div id="app">
      <nav class="navbar navbar-light bg-light">
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">1111</button>
        <div class="collapse navbar-expand-md" id="collapsibleNavId">
          <a class="navbar-brand" href="#">vue2bt4</a>
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Nav 1 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nav 2</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="dropdownId"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nav 3 dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="form-inline float-xs-right">
            <input class="form-control" type="text" placeholder="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
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
