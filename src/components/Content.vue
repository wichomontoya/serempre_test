<template>
  <article class="content">
    <section class="content__description">
      <p class="content__subtitle">
        What we do
      </p>
      <h3 class="content__title">Story about us</h3>
      <p class="content__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
    <section class="content__sections">
      <div
        class="content__section content__section--first"
        @click.stop="active_section = 1">
        <div
          class="content__section--container"
          v-if="active_section == 1">
          <img :src="require('./../assets/img/users.png')" alt="">
          <p>Super Team</p>
          <div class="content__section--active"></div>
        </div>
      </div>
      <div
        class="content__section content__section--second"
        @click.stop="active_section = 2">
        <div
          class="content__section--container"
          v-if="active_section == 2">
          <img :src="require('./../assets/img/users.png')" alt="">
          <p>Super Team</p>
          <div class="content__section--active"></div>
        </div>
      </div>
      <div
        class="content__section content__section--third"
        @click.stop="active_section = 3">
        <div
          class="content__section--container"
          v-if="active_section == 3">
          <img :src="require('./../assets/img/users.png')" alt="">
          <p>Super Team</p>
          <div class="content__section--active"></div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data(){
    return{
      active_section: 1
    }
  }
}
</script>

<style lang="css">
</style>
