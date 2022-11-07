Component({
  props: {
    isShowBtn: false,
    title: "",
  },
  methods: {
    onTap() {
      my.navigateBack();
    },
  },
});
