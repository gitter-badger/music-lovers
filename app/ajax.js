//
// Ajax Request
//

var ajax = (function() {
  let jsonCounter = 0;

  return {
    getJSON(url) {
      let count        = jsonCounter++;
      let jsonCallback = "_jsonCallback" + count;
      let script       = document.createElement('script');
      let scriptID     = '_jsonGet' + count;

      let withCleanUp = function(res) {
        return (rej) => {
          if (document.getElementById(scriptID)) {
            document.body.removeChild(script)
          }
          delete window.jsonCallback;

          res(rej);
        };
      };

      return new Promise((resolve, reject) => {
        window.jsonCallback = withCleanUp(resolve);
        script.onerror      = withCleanUp(reject);

        window.setTimeout(script.onerror, 7000);

        script.id  = scriptID;
        script.src = url + '&callback=jsonCallback';
        document.body.appendChild(script);
      });
    }
  };
})();
