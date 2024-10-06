  <script setup lang="ts">
    import { ref } from 'vue';

    const toggleValue = ref(false);
    const inputValue = ref('');
    const selectedOption = ref(null);
    const sliderValue = ref(50);
    const checkboxValue = ref(false);
    const radioValue = ref(null);
  </script>

  <template>
    <q-card class="q-ma-md">
      <q-card-section class="text-h6">Welcome to your new Quasar app!</q-card-section>
      <q-card-section>
        <q-btn color="primary" label="Click me" />
      </q-card-section>
    </q-card>

    <q-card class="q-ma-md">
      <q-card-section>
        <q-btn color="secondary" label="Secondary Button" class="q-mb-md" />
        <q-toggle v-model="toggleValue" label="Toggle" class="q-mb-md" />
        <q-input filled v-model="inputValue" label="Input Field" class="q-mb-md" />
        <q-select
          filled
          v-model="selectedOption"
          :options="[{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]"
          label="Select"
          class="q-mb-md"
        />
        <q-slider v-model="sliderValue" label="Slider" />
        <q-checkbox v-model="checkboxValue" label="Checkbox" />
        <q-radio v-model="radioValue" val="1" label="Radio 1" />
        <q-radio v-model="radioValue" val="2" label="Radio 2" />
        <q-chip removable color="accent">Chip</q-chip>
        <q-badge color="positive" label="Badge" />
      </q-card-section>
    </q-card>
  </template>
