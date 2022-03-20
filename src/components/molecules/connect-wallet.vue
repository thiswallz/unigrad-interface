<template>
  <div class="tw-flex tw-content-center">
    account:{{ account }}
    <div class="tw-w-36 tw-flex">
      <cross-chain-icon :chain="chain" />
      <div class="sub-text">{{ chainName }}</div>
    </div>
    <div class="tw-w-36">{{ RDTBalance }} RDT</div>
    <div class="tw-w-36" v-if="chain">
      {{ generalBalance }} {{ chain.name }}
    </div>
    <div class="tw-w-66">
      <fancy-button v-if="!isWalletConnected" @click="connectWallet()">
        CONNECT WALLET
      </fancy-button>
    </div>
    <div class="tw-w-14" v-if="1 == 2">
      <img
        alt="Configuration"
        class="tw-m-1 hover:tw-opacity-50 tw-cursor-pointer tw-w-6"
        :src="`${imageSrc}icons/config.svg`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FancyButton from "~/components/atoms/fancy-button.vue";
import CrossChainIcon from "~/components/atoms/cross-chain-icon.vue";

@Component({
  components: { FancyButton, CrossChainIcon },
})
export default class ConnectWallet extends Vue {
  imageSrc = '/images/';

  get isDark() {
    return this.$store.state.theme.color === "dark";
  }

  get isWalletConnected() {
    return this.$store.state.web3.walletConnected === true;
  }

  get chain() {
    return this.$store.state.web3.chain;
  }

  get account() {
    return this.$store.state.web3.account;
  }

  get chainName() {
    return this.$store.state.web3.chainName;
  }

  get RDTBalance() {
    return this.$store.state.web3.RDTBalance;
  }

  get RDTPrice() {
    return this.$store.state.web3.RDTPrice;
  }

  get generalBalance() {
    return this.$store.state.web3.generalBalance;
  }

  connectWallet() {
    this.$store.dispatch("web3/connect", "metamask");
  }

}
</script>

<style lang="scss" scoped>
.circle-chain {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
