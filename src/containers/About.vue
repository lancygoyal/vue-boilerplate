<template>
  <div class="about">
    <Welcome msg="This is an about page" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome.vue'; // @ is an alias to /src

@Component({
  components: {
    Welcome
  }
})
export default class Home extends Vue {}
</script>
