---
head:
  - - link
    - rel: stylesheet
      href: /css/templates.css

section1: 바닥 점선 타이틀
section2: 바닥 점선 타이틀
---

<script setup>
    import { ref, onMounted } from 'vue'
    import CustomComponent from './_components/CustomComponent.vue'
    // import { useHead } from '@unhead/vue';

    const count = ref(0)

    /* 
    useHead({
        // Optional
        title: 'Adding class in HTML body',
        meta: [
            {
            name: 'description',
            content: 'Vue tutorial.'
            }
        ],
        // This is where we can add a class in to the HTML body
        bodyAttrs: {
            class: 'vp-doc'
        }
    }); */

    onMounted(() => {
        // console.log(`숫자 세기의 초기값은 ${ count.value } 입니다.`)
        
        // document.body.classList.add = 'vp-doc';
    })
</script>

<link rel="stylesheet" href="./public/css/templates.css">

# Templates

<div class="section">

## 섹션 타이틀

::: section-header `01` `바닥 점선 타이틀` `default`

:::

<p style="font-size: 13px;">UI 참고: 《Do it! 리액트 프로그래밍 정석》, 19쪽, 박호준 지음, 이지스퍼블리싱</p>

::: section-header `02` `라운드 박스 타이틀` `round`

:::

::: section-header `03` `아이콘 꾸밈 타이틀` `figured`

:::

::: section-header `04` `그러데이션이 들어간 타이틀` `ggg`

:::

</div>

<div class="section">

## 추천사

<div class="sectionnn" data-type="recommend">
    <h3>그사이가 그거다 집에 상황을 많이 운동은 대대적이지요 하다.</h3>
    <p>때가 소리로 공익이던고 자식의 되며 발전에 울구는가. 웃다 묘사의, 통일의 감격이다 가니 데 지난 않은, 주가의 맛보지요. 성미가 나다 뿌리치고 어떤 바로 정권에 있게 도시를 하여 부른다. <b>세월에서 사고는 나라에서 보편적이 생각에 나와 밭이는 한 있다.</b> 조치까지 때문 대전이 제약을 성분과 있을 심해지다. 맑기 잘 똑같아 정무는 터진다, 싫다.</p>
    <p class="author">홍길동(동에 번쩍 서에 번쩍)</p>
</div>

<p style="font-size: 13px;">UI 참고: 《Do it! 리액트 프로그래밍 정석》, 6쪽, 박호준 지음, 이지스퍼블리싱</p>

</div>

<div class="section">

## 대화 표현

<section data-type="conversation">
    <div class="block mine">
        <p class="each">안녕</p>
    </div>
    <div class="block">
        <p class="each">ㅇㅇ</p>
    </div>
    <div class="block mine">
        <p class="each not-read">자니?</p>
    </div>
</section>

</div>

<div class="section">

## 범례

<dl class="legend">
    <dt>난이도</dt>
    <dd><i>★★</i>☆☆☆</dd>
    <dt>사용 빈도</dt>
    <dd><i>★★★</i>☆☆</dd>
    <dt>유용성</dt>
    <dd><i>★★★★★</i></dd>
</dl>

<p style="font-size: 13px;">UI 참고: 《Do it! 리액트 프로그래밍 정석》, 19쪽, 박호준 지음, 이지스퍼블리싱</p>

## 도움말


### 블록


### 풍선

</div>

<div class="section ex">

## 단 나누기

### 2단

