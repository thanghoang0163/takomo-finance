Component({
  props: {
    className: "",
    label: "",
    title: "",
    placeHolder: "",
    errorText: "",
    bottomSheetHeight: 200,
    isRequired: false,
    isError: false,
    list: [],
    value:"",
    onSelect: () => {},
  },
  methods: {
    onSelect(e) {
      this.props.onSelect(e);
    },
  },
});
