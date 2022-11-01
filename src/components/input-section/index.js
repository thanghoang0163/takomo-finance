Component({
  props: {
    label: "",
    placeHolder: "",
    className:"",
    inputsArray: 0,
    onInput: () => {},
  },
  methods: {
    onInput() {
      this.props.onInput();
    },
  },
});
