import parse from "@tiki.vn/mini-html-parser2";

Page({
  data: {
    htmlNodes: [],
    label: "Chúc mừng quý khách đã hoàn thành​ thủ tục đăng ký tại takomo.vn",
    text: "Vui lòng giữ liên lạc, kết quả của hồ sơ sẽ được nhân viên Takomo phản hồi trong ít phút qua điện thoại, hoặc email đã đăng ký.",
  },

  onLoad() {
    const string = `Để thuận tiện cho việc theo dõi tình trạng khoản vay và các ưu đãi hấp
    dẫn sắp tới, vui lòng truy cập <span class="mx-4x-small" style="color: #F82486">ứng dụng di động</span>hoặc
    website của <span class="mx-4x-small" style="color: #F82486">Takomo.vn</span>​`;

    parse(string, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
        });
      }
    });
  },

  onShow() {
    my.hideBackHome({ hide: true });
  },
});
