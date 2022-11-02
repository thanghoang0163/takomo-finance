Component({
  props: {
    steps: 7,
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
