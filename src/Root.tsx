import {Composition} from 'remotion';
import {Both} from './Both';
import {Hubot} from './Hubot';
import {Mona} from './Mona';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Hubot"
				component={Hubot}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Mona"
				component={Mona}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Both"
				component={Both}
				durationInFrames={155}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
