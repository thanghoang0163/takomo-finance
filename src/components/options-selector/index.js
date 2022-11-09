Component({
  props: {
    className: "",
    label: "",
    title: "",
    placeHolder: "",
    bottomSheetHeight: 300,
    isRequired: false,
    isDisabled: false,
    list: [],
    value: "",
    errorMsg: "",
    onSelect: () => {},
  },
  methods: {
    onSelect(e) {
      this.props.onSelect(e);
      my.hideKeyboard();
    },
  },
});
