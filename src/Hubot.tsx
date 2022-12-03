import {continueRender, delayRender} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

let loaded = false;

const loadfont = () => {
	if (loaded) {
		return;
	}
	loaded = true;
	const handle = delayRender();

	const face = new FontFace(
		'Hubot Sans',
		`url(${staticFile('Hubot-Sans.woff2')}) format('woff2')`,
		{
			weight: '200 900',
			stretch: '75% 125%',
		}
	);
	face.load().then(() => {
		document.fonts.add(face);
		continueRender(handle);
	});
};

export const Hubot = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const evolution =
		spring({
			fps,
			frame,
			config: {
				damping: 100,
			},
			durationInFrames: 30,
			durationRestThreshold: 0.001,
		}) -
		spring({
			fps,
			frame: frame - 35,
			config: {
				damping: 100,
			},
			durationInFrames: 30,
			durationRestThreshold: 0.001,
		});

	const weight = interpolate(evolution, [0, 1], [900, 200]);
	const width = interpolate(evolution, [0, 1], [125, 75]);
	const ital = interpolate(evolution, [0, 1], [10, 0]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#3C43CF',
				color: 'white',
				fontSize: 200,
				fontFamily: 'Hubot Sans',
				textAlign: 'center',
				lineHeight: 0.9,
				justifyContent: 'center',
				alignItems: 'center',
				fontVariationSettings: `"wght" ${weight}, "wdth" ${width}, "ital" ${ital}`,
			}}
		>
			<div>HUBOT</div>
			<div>SANS</div>
		</AbsoluteFill>
	);
};

loadfont();
