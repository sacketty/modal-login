Package.describe({
  summary: "A very basic modal pincode prompt window targeting mobile devices"
});

Package.on_use(function (api, where) {
  api.use(['underscore', 'bootstrap', 'templating'], 'client');

  api.add_files(['modalLogin.html', 'modalLogin.js', 'modalLogin.css'], 'client');
});