<template>
  <div>
    <TopArea />
    <h3>複習({{ currentIndex+1 }}/5)</h3>
    <div class="area-border" style="text-align: left;">
      {{ currentItem.note }}
    </div>
    <button class="common-btn" @click="next">OK</button>
  </div>
</template>

<script>
import TopArea from '@/components/TopArea.vue'
import axios from 'axios'

export default {
  components: { TopArea },
  data: () => {
    return {
      currentIndex: 0, // 當前顯示的索引
      currentItem: '', // 當前顯示的資料
    }
  },
  async mounted() {
    const response = await axios.get('https://django-mynotebook.onrender.com/api/notes/');
    console.log('取到的資料', response.data);
    this.$store.state.randomFive = this.getRandomFiveItems(response.data);
    // 初始化顯示第一筆資料
    this.currentItem = this.$store.state.randomFive[this.currentIndex];
  },
  methods: {
    getRandomFiveItems(data) {
      const shuffled = data.sort(() => 0.5 - Math.random()); // 隨機排序
      return shuffled.slice(0, 5); // 取前五個
    },
    next() {
      if (this.currentIndex < this.$store.state.randomFive.length - 1) {
        this.currentIndex++; // 增加索引
        this.currentItem = this.$store.state.randomFive[this.currentIndex]; // 更新顯示的資料
      } else {
        this.$store.state.keepNoteOrReview = 'review';
        this.$router.push('/overview')
      }
    },
  },
}
</script>

<style scoped>
</style>