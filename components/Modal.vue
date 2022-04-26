<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal">
          <iframe width="540" height="660" src="https://6ff58a47.sibforms.com/serve/MUIEAAYD936zs-TVERGvB5hhAnu7r9jOH1fGPhsLDPxfHumGcImrjwernCNiRfrICeP9NRd2Mr1hIBN8BLEeU2xvKP7m9TfiRM8umkjwqaCvtx12n1OKOPgS8AucbZ15mUP05m8LzuHWaK8EkWJE2PCST4e7-jIkKAEgAtrCJ2YxkrJptC45QQ9BaH2ELdwZD9EsGCHn8oIGiNSL" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
        <div class="bg-gray-100 text-center">
          <button class="button1  mb-8 mx-auto" @click="close">
              Nevermind
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>


<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
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