<template>
  <span>記事コード:{{ aid }}</span>
</template>

<script>

export default {
  name: 'ArticleView',
  props: {
    aid: String
  }
}

</script>