<div style="column-count: 2; text-align: justify;">
    그사이가 그거다 집에 상황을 많이 운동은 대대적이지요 하다. 때가 소리로 공익이던고 자식의 되며 발전에 울구는가. 웃다 묘사의, 통일의 감격이다 가니 데 지난 않은, 주가의 맛보지요. 성미가 나다 뿌리치고 어떤 바로 정권에 있게 도시를 하여 부른다. 세월에서 사고는 나라에서 보편적이 생각에 나와 밭이는 한 있다. 조치까지 때문 대전이 제약을 성분과 있을 심해지다. 맑기 잘 똑같아 정무는 터진다, 싫다.  
    것 위기에 힝타기를, 사정이, 과학에서, 후를 새벽과, 되면서 있게 의하다. 하다 같이 본, 독자를 코브라나 넘습니다 안인 그대로 다니다. 맞는다 속은 고르지만 않은 강물을 방식을, 씨 쌉니다 하게 덧붙이다. 나오며 회의는 나가 기존이 섬의 너무 끝으로 참이 하필 잇다. 안 많아서 이 갖기 어떤 살 무슨, 가아 옆은 건설되지. 예술은 명칭을 선거구라고 자치가 몸까지 재미있어 본 지나다. 그 마음이기 나의 문화다 빈 받아 사람이 대사관을, 원천적으로 어종으로, 잘하야. 동인이 남자와 광기의 이웃처럼 그냥 생각하라.  
    놓이므로 학생은 내 문제라도 빨가벗겨지다 않던 따르자 야단치다. 방구들이 이상에 모든 겨우 이질감의, 중 들어오다. 재료가 이것을 범위는 등 근소세의 글쎄 세계를 너로 새벽이 떠오르다. 이야기와 때문 때로 감상으로 있지 가내적 의식하다. 돌아든 오에스다 인방 의회에 데 상투적이 발표한 얘 나이가, 힘들다. 바라본다 과정은 다 알던가 한다 없은 가능하다. 외 보다 멈칫거리고 밟고 유입되어 들판으로 가장, 팔리다, 있은가.
</div>

### 3단

<div style="margin-top: 10px; column-count: 3; text-align: justify;">
    그사이가 그거다 집에 상황을 많이 운동은 대대적이지요 하다. 때가 소리로 공익이던고 자식의 되며 발전에 울구는가. 웃다 묘사의, 통일의 감격이다 가니 데 지난 않은, 주가의 맛보지요. 성미가 나다 뿌리치고 어떤 바로 정권에 있게 도시를 하여 부른다. 세월에서 사고는 나라에서 보편적이 생각에 나와 밭이는 한 있다. 조치까지 때문 대전이 제약을 성분과 있을 심해지다. 맑기 잘 똑같아 정무는 터진다, 싫다.  
    것 위기에 힝타기를, 사정이, 과학에서, 후를 새벽과, 되면서 있게 의하다. 하다 같이 본, 독자를 코브라나 넘습니다 안인 그대로 다니다. 맞는다 속은 고르지만 않은 강물을 방식을, 씨 쌉니다 하게 덧붙이다. 나오며 회의는 나가 기존이 섬의 너무 끝으로 참이 하필 잇다. 안 많아서 이 갖기 어떤 살 무슨, 가아 옆은 건설되지. 예술은 명칭을 선거구라고 자치가 몸까지 재미있어 본 지나다. 그 마음이기 나의 문화다 빈 받아 사람이 대사관을, 원천적으로 어종으로, 잘하야. 동인이 남자와 광기의 이웃처럼 그냥 생각하라.  
    놓이므로 학생은 내 문제라도 빨가벗겨지다 않던 따르자 야단치다. 방구들이 이상에 모든 겨우 이질감의, 중 들어오다. 재료가 이것을 범위는 등 근소세의 글쎄 세계를 너로 새벽이 떠오르다. 이야기와 때문 때로 감상으로 있지 가내적 의식하다. 돌아든 오에스다 인방 의회에 데 상투적이 발표한 얘 나이가, 힘들다.
</div>

</div>

<!-- <CustomComponent title="바닥 점선 타이틀" lead="01" data-type="default" /> -->

<!-- <div class="section-header" data-type="default">
    <h3><em>01</em> 바닥 점선 타이틀</h3>
</div> -->

<!-- <CustomComponent title="라운드 박스 타이틀" lead="02" data-type="round" /> -->

<!-- <div class="section-header" data-type="round">
    <h3><em>02</em> 라운드 박스 타이틀</h3>
</div> -->

<!-- <CustomComponent title="아이콘 꾸밈 타이틀" lead="03" data-type="figured" /> -->

<!-- <div class="section-header" data-type="figured">
    <h3><em>03</em> 아이콘 꾸밈 타이틀</h3>
</div> -->
