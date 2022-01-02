

var a = document

module.exports = {
        generateStars(f, wd, wh) {
            for (var e = 0; e < f; e++) {
                

              var d = document.createElement("div");
              d.className =
                e % 20 === 0
                  ? "star star--big"
                  : e % 9 === 0
                  ? "star star--medium"
                  : "star";
              d.setAttribute(
                "style",
                "top:" +
                  Math.round(Math.random() * wh-10) +
                  "px;left:" +
                  Math.round(Math.random() * wd-30) +
                  "px;animation-duration:" +
                  (Math.round(Math.random() * 3000) + 3000) +
                  "ms;animation-delay:" +
                  Math.round(Math.random() * 3000) +
                  "ms;"
              );
              a.getElementById('add-stars').appendChild(d)
            }
        },
   
    
}
