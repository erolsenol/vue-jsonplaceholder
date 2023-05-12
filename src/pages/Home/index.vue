<template>
  <v-container class="bg-blue-lighten-5" fluid>
    <v-row>
      <v-col v-if="getPosts.length === 0"
        ><span class="text-h5">Posts Loading...</span></v-col
      >

      <v-col
        v-else
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(post, index) in getPosts"
        :key="index"
      >
        <PostItem :post="post" />
      </v-col>
    </v-row>
    <router-view :width="600"> </router-view>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'HomePage',
  components: {
    PostItem,
  },
  computed: {
    ...mapGetters(['getPosts']),
  },
  mounted() {
    this.$store.dispatch('getPosts')
  },
}
</script>
