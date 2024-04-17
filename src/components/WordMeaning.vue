<template>
  <div>
    <h1>{{ $route.params.word }}</h1>
    <p>{{ $route.params.word }} </p>
  </div>
</template>

<script>
export default {
  name: 'WordMeaning',
};
</script>
