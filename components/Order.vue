<template>
    <button class="button1 rounded-lg shadow" @click="$emit('swap-box')">
        NOTIFY ME
    </button>
</template>

<style scoped>
    @font-face {
        font-family: mainFont;
        src: url("/fonts/MouseMemoirs-Regular.ttf");
    }
    .comingSoon {
        font-family: mainFont;
        font-size: 200%;
    }
    .button1 {
        text-align: center;
        background-color: #bf5136;
        font-family: mainFont;
        font-size: 200%;
        width: 200px;
        height: 80px;
        color: white;
    }
</style>