<template>
  <h1 v-if="status === 'success'">Simple - Success</h1>
  <h1 v-else-if="status === 'error'">Simple - Error</h1>
  <h1 v-else>Simple - Loading</h1>
</template>

<script>
import api from '@/api';

export default {
  name: 'simple',
  data() {
    return {
      status: 'pending',
    };
  },
  mounted() {
    console.log(`Simple MOUNTED called, status: ${this.status}`);

    this.handleMounted();
  },
  methods: {
    async handleMounted() {
      try {
        await api.get();

        this.status = 'success';
      } catch (e) {
        console.error(e);

        this.status = 'error';
      }
    },
  },
};
</script>
