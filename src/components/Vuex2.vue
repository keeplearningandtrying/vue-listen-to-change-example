<template>
  <h1 v-if="status === 'success'">Vuex2 - Success {{ complex.deep }}</h1>
  <h1 v-else-if="status === 'error'">Vuex2 - Error</h1>
  <h1 v-else>Vuex2 - Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex2',
  data() {
    return {
      complex: null,
    };
  },
  computed: mapState(['status']),
  watch: {
    status(newValue, oldValue) {
      console.log(`Vuex2 - Updating from ${oldValue} to ${newValue}`);

      // Do whatever makes sense now
      if (newValue === 'success') {
        this.complex = {
          deep: 'some deep object',
        };
      }
    },
  },
};
</script>
