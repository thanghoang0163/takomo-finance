Component({
  props: {
    label: "",
    imgUrl: "",
    isError: false,
    errorText: "",
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
