import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Hubot} from './Hubot';
import {Mona} from './Mona';

export const Both: React.FC = () => {
	const {width, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr =
		spring({
			fps,
			frame: frame - 65,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
		}) -
		spring({
			fps,
			frame: frame - 145,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
		});

	const offsetLeft = interpolate(spr, [0, 1], [0, -width]);

	return (
		<AbsoluteFill
			style={{
				translate: `${offsetLeft}px`,
			}}
		>
			<Hubot />
			<AbsoluteFill
				style={{
					left: width,
				}}
			>
				<Mona delay={80} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
