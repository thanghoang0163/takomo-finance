Component({
  props: {
    label: "",
    imgUrl: "",
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
