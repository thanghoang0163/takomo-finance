Component({
  props: {
    btnText: "",
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
