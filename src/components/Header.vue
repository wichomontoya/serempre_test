<template>
  <article class="header">
    <section class="header__logo">
      <p>Serempre</p>
    </section>
    <section class="header__links">
      <span
        class="header__links--span"
        :class="{'active' : section_selected == 'about'}"
        @click="section_selected = 'about'">About</span>
      <span
        class="header__links--span"
        :class="{'active' : section_selected == 'service'}"
        @click="section_selected = 'service'">Service</span>
      <span
        class="header__links--span"
        :class="{'active' : section_selected == 'work'}"
        @click="section_selected = 'work'">Work</span>
      <span
        class="header__links--span"
        :class="{'active' : section_selected == 'blog'}"
        @click="section_selected = 'blog'">Blog</span>
      <span
        class="header__links--span"
        :class="{'active' : section_selected == 'contact'}"
        @click="section_selected = 'contact'">Contact</span>
      <span
        class="header__links--span"
        @click="section_selected = 'cart'">
        <img :src="require('./../assets/img/cart.png')" alt=""></span>
      <span
        class="header__links--span"
        @click="section_selected = 'search'">
        <img :src="require('./../assets/img/search.png')" alt=""></span>
    </section>
  </article>
</template>

<script>
export default {
  data(){
    return{
      section_selected: "about"
    }
  }
}
</script>
