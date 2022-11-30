Component({
  props: {
    className: "",
    label: "",
    placeHolder: "",
    errorText: "",
    isRequired: false,
    isError: false,
    value: "",
    _onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
