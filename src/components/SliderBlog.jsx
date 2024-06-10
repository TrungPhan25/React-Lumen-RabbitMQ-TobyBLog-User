import { useLocation, Link } from "react-router-dom";

const breadcrumbs = {
  "/blog": [{ label: "Blog" }],
  "/blog-single": [
    { label: "Blog", link: "/blog" },
    { label: "/" },
    { label: "Blog Single", active: true },
  ],
};
function SliderBlog() {
  const location = useLocation();
  const path = location.pathname;
  let baseUrl = path;

  let parts = baseUrl.split("/");
  baseUrl = "/" + parts[1];
  const breadcrumb = breadcrumbs[baseUrl];

  return (
    <section className="page-title bg-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block text-center">
              <span className="text-white">Our blog</span>
              <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
              <ul className="list-inline">
                {breadcrumb &&
                  breadcrumb.map((item, index) =>
                    item.active ? (
                      <li className="list-inline-item" key={index}>
                        <span className="text-white-50">{item.label}</span>
                      </li>
                    ) : (
                      <li className="list-inline-item" key={index}>
                        <Link to={item.link} className="text-white">
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderBlog;
