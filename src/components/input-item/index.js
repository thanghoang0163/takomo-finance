Component({
  props: {
    label: "",
    placeHolder: "",
    type: "",
    value: "",
    maxlength: 0,
    errorText: "",
    isError: false,
    isRequired: false,
    isDisabled: false,
    onInput: () => {},
  },
  methods: {
    _onInput(e) {
      var value = e.detail.value;
      this.props.onInput(value);
    },
  },
});
