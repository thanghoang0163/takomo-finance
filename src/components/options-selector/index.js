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
    idKey: "",
    labelKey: "",
    value: "",
    errorMsg: "",
    onSelect: () => {},
  },
  methods: {
    onSelect(e) {
      this.props.onSelect(e);
    },
  },
});
