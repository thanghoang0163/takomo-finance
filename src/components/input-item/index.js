Component({
  props: {
    label: "",
    placeHolder: "",
    onInput: () => {},
  },
  methods: {
    _onInput(e) {
      var value = e.detail.value;
      this.props.onInput(value);
    },
  },
});
