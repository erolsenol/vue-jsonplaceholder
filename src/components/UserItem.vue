<template>
  <v-card max-width="500">
    <v-card-item>
      <v-list-item class="text-start">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>
        <template v-slot:append>
          <v-btn
            v-if="$store.state.user.id === user.id"
            color="grey-lighten-1"
            icon="fas fa-edit"
            @click="editClick"
          ></v-btn>
        </template>

        <v-list-item-title>{{ user.name }}</v-list-item-title>

        <v-list-item-subtitle>@{{ user.username }}</v-list-item-subtitle>
      </v-list-item>
    </v-card-item>
    <v-card-item>
      <v-list class="pb-0">
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="fas fa-envelope"></v-icon>

            <v-list-item-title v-text="user.email"></v-list-item-title>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="fas fa-phone"></v-icon>

            <v-list-item-title v-text="user.phone"></v-list-item-title>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="fas fa-blog"></v-icon>

            <v-list-item-title v-text="user.website"></v-list-item-title>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="px-0">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title
                class="px-3 py-0"
                expand-icon="fas fa-chevron-down"
              >
                <span class="text-body-1"
                  ><v-icon class="mr-7" icon="fa:fas fa-building"></v-icon>
                  Company Info</span
                >
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list class="py-0">
                  <template
                    v-for="(detailText, detailKey, detailIndex) in user.company"
                    :key="user.id + '-' + detailKey"
                  >
                    <v-list-item
                      class="text-left"
                      :subtitle="detailText"
                      :title="companyTitle[detailIndex]"
                    >
                      <template v-slot:prepend>
                        <v-icon
                          size="x-small"
                          icon="fas fa-circle-dot"
                          class="mr-3"
                        ></v-icon>
                      </template>
                    </v-list-item>
                    <v-divider
                      v-if="Object.keys(user.company).length > detailIndex + 1"
                    ></v-divider>
                  </template>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      companyTitle: {
        0: 'Name',
        1: 'Catch Phrase',
        2: 'Business',
      },
    }
  },
  methods: {
    editClick() {
      this.$router.push({ name: `userEdit`, params: { id: this.user.id } })
    },
  },
}
</script>

<style></style>
