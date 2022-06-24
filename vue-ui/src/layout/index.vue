<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import { NCard, NDataTable } from "naive-ui";

// const inputData = `#接龙

// 釜山88爆浆小番茄 福利价 25 三斤 周二到货 但是要满20份成团

// 1. 那拉提（内蒙古饶乐农场）番茄
// 2. 4-3-701 ZT 小番茄一份
// 3. 3-2-801 小番茄1份
// 4. 🐂牛妈🐎✨5-1-1701 小番茄一份
// 5. 芳4-1-801 小番茄1份
// 6. 青苹果4-3-1001  小番茄1
// 7. 3-3-901 小番茄一份
// 8. 云渔月 5-2-1002  小番茄1份
// 9. 3-1-902 小番茄1份
// 10. 4-4-302 小番茄  1份
// 11. 陈4一3一l402小番茄l份
// 12. 卡西  4-2-701小番茄一份
// 13. 管辖 5-3-1801小番茄1份
// 14. 靓天下 2-2-302小番茄一份
// 15. 1-3-901 小番茄1份
// 16. 3－3－602 小番茄一份
// 17. 5-2-1501Alluo 小番茄一份
// 18. 5-2-902小番茄一份`;

const inputData = `#接龙 快速接 我叫车了
8424西瓜9斤及以上 一个28
美都无籽9斤及以上一个29

1. 那拉提（内蒙古饶乐农场）
2. 4-4-302 8424西瓜两个 无籽一个
3. 靓天下 2-2-302美都无籽西瓜一个
4. 3-2-801  8424西瓜一个
5. 5-2-1501Alluo 8424西瓜一个
6. 4-2-1802   无籽一个
7. 管辖 5-3-1801西瓜一个
8. 🦄 Hyotong-Jeong  8424一个
9. 萍安1-2-1001 无籽西瓜一个
10. lihong 5-1-602无籽一个
11. 1-3-902无籽1个
12. ？ 8424 两个
13. 1-3-901 8428 1个`;

const chnNumChar: Record<string, number> = {
  一: 1,
  二: 2,
  两: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
};

const reg = /\d+\.\s(.*)/g;

const r = inputData.match(reg);
const result: Record<string, string | number>[] = [];
r?.slice(1).forEach((item, index) => {
  const resultItem = {
    index: index + 1,
    roomNo: "",
    product: "",
    count: -1,
    original: item
  };
  result.push(resultItem);

  // 获取房间号
  const roomNoReg = /\d+[-－一]\d+[-－一]\d+/;
  const roomNoRes = roomNoReg.exec(item);
  resultItem.roomNo = roomNoRes?.[0] || "";
  const roomNoIndex = roomNoRes?.index || -1;

  item = item.slice(resultItem.roomNo.length + roomNoIndex);

  // 获取数量
  const countReg = /[\d+一二两三四五六七八九十]/;
  const countRes = countReg.exec([...item].reverse().join(""));
  const countString = countRes?.[0] || "";
  console.log("item", item);
  const countIndex = countRes?.index || 0;
  resultItem.count = chnNumChar[countString] ?? Number(countString);

  // 获取产品
  const productReg = new RegExp(`[\s\d]?([^\s]*)${countString}`);
  // console.log(productReg, productReg.exec(item));
  resultItem.product = productReg.exec(item)?.[1] || "";
});

const columns = [
  {
    title: "序号",
    key: "index",
    width: 80
  },
  {
    title: "门牌号",
    key: "roomNo",
    width: 120
  },
  {
    title: "产品",
    key: "product",
    width: 180
  },
  {
    title: "数量",
    key: "count",
    width: 80
  },
  {
    title: "原文",
    key: "original",
    width: 260
  }
];
</script>

<template>
  <div className="layout">
    <n-card header="数据">
      <n-data-table :data="result" :columns="columns" />
    </n-card>
  </div>
</template>

<style lang="less" scoped>
.layout {
  color: black;
}
</style>
