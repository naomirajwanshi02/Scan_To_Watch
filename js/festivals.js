// The one place that lists the interactions. Each one is its OWN project/repo and its own
// GitHub Pages site: edit and push it there and this hub opens the new version straight away
// (the hub only redirects to it, it holds no copy of the videos).
//
// `index` is the position of the picture inside targets.mind (tools/make-target.html builds
// it in this order). To add one: add it here AND rebuild targets.mind.

const BASE = 'https://naomirajwanshi02.github.io/';

export const FESTIVALS = [
  { index: 0, id: 'gion', name: 'Gion Matsuri', sub: 'Witness the summer festival',
    url: BASE + 'Gion_Matsuri_Video/', picture: BASE + 'Gion_Matsuri_Video/target.png' },
  { index: 1, id: 'crane', name: 'Origami Paper Crane', sub: 'Fold along to make your own paper crane',
    url: BASE + 'Crane_Video_AR/', picture: BASE + 'Crane_Video_AR/target.png' },
];

// ?from=hub tells the page it was opened from here, so its cross comes back to this scan screen.
export const openUrl = (f) => f.url + '?from=hub&t=' + Date.now();
