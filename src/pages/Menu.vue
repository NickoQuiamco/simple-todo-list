<template>
  <q-page padding>
    <div class="row menu-page">
      <div class="col-3 q-px-sm">
        <div class="text-h5">Filters</div>
        <div class="text-subtitle2 text-grey-7" >Category</div>
        <div class="q-pa-sm">
          <q-option-group
            :options="options_category"
            v-model="filter_category"
            type="radio"
            size="xs"
            dense
          />
        </div>
        <q-separator class="q-ma-sm" inset />
        <div class="text-subtitle2 text-grey-7" >Price</div>
        <div class="q-pa-sm">
          <q-range
            v-model="filter_price"
            :min="0"
            :max="5000"
            :step="4"
            :left-label-value="filter_price.min + 'php'"
            :right-label-value="filter_price.max + 'php'"
            label
            color="primary"
          />
          <div class="row">
            <div class="col-5">
              <q-input outlined v-model="filter_price.min" dense/>
            </div>
            <div>---</div>
            <div class="col-5">
              <q-input outlined v-model="filter_price.max" dense/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9 q-px-sm">
        <div class="text-h5">Menus</div>
        <q-separator vertical />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default({
  name: 'PageMenu',
  setup() {
    return{
      filter_category: ref(null),
      options_category: [
        { label: 'Apptizer', value: 'appetizer'},
        { label: 'Pork', value: 'pork' },
        { label: 'Chicken', value: 'chicken' },
      ],
      filter_price: ref({
        min: 0,
        max: 5000
      }),
    }
  }
})
</script>
