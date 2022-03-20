<template>
  <section
    data-test-id="newsletter"
    id="newsletter"
    class="tw-mt-24 ss:tw-mt-24 tw-mb-36"
  >
    <div
      class="
        text-h1
        tw-z-10 tw-text-left
        ss:tw-text-center
      "
    >
      Newsletter
    </div>
    <div class="sub-text tw-z-10 tw-mt-4 tw-text-left ss:tw-text-center">
      Subscribe to receive the latest major updates.
    </div>

    <div
      class="sub-text tw-z-10 tw-mt-5 success-text tw-text-xl tw-mt-4 tw-text-left ss:tw-text-center"
    >
      {{ success }}
    </div>
    <div v-if="!success" id="content-flex" class="tw-mt-10">
      <div>
        <div class="flex justify-center">
          <div>
            <input
              :disabled="disabled"
              v-model="email"
              type="email"
              class="tw-px-3 tw-py-1.5"
              placeholder="Enter your email address"
              :class="isDark ? 'dark-input' : ''"
            />
            <div class="tw-text-left tw-mt-2 error-text">{{ error }}</div>
          </div>
        </div>
      </div>
      <div>
        <fancy-button @click="send()" class="ss:tw-ml-2">
          SIGN UP
        </fancy-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FancyButton from '~/components/atoms/fancy-button.vue'
import axios from 'axios'

@Component({
  components: { FancyButton },
})
export default class Newsletter extends Vue {
  imageSrc = '/images/'
  email: string = ''
  error: string = ''
  success: string = ''
  disabled: boolean = false

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  isValid() {
    return String(this.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  async send() {
    if (!this.isValid()) {
      this.error = 'Email is invalid'
      this.success = ''
      return
    }
    this.disabled = true
    const bodyFormData = new FormData()
    bodyFormData.append('EMAIL', this.email)
    bodyFormData.append('locale', 'en')
    bodyFormData.append('email_address_check', '')

    const response = await axios({
      method: 'post',
      url:
        'https://c9c346ca.sibforms.com/serve/MUIEAAlbQtPW4jUn6QGY1I_zY748r7KLQiHoSZRfKvpW1SU_dlQ8j3EmqMghhnUQPGsB7LyDcvX3IaMcQ6xVHCweM38WkJty_Cvw86JhnNxibTj7Qps_vR6XiiVK8bwOFbmuRuXoRzLnWE2V04Z_ltVNtaT4lZ_Pv8YvKgM_Dk4I4UBt6O91EAc9oSKycnTwPX_TZPm37AkKK9i3?isAjax=1',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    this.error = ''
    this.success = 'Thank you for signing up!'
    this.email = ''
    this.disabled = false
  }
}
</script>
<style lang="scss" scoped>
section {
  position: relative;
}
embed {
  position: absolute;
  top: -560px;
  z-index: -10;
  left: 30%;
}
.p-rel {
  position: relative;
  .squad {
    background-image: url(/images/squad.svg);
    position: absolute;
    top: -160px;
    z-index: -10;
    left: -24px;
    &--dark {
      background-image: url(/images/squad-dark.svg);
    }
  }
}
#content-flex {
  text-align: center;
  justify-content: center;
  > div {
    margin-bottom: 10px;
  }
  @screen ss {
    > div {
      margin-bottom: 0px;
    }
    flex-direction: row !important;
    display: flex !important;
  }
}
.dark-input {
  border: 2px solid rgba(98, 103, 149, 1);
  background: linear-gradient(
    157.51deg,
    rgba(3, 34, 210, 0.01) 6.95%,
    rgba(161, 79, 240, 0.01) 53.91%,
    rgba(105, 9, 198, 0.01) 81.69%
  );
}
.dark-input::placeholder {
  color: #626795;
  opacity: 1; /* Firefox */
}

input {
  background-clip: padding-box, border-box;
  background-image: linear-gradient(white, white),
    linear-gradient(
      103.62deg,
      #a14ff0 -40.41%,
      #7455ef -3.49%,
      #6909c6 55.45%,
      #dec79f 89.54%
    );
  background-origin: border-box;
  border-radius: 3px;
  border: double 2px transparent;
  font-size: 0.6em;
  height: 45px;
  width: 100%;
  text-transform: uppercase;
  @screen ss {
    width: 350px;
  }
}
</style>
