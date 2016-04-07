var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=datasetMetadataSearch&q=id:01ac5a1d-dfc3-44c7-84a7-6d76bcb2879b";

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
