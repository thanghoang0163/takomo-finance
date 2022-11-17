Component({
  props: {
    label: "Ngân hàng:",
    placeHolder: "Chọn ngân hàng",
    title: "Ngân hàng",
    list: [],
    isError: false,
    isRequired: true,
    isBank: true,
    errorText: "",
    value: "",
    bankList: [],
    onInput: () => {},
    onSearch: () => {},
    onSelectbank: () => {},
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
    onOpenBottomSheet() {
      this.setData({
        isShow: true,
      });
    },
    _onClose() {
      this.setData({
        isShow: false,
      });
    },
    _onSelectbank() {
      this.props.onSelectbank();
    },
  },
});
