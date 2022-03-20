<template>
  <Layout>
    <div>
      <home class="tw-mt-36 sm:tw-mt-48" />
      <roadmap />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HowToBuy from '~/components/organisms/home/how-to-buy.vue'
import Home from '~/components/organisms/home/home.vue'
import Solutions from '~/components/organisms/home/solutions.vue'
import Team from '~/components/organisms/home/team.vue'
import RecentNews from '~/components/organisms/home/recent-news.vue'
import Roadmap from '~/components/organisms/home/roadmap.vue'
import TheyTalked from '~/components/organisms/home/they-talked.vue'
import Community from '~/components/organisms/home/community.vue'
import Newsletter from '~/components/organisms/home/newsletter.vue'
import Partners from '~/components/organisms/home/partners.vue'
import Contributors from '~/components/organisms/home/contributors.vue'
import Token from '~/components/organisms/home/token.vue'
import Whitepaper from '~/components/organisms/home/whitepaper.vue'

@Component({
  components: {
    HowToBuy,
    Home,
    Solutions,
    Team,
    RecentNews,
    Roadmap,
    TheyTalked,
    Community,
    Newsletter,
    Partners,
    Token,
    Contributors,
    Whitepaper,
  },
  metaInfo: {
    title: 'UniGrad',
    meta: [
      {
        name: 'description',
        content:
          'Next generation for proof of ownership.',
      },
      {
        name: 'og:type',
        content: 'website',
      },
    ],
  },
})
export default class Index extends Vue {}
</script>
