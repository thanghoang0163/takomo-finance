Component({
  props: {
    isShow: false,
    text: [],
    onHide: () => {},
  },
  methods: {
    _onHide() {
      this.props.onHide();
    },
  },
});
