 <!-- <template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="奥利给" name="1"  class="custom-collapse-item">
        <div class="word">
          该词是“给力奥”的倒读，因网络主播的使用而流行。作为感叹词，包含赞美、加油、打气等多种感情色彩，被网友配以夸张、魔性的表情和音调广泛使用。
          </div>
      </el-collapse-item>
      <el-collapse-item title="好家伙" name="2"  class="custom-collapse-item">
        <div class="word">
          最早是相声中常见的语气词，表示感叹之意。后来网友在吐槽某事或对某事感到惊讶时，通常会加上“好家伙”加强语气。
        </div>
      </el-collapse-item>
      <el-collapse-item title="干饭人" name="3"  class="custom-collapse-item" >
        <div class="word">
          指吃饭时非常积极的人。干饭人用语:“干啥啥不行，吃饭第一名”，“干饭人干饭魂，干饭人吃饭得用盆”。
        </div>
      </el-collapse-item>
      <el-collapse-item title="爷青回" name="4"  class="custom-collapse-item" >
        <div class="word">
          是“爷的青春又回来了”的缩写，用来表达人在变化后的环境中面对曾经熟悉的人和事物时，油然而生的一种喜悦之情。
        </div>
      </el-collapse-item>
      <el-collapse-item title="真香" name="5"  class="custom-collapse-item">
        <div class="word">
          意思是打脸。这个梗的由来是《变形记》。其中有一期的城市主人公去了乡村后，发誓不吃乡村家庭的蛋炒饭，后来又吃了，并说“真香”。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>


<style  scoped>
.word{
  font-size: 20px;
}
.custom-collapse-item ::v-deep .el-collapse-item__header {
  font-size: 25px;
}

</style>  -->





  <template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="(item, index) in words" :key="index" class="infinite-list-item">
        <div>
          <strong>{{ item.word }}</strong>: {{ item.mean }}
        </div>
      </li>
    </ul>
 
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref(0)
  const load = () => {
    count.value += 2
  }
  
  const words = ref([
    { word: '奥利给', mean: '该词是“给力奥”的倒读，因网络主播的使用而流行。作为感叹词，包含赞美、加油、打气等多种感情色彩，被网友配以夸张、魔性的表情和音调广泛使用。'},
    { word: '好家伙', mean: '最早是相声中常见的语气词，表示感叹之意。后来网友在吐槽某事或对某事感到惊讶时，通常会加上“好家伙”加强语气。'},
    { word: '干饭人', mean: '指吃饭时非常积极的人。干饭人用语:“干啥啥不行，吃饭第一名”，“干饭人干饭魂，干饭人吃饭得用盆”。'},
    { word: '爷青回', mean: '是“爷的青春又回来了”的缩写，用来表达人在变化后的环境中面对曾经熟悉的人和事物时，油然而生的一种喜悦之情。'},
    { word: '真香', mean: '意思是打脸。这个梗的由来是《变形记》。其中有一期的城市主人公去了乡村后，发誓不吃乡村家庭的蛋炒饭，后来又吃了，并说“真香”。'},
    { word: '夺笋', mean: '“夺笋“是“多损”的东北方言谐音，多用于吐槽某人“很缺德”，由网络主播带火。相声中常能听到将“多”读为二声的“多损呐”，但用动宾短语“夺笋”来记录音变后的“多损”，并以文字形式大范围流行仍是近两年的新语言现象。由于“夺笋”包含着实体“笋”，又极具画面感，便逐渐衍生出“山上的笋都被你夺完了”等变体,以及像“大熊猫点外卖——笋到家了”这样的歇后语。2021年,与“夺笋”类似的“槽言槽语”还有诸如“你礼貌吗”“离谱”“……了但没完全……”“我不理解”等。'
    }
  ])
  
  

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
  justify-content: center;
  height: 70px;
  background-color: rgba(169, 169, 169, 0.228);
  margin: 10px;
  color:rgba(0, 0, 0, 0.653);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>



