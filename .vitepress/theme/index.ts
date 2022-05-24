import { VPTheme } from "@vue/theme";
import { h } from "vue";
import Banner from './components/Banner.vue';

import "./custom.css";

export default {
	...VPTheme,
	Layout() {
		return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
			// uncomment to test layout slots
			// 'sidebar-top': () => h('div', 'hello top'),
			// 'sidebar-bottom': () => h('div', 'hello bottom'),
			// 'content-top': () => h('h1', 'Announcement!'),
			// 'content-bottom': () => h('div', 'Some ads'),
			// 'aside-top': () => h('div', 'this could be huge'),
			// 'aside-mid': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
			// 'aside-bottom': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
		});
	},
};