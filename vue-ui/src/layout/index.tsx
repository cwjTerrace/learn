import { defineComponent } from "vue";

const layoutProps = { a: String };

const Layout = defineComponent({
  name: "Layout",
  props: layoutProps,
  setup(props) {
    console.log(props);
    return () => <div>1</div>;
  }
});

export default Layout;
