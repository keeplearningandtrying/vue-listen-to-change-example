<template>
  <div>
    <h1 v-if="status === 'success'">App - Success</h1>
    <h1 v-else-if="status === 'error'">App - Error</h1>
    <h1 v-else>App - Loading</h1>
    <simple />
    <vuex1 />
    <vuex2 />
    <vuex3 />
    <vuex4 />
  </div>
</template>

<script>
import Simple from '@/components/Simple.vue';
import Vuex1 from '@/components/Vuex1.vue';
import Vuex2 from '@/components/Vuex2.vue';
import Vuex3 from '@/components/Vuex3.vue';
import Vuex4 from '@/components/Vuex4.vue';

import { mapState } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      payload: "passed in value",
    };
  },
  computed: mapState(['status']),
  components: {
    Simple,
    Vuex1,
    Vuex2,
    Vuex3,
    Vuex4,
  },
  mounted() {
    console.log(`App MOUNTED called, status: ${this.status}`);
    this.$store.dispatch('fetchApi', this.payload);
  },
};
</script>
