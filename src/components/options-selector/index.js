Component({
  props: {
    className: "",
    label: "",
    title: "",
    placeHolder: "",
    bottomSheetHeight: 200,
    isRequired: false,
    list: [],
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
