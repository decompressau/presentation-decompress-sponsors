bespoke.plugins.auto = function(deck, interval) {
  setInterval(deck.next, interval);
};

bespoke.horizontal.from('article', {
  scale: true,
  hash: true,
  state: true,
  loop: true,
  auto: 5000
});
