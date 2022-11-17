Component({
  props: {
    className: "",
    label: "",
    title: "",
    placeHolder: "",
    bottomSheetHeight: 250,
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
