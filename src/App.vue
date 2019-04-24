<template>
  <div id="app">
    <router-view class="router-view" />
    <backtop
      :height="100"
      :bottom="100"
      :right="40"
      :duration="1000"
    >
    </backtop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
