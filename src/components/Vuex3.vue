<template>
  <h1 v-if="status === 'success'">Vuex3 - Success {{ complex && complex.deep }}</h1>
  <h1 v-else-if="status === 'error'">Vuex3 - Error</h1>
  <h1 v-else>Vuex3 -Loading</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex3',
  data() {
    return {
      complex: null,
    };
  },
  computed: mapState(['status']),
  mounted() {
    this.$store.watch(
      (state, getters) => getters.status,
      (newValue, oldValue) => {
        console.log(`Vuex3 - Updating from ${oldValue} to ${newValue}`);

        // Do whatever makes sense now
        if (newValue === 'success') {
          this.complex = {
            deep: 'some deep object',
          };
        }
      },
    );
  },
};
</script>
