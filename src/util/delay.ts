export function delay(setLoading) {
  for (var i = 0; i <= 5; i++) {
    (function loop(i) {
      setTimeout(function () {
        if (i == 5) {
          setLoading(false);
        }
      }, 2000 * i);
    })(i);
  }
}
