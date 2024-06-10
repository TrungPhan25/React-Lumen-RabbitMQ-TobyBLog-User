import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10">
              <div className="block">
                <span className="d-block mb-3 text-white text-capitalize">
                  Prepare for new future
                </span>
                <h1 className="animated fadeInUp mb-5">
                  Mong muốn của tôi <br />
                  là chia sẽ kiến thức <br />
                  và trải nghiệm cho mọi người
                </h1>
                <Link
                  to="/blog"
                  target="_blank"
                  className="btn btn-main animated fadeInUp btn-round-full"
                >
                  Bắt đầu<i className="btn-icon fa fa-angle-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section intro">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="section-title">
                <span className="h6 text-color ">
                  We are creative &amp; expert people
                </span>
                <h2 className="mt-3 content-title">
                  Chúng tôi mong muốn chia sẽ những kiến thức bổ ích cho mọi
                  người cần sự sự hỗ trợ
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-desktop color-one"></i>
                <h4 className="mt-4 mb-3">Kiến thức bổ ích</h4>
                <p>Được chắt lọc, tổng hợp ở nhiều trang web đang tin cậy</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-medall color-one"></i>
                <h4 className="mt-4 mb-3">Đề cao tin thần tự nghiên cứu</h4>
                <p>
                  Khuyên khích mọi người luôn trau dồi kiến thức, kỹ năng mới
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item">
                <i className="ti-layers-alt color-one"></i>
                <h4 className="mt-4 mb-3">Luôn nỗ lực từng ngày</h4>
                <p>Kết quả sẽ không làm bạn thất vọng nếu cố gắng hằng ngày</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
