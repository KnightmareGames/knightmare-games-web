<template>
    <div>
        <h1 class="comingSoon">
            You have successfully subscribed to our email list!
        </h1>
        <button class="button1 mt-8">
            <nuxt-link to="/">
                HOME
            </nuxt-link>
        </button>
    </div>
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
        background-image: url("/button-texture.png");
        font-family: mainFont;
        font-size: 150%;
        width: 130px;
        height: 50px;
        color: white;
    }
</style>