

  <template>
  <div class="container py-lg-5 py-md-4 py-2">
    <div class="row">
      <var-card
        v-for="(item, index) in words"
        :key="index"
        :src="item.img"
        image-height="350px"
        image-width="370px"
        :title="item.wordName"
        v-model:floating="floating"
        class="col-lg-4 col-md-6 mt-5"
      >
        <template #extra>
          <var-button type="primary" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block @click="tanChu(item.wordMeaning)">
            了解更多
          </var-button>
        </template>

        <template #floating-content>
          <var-divider dashed />

          <div class="card-example-text">
            {{ item.wordMeaning }}
          </div>
        </template>
      </var-card>
      <var-popup v-model:show="center">
        <div class="popup-example-block">
          {{ current }}
        </div>
      </var-popup>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import "../assets/css/style-liberty.css";
import { ref, onMounted } from "vue";
import user from "../api/user";
// const count = ref(0)
// const load = () => {
//   count.value += 2
// }
const center = ref(false);
interface Word {
  wordName: string;
  wordMeaning: string;
  img: string;
  wordId: number;
}
const translateY = ref("100%");
const current = ref(null);
function handleHover(hovering) {
  translateY.value = hovering ? "0" : "100%";
}
const words = ref<Word[]>([]);
const expand = ref(true);
const getWord = async () => {
  const words1 = await user.getWord2();
  words.value = words1 as Word[];
};
onMounted(getWord);
const floating = ref(false);
function tanChu(wordMeaning) {
  center.value = true;
  current.value = wordMeaning;
}
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
  padding: 10px;
  color: rgba(0, 0, 0, 0.653);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.card-example-text {
  padding: 14px;
  font-size: 14px;
  line-height: 28px;
}
.image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
}

.image-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  font-size: 50px;
}
.popup-example-block {
  padding: 24px;
  width: 480px;
}
</style>

