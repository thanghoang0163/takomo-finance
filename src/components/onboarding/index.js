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
      my.navigateTo({ url: "pages/login/index" });
    },
  },
  didMount() {
    // my.getStorage({
    //   key: "isFirst",
    //   success: (res) => {
    //     this.setData({
    //       isFirst: res.data.title,
    //     });
    //   },
    //   failed: (err) => {
    //     console.log(err);
    //   },
    // });
  },
});
