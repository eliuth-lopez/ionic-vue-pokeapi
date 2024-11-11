<template>
  <v-responsive>
    <v-app>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title><v-img src="/pokeapi_192_square.png" height="120" width="120" /></v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item v-for="j in 6" :key="`${j}`" :to="{ name: 'Type', params: { type: j } }">Type {{ j }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="bg-white-lighten-2">
        <v-container fluid>


          <v-row>
            <v-col class="mt-2" cols="12">
              <strong class="text-secondary text-h6">{{ type ? `Type ${type}` : '' }}</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(j, index) in pokemons" :key="`${j}`" cols="6" sm="4" md="3" lg="2">
              <v-card>
                <v-img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + (perPage * pageIndex) + 1}.png`"
                  class="white--text align-end" gradient="to bottom,rgba(0,0,0,.2),  rgba(0,0,0,.1)" height="200px">

                </v-img>
                <v-card-actions class="text-uppercase">
                  {{ j.name }}
                  <v-spacer></v-spacer>
                  <v-btn color="accent">View</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-pagination v-if="totalPages > perPage" rounded="circle" :length="totalPages" :total-visible="3"
              active-color="accent" :model-value="pageIndex + 1" :show-first-last-page="true" @first="changePage(1)"
              @last="changePage(totalPages)" @next="changePage(pageIndex + 1)"
              @prev="changePage(pageIndex - 1)"></v-pagination>
          </v-row>


        </v-container>
      </v-main>


    </v-app>
  </v-responsive>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { PokemonUseCase } from '@/app/modules/pokemon/useCase/PokemonUseCase';
import { IPokemonUseCase } from '@/app/modules/pokemon/useCase/IPokemonUseCase';

export default {
  setup() {
    const drawer = ref(false)
    const route = useRoute()
    const type = computed(() => route.params.type) || null

    const pokemons = ref([]);
    const perPage = ref(12);
    const pageIndex = ref(1);
    const totalItems = ref(0);
    const totalPages = ref(0);
    const pokemonUseCase: IPokemonUseCase = new PokemonUseCase();

   

    const changePage = (page: number) => {
      pokemonUseCase.getPage(page, perPage.value).then((data) => {
        pageIndex.value = page
        totalItems.value = data.totalItems
        totalPages.value = data.totalPages
        pokemons.value = data.pokemons
      })
    }




    changePage(1);
    return {
      drawer,
      type,
      pokemons,
      perPage,
      pageIndex,
      totalItems,
      totalPages,
      changePage
    }
  }
}

</script>
<style>
.v-main {
  height: 100vh;
  overflow-y: auto;
}
</style>
