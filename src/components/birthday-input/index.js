Component({
  props: {
    className: "",
    label: "",
    placeHolder: "",
    errorText: "",
    isRequired: false,
    isError: false,
    value:"",
    onTapIcon: () => {},
  },
  methods: {
    onTapIcon() {
      this.props.onTapIcon();
    },
  },
});
