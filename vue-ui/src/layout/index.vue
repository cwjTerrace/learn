<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout",
  setup(props) {
    console.log(props);
    function aaa(params: any) {
      console.log("aaaaaa", params);
    }
    aaa`
      background-color: hotpink;
      &:hover {
        color: red;
      }
    `;
    return () => <div className="layout">1</div>;
  }
});
</script>

<style lang="less" scoped>
.layout {
  color: aqua;
}
</style>
