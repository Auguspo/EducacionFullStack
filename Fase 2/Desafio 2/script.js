var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  console.log(xhr.readyState);
});

xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    var response = JSON.parse(xhr.response);
    if (Array.isArray(response)) {
      response.forEach(function (item) {
        if (item.casa && item.casa.nombre) {
          console.log(item.casa.nombre);
        }
      });
    }
  }
});

xhr.open("GET", "https://www.dolarsi.com/api/api.php?type=valoresprincipales");
xhr.send();
