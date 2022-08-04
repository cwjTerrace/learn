<script lang="ts" setup>
import { reactive } from "vue";
const rooms: string[][] = reactive([]);

function handleClick() {
  rooms.splice(0, rooms.length);
  const boys = "boy A、girl B、girl C、girl D";
  const boyList = boys.split("、");

  const girls = "girl A、girl B、girl C、girl D";
  const girlList = girls.split("、");

  function getRandomSort(input: string[]) {
    const source = [...input];
    const list: string[] = [];
    for (let index = 3; index >= 0; index--) {
      const i = getRandomInt(0, index + 1);
      const boy = source[i];
      source.splice(i, 1);
      list.push(boy);
    }
    return list;
  }

  const boyRandomSort: string[] = getRandomSort(boyList);
  const girlRandomSort: string[] = getRandomSort(girlList);

  rooms.push(boyRandomSort.splice(0, 2));
  rooms.push(boyRandomSort.splice(0, 2));

  rooms.push(girlRandomSort.splice(0, 2));
  rooms.push(girlRandomSort.splice(0, 2));
}

/**
 *
 * @param min 最小值
 * @param max 最大值
 * @returns 随机数
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.random());
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
</script>

<template>
  <div className="layout">
    <n-card title="随机结果">
      <div v-for="(room, index) in rooms">房间{{ index + 1 }}:{{ JSON.stringify(room) }}</div>

      <template #header-extra> <n-button type="primary" @click="handleClick">点我</n-button> </template>
    </n-card>
    <br />
  </div>
</template>
