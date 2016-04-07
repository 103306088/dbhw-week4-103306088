var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=1015e1db-bbf0-4cef-9bea-9928e84b3735";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
