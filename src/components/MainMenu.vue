<template>
<div id="nav">
  <router-link :to="$i18nRoute({ name: 'Home' })">
    {{ $t('menu.home') }}
  </router-link> |
  <router-link :to="$i18nRoute({ name: 'About' })">
    {{ $t('menu.about') }}
  </router-link>
</div>
</template>