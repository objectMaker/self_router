export default function (Vue) {
  Vue.component("router-link", {
    render() {
      return (
        <div>
          我是router-link{1 + 2},{this.$slots.default}
        </div>
      );
    },
  });
}
