<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h5 :class="`mt-n1 mb-4 text-${year.color}`">Lorem ipsum</h5>
        <div>
          <h6>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
            nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an
            vim zril disputando voluptatibus, vix an salutandi sententiae.
          </h6>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "black",
        year: "2017",
      },
      {
        color: "red",
        year: "2018",
      },
      {
        color: "blue",
        year: "2019",
      },
      {
        color: "amber",
        year: "2020",
      },
      {
        color: "blue",
        year: "2021",
      },
      {
        color: "red",
        year: "2022",
      },
      {
        color: "yellow",
        year: "2023",
      },
    ],
  }),
};
</script>
