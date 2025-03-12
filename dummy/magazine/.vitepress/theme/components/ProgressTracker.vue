<script setup>
import { ref, onMounted, computed } from 'vue'

const stats = ref(null)
const loading = ref(true)
const error = ref(null)

// 진행률 계산
const progressPercentage = computed(() => {
  if (!stats.value || stats.value.totalChars === 0) return 0
  return Math.round(stats.value.progress)
})

// 색상 계산
const progressColor = computed(() => {
  const percent = progressPercentage.value
  if (percent < 30) return '#e74c3c'
  if (percent < 70) return '#f39c12'
  return '#2ecc71'
})

// 통계 데이터 가져오기
async function fetchStats() {
  try {
    loading.value = true
    
    // 개발 환경에서는 API 호출, 프로덕션에서는 JSON 파일 로드
    let data
    
    if (import.meta.env.DEV) {
      const response = await fetch('/__markdown_stats')
      data = await response.json()
    } else {
      const response = await fetch('/markdown-stats.json')
      data = await response.json()
    }
    
    stats.value = data
  } catch (err) {
    console.error('통계 데이터를 가져오는 중 오류 발생:', err)
    error.value = '데이터를 불러올 수 없습니다.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchStats)
</script>

<template>
  <div class="progress-tracker">
    <h3>집필 진척률</h3>
    
    <div v-if="loading" class="loading">
      데이터를 분석 중입니다...
    </div>
    
    <div v-else-if="error" class="error">
      오류: {{ error }}
    </div>
    
    <div v-else-if="stats" class="progress-stats">
      <div class="progress-bar-container">
        <div 
          class="progress-bar" 
          :style="{ 
            width: `${progressPercentage}%`, 
            backgroundColor: progressColor 
          }"
        ></div>
        <span class="progress-text">{{ progressPercentage }}%</span>
      </div>
      
      <div class="stats">
        <div class="stat-item">
          <div class="stat-label">문단</div>
          <div class="stat-value">
            {{ stats.actualParas.toLocaleString() }} / {{ stats.totalParas.toLocaleString() }}
          </div>
        </div>
        
        <div class="stat-item">
          <div class="stat-label">글자 수</div>
          <div class="stat-value">
            {{ stats.actualChars.toLocaleString() }} / {{ stats.totalChars.toLocaleString() }}
          </div>
        </div>
      </div>
      
      <!-- 챕터별 진행률 (선택 사항) -->
      <div v-if="stats.files && stats.files.length > 0" class="chapter-progress">
        <h4>파일별 진행률</h4>
        <div v-for="file in stats.files" :key="file.path" class="file-progress">
          <div class="file-name">{{ file.path }}</div>
          <div class="file-bar-container">
            <div 
              class="file-bar" 
              :style="{
                width: `${file.totalChars > 0 ? (file.actualChars / file.totalChars) * 100 : 0}%`,
                backgroundColor: progressColor
              }"
            ></div>
          </div>
          <div class="file-percentage">
            {{ file.totalChars > 0 ? Math.round((file.actualChars / file.totalChars) * 100) : 0 }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 이전 스타일에 추가 */
.chapter-progress {
  margin-top: 2rem;
}

.file-progress {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.file-name {
  flex: 0 0 30%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
}

.file-bar-container {
  flex: 1;
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 1rem;
}

.file-bar {
  height: 100%;
  transition: width 0.5s ease;
}

.file-percentage {
  flex: 0 0 40px;
  text-align: right;
  font-size: 0.9rem;
}
</style>