Component({
  props: {
    label: "",
    imgUrl: "",
    isError: false,
    errorText: "",
    filePath: "",
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
