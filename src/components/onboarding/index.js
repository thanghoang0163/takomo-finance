Component({
  props: {
    text: "Takomo ",
  },
  methods: {
    onTap() {
      my.setStorage({
        key: "isFirst",
        data: {
          title: false,
        },
      });
      my.navigateTo({ url: "pages/register/index" });
    },
  },
});
