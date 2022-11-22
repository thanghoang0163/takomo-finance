Component({
  props: {
    isShow: false,
    desc: [],
    header: [],
    btnText: "",
    onCloseModal: () => {},
  },
  methods: {
    _onCloseModal() {
      this.props.onCloseModal();
    },
  },
});
