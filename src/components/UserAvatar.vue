<template>
  <div v-if="user" class="d-flex flex-row user mb-3 align-center">
    <v-avatar
      color="grey-darken-3"
      image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
    ></v-avatar>
    <div class="d-flex flex-column ms-3 text-start" max-height="30">
      <span class="text-subtitle-1">{{ user.name }}</span>
      <span class="text-body-1 text-grey-darken-1">@{{ user.username }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserAvatar',
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getIdByUser']),
    user() {
      const findUser = this.getIdByUser(this.userId)
      if (findUser) {
        return findUser
      }
      return false
    },
  },
}
</script>
