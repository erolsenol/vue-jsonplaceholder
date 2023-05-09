<template>
  <v-container fluid>
    <v-row>
      <v-col
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
