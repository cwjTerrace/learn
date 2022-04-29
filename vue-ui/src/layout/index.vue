<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout",
  setup(props) {
    console.log(props);
    return () => <div className="layout">1</div>;
  }
});
</script>

<style lang="less" scoped>
.layout {
  color: aqua;
}
</style>
