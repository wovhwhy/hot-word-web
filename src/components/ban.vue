

  <template>
    <ul v-infinite-scroll="load"  class="infinite-list" style="overflow: auto">
      <li v-for="(item, index) in words" :key="index" class="infinite-list-item" >
        <div>
          <strong>{{ item.wordName }}</strong>: {{ item.wordMeaning }}
        </div>
      </li>
    </ul>
  </template>
  
  <script lang="ts" setup>
  import { ref ,onMounted } from 'vue'
  import user from "../api/user"
  const count = ref(0)
  const load = () => {
    count.value += 2
  }
  interface Word {
  wordName: string;
  wordMeaning: string;
}
  const words = ref<Word[]>([]);;

  const getWord = async () => {
    const words1 = await user.getWord();
      words.value = words1 as Word[];
  };
  onMounted(getWord);
</script>
  

<style>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  background-color: rgba(169, 169, 169, 0.228);
  margin: 15px;
  padding:10px;
  color:rgba(0, 0, 0, 0.653);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>

