Component({
  props: {
    label: "Ngân hàng:",
    placeHolder: "Ngân hàng",
    title: "Ngân hàng",
    list: [],
    isError: false,
    isRequired: true,
    errorText: "",
    value: "",
    bankList: [],
    onInput: () => {},
    onSearch: () => {},
  },
  data: {
    isShow: false,
  },
  methods: {
    _onInput() {
      this.props.onInput();
    },
    _onSearch() {
      this.props.onSearch();
    },
    onTap() {
      this.setData({
        isShow: true,
      });
    },
    _onClose() {
      this.setData({
        isShow: false,
      });
    },
  },
});
