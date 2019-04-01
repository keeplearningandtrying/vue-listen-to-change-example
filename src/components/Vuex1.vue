<template>
  <h1 v-if="status === 'success'">Vuex1 - Success</h1>
  <h1 v-else-if="status === 'error'">Vuex1 - Error</h1>
  <h1 v-else>Vuex1 - Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex1',
  computed: mapState(['status']),
};
</script>
