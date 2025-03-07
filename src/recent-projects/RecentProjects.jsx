import './RecentProjects.scss';
import MacOS from './terminals/mac/MacOS';
import Ubuntu from './terminals/ubuntu/Ubuntu';
import Windows from './terminals/windows/Windows';

const RecentProjects = () => {
	return (
		<div>
			<div className="title-recents">
				<span className="letter">R</span>
				<span className="letter">e</span>
				<span className="letter">c</span>
				<span className="letter">e</span>
				<span className="letter">n</span>
				<span className="letter">t</span>
				<span className="letter">s</span>
				<span className="letter">:</span>
			</div>

			<div className="recents">
				<div className="ubuntu">
					<Ubuntu />
				</div>
				<div className="mac">
					<MacOS />
				</div>
				<div className="windows">
					<Windows />
				</div>
			</div>
		</div>
	);
};

export default RecentProjects;
