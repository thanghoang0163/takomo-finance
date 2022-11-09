Component({
  props: {
    label: "Giới tính:",
    items: [],
    isError: false,
    errorText: "",
    isRequired: false,
    onChange: () => {},
  },
  methods: {
    _onChange(e) {
      const value = e.detail.value;
      this.props.onChange(value);
    },
  },
});
