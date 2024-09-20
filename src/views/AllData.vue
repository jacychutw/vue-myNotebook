<template>
  <div>
    <TopArea />
    <h3>所有筆記</h3>
    <div class="all-overview-content">
      <ul>
        <li v-for="note in notes" :key="note.id">
          <label class="note-container">
            <input type="checkbox" :value="note.id" v-model="selectedNotes" />
            <span class="custom-checkbox"></span>
            <span class="note-text">{{ note.note }}</span>
          </label>
        </li>
      </ul>
    </div>

    <button class="common-btn" :disabled="delBtn" @click="deleteNotes">刪除</button>
    <button class="common-btn" @click="toHome">回首頁</button>
  </div>
</template>

<script>
import TopArea from '@/components/TopArea.vue'
import axios from 'axios'

export default {
  components: { TopArea },
  data: () => {
    return {
      notes: [],
      selectedNotes: [],
      msg: '',
      delBtn: true,
    }
  },
  watch: {
    selectedNotes(value) {
      console.log('--------------selectedNotes', value)
      if (value.length !== 0) {
        this.delBtn = false;
      } else {
        this.delBtn = true;
      }
    }
  },
  mounted() {
    this.showCollectData();
    this.msg = '';
  },
  methods: {
    async showCollectData() {
      try {
        const response = await axios.get('https://django-mynotebook.onrender.com/api/notes/');
        console.log('get datatatata', response.data);
        this.notes = response.data
        if (this.notes.length == 0) {
          this.msg = '目前沒有筆記'
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    },
    async deleteNotes() {
      console.log('Selected notes:', this.selectedNotes);
      try {
        const response = await axios.delete('https://django-mynotebook.onrender.com/api/notes/', {
          data: { ids: this.selectedNotes }
        });
        console.log('delete datatatata', response.data);
        this.showCollectData();
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    },
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.all-overview-content {
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 600px;
  max-width: 80%;
  margin: auto;
  height: 300px;
  padding: 20px;
  /* box-sizing: border-box; 確保邊框和內邊距不會增加盒子尺寸 */
  overflow-y: auto;
  text-align: left;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

.note-container {
  display: block;
  cursor: pointer;
}

.note-text {
  display: inline;
  margin: 5px 0;
}

/* 隱藏原本的 checkbox */
input[type="checkbox"] {
  display: none;
}

/* 自定義的 checkbox */
.custom-checkbox {
  top: 4px;
  width: 20px;
  height: 20px;
  background-color: #f4f4f4; /* 自定義底色 */
  border-radius: 5px;
  display: inline-block;
  position: relative;
  margin-right: 10px;
}

/* 當 checkbox 被勾選時的樣式 */
input[type="checkbox"]:checked + .custom-checkbox {
  background-color: #e8d7ef; /* 勾選後的顏色 */
}

/* 當 checkbox 被勾選時，顯示勾選符號 */
.custom-checkbox::after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 3px;
  width: 5px;
  height: 8px;
  border: solid rgb(127, 98, 98);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

input[type="checkbox"]:checked + .custom-checkbox::after {
  display: block;
}
</style>
