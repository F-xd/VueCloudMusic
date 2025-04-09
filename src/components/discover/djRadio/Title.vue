<template>
    <div class='title'>
        <a>{{ title }}</a>
        <a class="more"> 更多></a>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
});
</script>

<style lang='less' scoped>
.title {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;

    >a:first-child {
        font-size: 24px;
        color: #333;
        font-weight: normal;
        &:hover {
            text-decoration: underline;
        }
    }

    .more {
        font-size: 12px;
        color: #666;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>