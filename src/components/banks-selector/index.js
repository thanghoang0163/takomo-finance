Component({
  props: {
    label: "Ngân hàng:",
    placeHolder: "Chọn ngân hàng",
    title: "Ngân hàng",
    list: [],
    isError: false,
    isRequired: true,
    isBank: true,
    isShow: false,
    isEmpty: false,
    errorText: "",
    value: "",
    bankList: [],
    onInput: () => {},
    onSearch: () => {},
    onSelectBank: () => {},
    onOpenBottomSheet: () => {},
  },
  data: {},
  methods: {
    _onInput() {
      this.props.onInput();
    },
    _onSearch(e) {
      const value = e.detail.value;
      this.props.onSearch(value);
    },
    _onOpenBottomSheet() {
      this.props.onOpenBottomSheet();
    },
    _onClose() {
      this.props.onClose();
    },
    _onSelectBank(e) {
      this.props.onSelectBank(e.target.dataset.name);
    },
  },
});
