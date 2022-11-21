Component({
  props: {
    isShow: false,
    isAboutUs: false,
    onClose: () => {},
  },
  methods: {
    _onClose() {
      this.props.onClose();
    },
  },
});
