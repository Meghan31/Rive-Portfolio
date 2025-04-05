import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import {
	// FiActivity,
	FiAlertCircle,
	FiChevronLeft,
	FiChevronRight,
	FiCode,
	FiCpu,
	FiGithub,
	FiTerminal,
} from 'react-icons/fi';
import {
	SiKeras,
	SiPython,
	SiPytorch,
	SiScikitlearn,
	SiTensorflow,
} from 'react-icons/si';
import './aimlDevPage.scss';

const AIMLDevPage = () => {
	const [activeProject, setActiveProject] = useState(0);
	const [isModelView, setIsModelView] = useState(false);
	const [isCodeView, setIsCodeView] = useState(false);
	const [isHovering, setIsHovering] = useState(null);
	const [isTerminalOpen, setIsTerminalOpen] = useState(true);
	const terminalRef = useRef(null);
	const [isAnimating, setIsAnimating] = useState(false);

	// Enhanced AI/ML projects with additional details
	const projects = [
		{
			title: 'Neural Music Recommender',
			description:
				'A sophisticated music recommendation system using collaborative filtering and deep neural networks to provide personalized suggestions based on user preferences and listening habits.',
			image: '/assets/images/ai/music.jpg',
			link: 'https://github.com/Meghan31/Music-Recommendation-System.git',
			technologies: ['TensorFlow', 'Python', 'Neural Networks', 'NLP'],
			color: '#FF4F79',
			icon: <SiTensorflow />,
			category: 'Recommendation Systems',
			accuracy: '92.7%',
			codeSnippet: `
# Building the neural recommendation model
def build_recommendation_model(num_users, num_items, embedding_size=50):
    # Input layers
    user_input = layers.Input(shape=(1,), name='user_input')
    item_input = layers.Input(shape=(1,), name='item_input')
    
    # Embedding layers
    user_embedding = layers.Embedding(
        input_dim=num_users, 
        output_dim=embedding_size, 
        name='user_embedding'
    )(user_input)
    item_embedding = layers.Embedding(
        input_dim=num_items, 
        output_dim=embedding_size, 
        name='item_embedding'
    )(item_input)
    
    # Reshape
    user_vector = layers.Flatten()(user_embedding)
    item_vector = layers.Flatten()(item_embedding)
    
    # Concatenate user and item embeddings
    concatenated = layers.Concatenate()([user_vector, item_vector])
    
    # Dense layers
    dense1 = layers.Dense(128, activation='relu')(concatenated)
    dense1 = layers.Dropout(0.2)(dense1)
    dense2 = layers.Dense(64, activation='relu')(dense1)
    dense2 = layers.Dropout(0.2)(dense2)
    
    # Output layer
    output = layers.Dense(1, activation='sigmoid')(dense2)
    
    # Model definition
    model = models.Model(inputs=[user_input, item_input], outputs=output)
    model.compile(
        optimizer=optimizers.Adam(learning_rate=0.001),
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    
    return model
`,
			modelArchitecture: [
				{ type: 'Input', nodes: 2, label: 'User & Item IDs' },
				{ type: 'Embedding', nodes: 50, label: 'Embedding Layer' },
				{ type: 'Dense', nodes: 128, label: 'Hidden Layer 1' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.2)' },
				{ type: 'Dense', nodes: 64, label: 'Hidden Layer 2' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.2)' },
				{ type: 'Output', nodes: 1, label: 'Sigmoid Output' },
			],
		},
		{
			title: 'Breast Cancer Detection',
			description:
				'An AI-driven model for early detection of breast cancer using advanced image analysis and classification techniques to improve diagnostic accuracy and patient outcomes.',
			image: '/assets/images/ai/cancer.jpg',
			link: 'https://github.com/Meghan31/Breast-Cancer-Prediction.git',
			technologies: ['PyTorch', 'Computer Vision', 'CNN', 'Transfer Learning'],
			color: '#EE4C2C',
			icon: <SiPytorch />,
			category: 'Medical Diagnostics',
			accuracy: '94.3%',
			codeSnippet: `
# CNN model for cancer detection
class CancerDetectionModel(nn.Module):
    def __init__(self):
        super(CancerDetectionModel, self).__init__()
        
        # Load pre-trained ResNet50 model
        self.resnet = models.resnet50(pretrained=True)
        
        # Freeze early layers
        for param in list(self.resnet.parameters())[:-20]:
            param.requires_grad = False
            
        # Replace final fully connected layer
        num_features = self.resnet.fc.in_features
        self.resnet.fc = nn.Sequential(
            nn.Linear(num_features, 512),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(512, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 2),  # Binary classification
            nn.Softmax(dim=1)
        )
        
    def forward(self, x):
        return self.resnet(x)
`,
			modelArchitecture: [
				{ type: 'Input', nodes: 3, label: 'RGB Image' },
				{ type: 'Embedding', nodes: 64, label: 'ResNet Layers' },
				{ type: 'Dense', nodes: 512, label: 'FC Layer 1' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.3)' },
				{ type: 'Dense', nodes: 128, label: 'FC Layer 2' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.2)' },
				{ type: 'Output', nodes: 2, label: 'Softmax Output' },
			],
		},
		{
			title: 'Smart Hotel Management',
			description:
				'An AI-enhanced hotel management solution that optimizes room allocation, predicts booking patterns, and personalizes customer service to improve operational efficiency and guest satisfaction.',
			image: '/assets/images/ai/hotel.jpg',
			link: 'https://github.com/Meghan31/Hotel-Management.git',
			technologies: [
				'Scikit-learn',
				'Python',
				'Time Series Analysis',
				'Clustering',
			],
			color: '#F89939',
			icon: <SiScikitlearn />,
			category: 'Business Intelligence',
			accuracy: '88.5%',
			codeSnippet: `
# Booking demand prediction model
def train_booking_prediction_model(historical_data):
    # Feature engineering
    features = preprocess_booking_data(historical_data)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        features, historical_data['booking_status'],
        test_size=0.2, random_state=42
    )
    
    # Create and train model pipeline
    model = Pipeline([
        ('scaler', StandardScaler()),
        ('feature_selection', SelectKBest(f_classif, k=15)),
        ('classifier', RandomForestClassifier(
            n_estimators=200, 
            max_depth=15,
            min_samples_split=5,
            class_weight='balanced',
            random_state=42
        ))
    ])
    
    # Train model
    model.fit(X_train, y_train)
    
    # Evaluate
    accuracy = model.score(X_test, y_test)
    print(f"Model accuracy: {accuracy:.4f}")
    
    return model
`,
			modelArchitecture: [
				{ type: 'Input', nodes: 42, label: 'Features' },
				{ type: 'Dense', nodes: 0, label: 'Preprocessing' },
				{ type: 'Dense', nodes: 15, label: 'Feature Selection' },
				{ type: 'Dense', nodes: 200, label: 'Random Forest' },
				{ type: 'Output', nodes: 1, label: 'Classification' },
			],
		},
		{
			title: 'Sign Language Translator',
			description:
				'A machine learning-based application that translates sign language gestures into text or speech in real-time, bridging communication gaps for the hearing impaired.',
			image: '/assets/images/ai/sign.jpg',
			link: 'https://github.com/Meghan31/Sign-Language-Translator.git',
			technologies: ['TensorFlow', 'Computer Vision', 'LSTM', 'MediaPipe'],
			color: '#FF6F00',
			icon: <SiTensorflow />,
			category: 'Accessibility',
			accuracy: '91.2%',
			codeSnippet: `
# Real-time hand gesture recognition model
def build_gesture_recognition_model():
    # CNN-LSTM architecture for temporal gesture recognition
    model = Sequential([
        # CNN layers for spatial features
        TimeDistributed(Conv2D(64, (3, 3), activation='relu', padding='same'), 
                        input_shape=(sequence_length, img_height, img_width, 3)),
        TimeDistributed(MaxPooling2D((2, 2))),
        TimeDistributed(Conv2D(128, (3, 3), activation='relu', padding='same')),
        TimeDistributed(MaxPooling2D((2, 2))),
        TimeDistributed(Conv2D(256, (3, 3), activation='relu', padding='same')),
        TimeDistributed(MaxPooling2D((2, 2))),
        
        # Flatten CNN output for LSTM
        TimeDistributed(Flatten()),
        
        # LSTM layers for temporal features
        LSTM(256, return_sequences=True),
        Dropout(0.4),
        LSTM(128),
        Dropout(0.3),
        
        # Output layers
        Dense(64, activation='relu'),
        Dropout(0.2),
        Dense(num_classes, activation='softmax')
    ])
    
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model
`,
			modelArchitecture: [
				{ type: 'Input', nodes: 3, label: 'Video Frames' },
				{ type: 'Dense', nodes: 64, label: 'Conv2D Layer 1' },
				{ type: 'Dense', nodes: 128, label: 'Conv2D Layer 2' },
				{ type: 'Dense', nodes: 256, label: 'Conv2D Layer 3' },
				{ type: 'Dense', nodes: 256, label: 'LSTM Layer 1' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.4)' },
				{ type: 'Dense', nodes: 128, label: 'LSTM Layer 2' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.3)' },
				{ type: 'Dense', nodes: 64, label: 'Dense Layer' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.2)' },
				{ type: 'Output', nodes: 28, label: 'Softmax Output' },
			],
		},
		{
			title: 'Drowsiness Detection System',
			description:
				'A real-time system that uses computer vision to detect driver drowsiness and prevent road accidents by monitoring eye movements and facial expressions.',
			image: '/assets/images/ai/drowsiness.jpg',
			link: 'https://github.com/Meghan31/Drowsiness-Detection.git',
			technologies: [
				'Keras',
				'OpenCV',
				'Deep Learning',
				'Real-time Processing',
			],
			color: '#D00000',
			icon: <SiKeras />,
			category: 'Safety Systems',
			accuracy: '95.8%',
			codeSnippet: `
# Eye state classification model
def create_drowsiness_detection_model():
    model = Sequential()
    
    # First convolutional layer
    model.add(Conv2D(32, (3, 3), padding='same', input_shape=(24, 24, 1)))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(0.25))
    
    # Second convolutional layer
    model.add(Conv2D(64, (3, 3), padding='same'))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(0.25))
    
    # Third convolutional layer
    model.add(Conv2D(128, (3, 3), padding='same'))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(0.25))
    
    # Fully connected layers
    model.add(Flatten())
    model.add(Dense(512))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(Dropout(0.5))
    model.add(Dense(2))  # Open or Closed eyes
    model.add(Activation('softmax'))
    
    # Compile model
    model.compile(
        optimizer=Adam(learning_rate=0.001),
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model
`,
			modelArchitecture: [
				{ type: 'Input', nodes: 1, label: 'Eye Image' },
				{ type: 'Dense', nodes: 32, label: 'Conv2D Layer 1' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.25)' },
				{ type: 'Dense', nodes: 64, label: 'Conv2D Layer 2' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.25)' },
				{ type: 'Dense', nodes: 128, label: 'Conv2D Layer 3' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.25)' },
				{ type: 'Dense', nodes: 512, label: 'Dense Layer' },
				{ type: 'Dropout', nodes: 0, label: 'Dropout (0.5)' },
				{ type: 'Output', nodes: 2, label: 'Softmax Output' },
			],
		},
	];

	// Check if activeProject is valid
	useEffect(() => {
		if (activeProject >= projects.length) {
			setActiveProject(0);
		}
	}, [activeProject, projects.length]);

	const nextProject = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
			setTimeout(() => setIsAnimating(false), 500);
		}
	};

	const prevProject = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
			setTimeout(() => setIsAnimating(false), 500);
		}
	};

	const selectProject = (index) => {
		if (!isAnimating && index !== activeProject) {
			setIsAnimating(true);
			setActiveProject(index);
			setTimeout(() => setIsAnimating(false), 500);
		}
	};

	const toggleModelView = () => {
		setIsCodeView(false);
		setIsModelView(!isModelView);
	};

	const toggleCodeView = () => {
		setIsModelView(false);
		setIsCodeView(!isCodeView);
	};

	const toggleTerminal = () => {
		setIsTerminalOpen(!isTerminalOpen);
	};

	// Animation variants
	const modelVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
		exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
	};

	const codeVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	};

	// Current active project - Add safety check
	const currentProject = projects[activeProject] || projects[0];

	// Neural network visualization component
	const NetworkVisualization = ({ architecture }) => {
		return (
			<div className="network-visualization">
				<div className="network-layers">
					{architecture.map((layer, layerIndex) => (
						<div
							key={layerIndex}
							className={`network-layer ${layer.type.toLowerCase()}`}
						>
							<div className="layer-label">{layer.label}</div>
							<div className="layer-nodes">
								{Array.from({ length: Math.min(layer.nodes, 8) }).map(
									(_, nodeIndex) => (
										<motion.div
											key={nodeIndex}
											className="node"
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{
												delay: layerIndex * 0.1 + nodeIndex * 0.02,
												duration: 0.3,
											}}
										/>
									)
								)}
								{layer.nodes > 8 && (
									<div className="more-nodes">+{layer.nodes - 8}</div>
								)}
							</div>
							{layer.type === 'Dropout' && (
								<div className="dropout-visualization">
									{Array.from({ length: 8 }).map((_, i) => (
										<motion.div
											key={i}
											className={`dropout-node ${
												i % 5 === 0 ? 'inactive' : 'active'
											}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.5 + i * 0.05 }}
										/>
									))}
								</div>
							)}
						</div>
					))}
				</div>
				<div className="network-connections">
					{architecture.slice(0, -1).map((_, layerIndex) => (
						<svg
							key={layerIndex}
							className="connections-svg"
							width="100%"
							height="100%"
							preserveAspectRatio="none"
						>
							{Array.from({ length: 15 }).map((_, lineIndex) => (
								<motion.line
									key={lineIndex}
									x1="0%"
									y1={`${10 + (lineIndex * 80) / 15}%`}
									x2="100%"
									y2={`${5 + (lineIndex * 90) / 15}%`}
									strokeWidth="1"
									stroke="rgba(255,255,255,0.2)"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										delay: 0.3 + layerIndex * 0.1 + lineIndex * 0.01,
										duration: 0.8,
										ease: 'easeInOut',
									}}
								/>
							))}
						</svg>
					))}
				</div>
			</div>
		);
	};

	// Define prop types for the NetworkVisualization component
	NetworkVisualization.propTypes = {
		architecture: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string.isRequired,
				nodes: PropTypes.number.isRequired,
				label: PropTypes.string.isRequired,
			})
		).isRequired,
	};

	return (
		<div className="aiml-dev-page">
			<motion.div
				className="aiml-header"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="header-content">
					<h1>AI & Machine Learning</h1>
					<p>
						Explore my portfolio of intelligent systems and machine learning
						models solving complex real-world problems with cutting-edge
						technologies
					</p>
					<div className="tech-indicators">
						<div
							className="tech-badge tensorflow"
							// style={{
							// 	color: '#FF4F79',
							// }}
						>
							<SiTensorflow /> TensorFlow
						</div>
						<div className="tech-badge pytorch">
							<SiPytorch /> PyTorch
						</div>
						<div className="tech-badge python">
							<SiPython /> Python
						</div>
						<div className="tech-badge sklearn">
							<SiScikitlearn /> Scikit-learn
						</div>
					</div>
				</div>
			</motion.div>

			<div className="showcase-container">
				<div className="terminal-toggle">
					<motion.button
						className={`toggle-btn ${isTerminalOpen ? 'active' : ''}`}
						whileTap={{ scale: 0.95 }}
						onClick={toggleTerminal}
					>
						<FiTerminal /> {isTerminalOpen ? 'Hide Terminal' : 'Show Terminal'}
					</motion.button>
				</div>

				<AnimatePresence>
					{isTerminalOpen && (
						<Draggable
							handle=".terminal-header"
							defaultPosition={{ x: 0, y: 0 }}
							bounds=".showcase-container"
						>
							<motion.div
								className="terminal-window"
								ref={terminalRef}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3 }}
							>
								<div className="terminal-header">
									<div className="terminal-title">
										<FiTerminal className="terminal-icon" />
										<span>Model Training - {currentProject.title}.py</span>
									</div>
									<div className="terminal-controls">
										<div className="terminal-button minimize"></div>
										<div className="terminal-button maximize"></div>
										<div
											className="terminal-button close"
											onClick={toggleTerminal}
										></div>
									</div>
								</div>
								<div className="terminal-content">
									<div className="terminal-line">
										$ cd ~/projects/
										{currentProject.title.toLowerCase().replace(/\s+/g, '-')}
									</div>
									<div className="terminal-line">$ python train_model.py</div>
									<div className="terminal-output">
										<div>Loading dataset from ./data/processed/dataset.csv</div>
										<div>
											Processing data and creating train/test split (80/20)
										</div>
										<div>
											Building {currentProject.category.toLowerCase()} model...
										</div>
										<div>Initializing with GPU acceleration</div>
										<div className="model-summary">
											<div>
												Model: &quot;
												{currentProject.title
													.toLowerCase()
													.replace(/\s+/g, '_')}
												&quot;
											</div>
											<div>
												_________________________________________________________________
											</div>
											<div>Layer (type) Output Shape Param #</div>
											<div>
												=================================================================
											</div>
											{currentProject.modelArchitecture.map((layer, idx) => (
												<div key={idx}>
													{layer.type.toLowerCase()} ({layer.label}){' '}
													{layer.nodes > 0 ? `(None, ${layer.nodes})` : '---'}{' '}
													{idx * 1000 + 123}
												</div>
											))}
											<div>
												=================================================================
											</div>
											<div>Total params: 2,438,521</div>
											<div>Trainable params: 2,438,521</div>
											<div>Non-trainable params: 0</div>
											<div>
												_________________________________________________________________
											</div>
										</div>
										<div>Training model...</div>
										<div>
											Epoch 1/20: 100%|██████████| 442/442 [00:32&lt;00:00]
										</div>
										<div>
											loss: 0.6532 - accuracy: 0.7143 - val_loss: 0.5982 -
											val_accuracy: 0.7821
										</div>
										<div>
											Epoch 2/20: 100%|██████████| 442/442 [00:31&lt;00:00]
										</div>
										<div>
											loss: 0.5123 - accuracy: 0.8024 - val_loss: 0.4834 -
											val_accuracy: 0.8256
										</div>
										<div className="success">
											✓ Training complete! Final accuracy:{' '}
											{currentProject.accuracy}
										</div>
										<div className="success">
											✓ Model saved to ./models/
											{currentProject.title.toLowerCase().replace(/\s+/g, '_')}
											_v1.3.h5
										</div>
									</div>
									<div className="terminal-line cursor">$</div>
								</div>
							</motion.div>
						</Draggable>
					)}
				</AnimatePresence>

				<div className="navigation-controls">
					<motion.button
						className="nav-btn prev"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={prevProject}
						disabled={isAnimating}
					>
						<FiChevronLeft />
					</motion.button>

					<div className="project-counter">
						<span className="current">{activeProject + 1}</span>
						<span className="separator">/</span>
						<span className="total">{projects.length}</span>
					</div>

					<motion.button
						className="nav-btn next"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={nextProject}
						disabled={isAnimating}
					>
						<FiChevronRight />
					</motion.button>
				</div>

				<div className="showcase-content">
					<div className="project-details-container">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeProject}
								className="project-details"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 30 }}
								transition={{ duration: 0.4 }}
							>
								<div className="project-title-row">
									<h2>{currentProject.title}</h2>
									<div
										className="project-icon"
										style={{ backgroundColor: currentProject.color }}
									>
										{currentProject.icon}
									</div>
								</div>

								<p className="project-description">
									{currentProject.description}
								</p>

								<div className="project-metrics">
									<div className="metric">
										<div className="metric-label">Accuracy</div>
										<div className="metric-value">
											{currentProject.accuracy}
										</div>
									</div>
									<div className="metric">
										<div className="metric-label">Category</div>
										<div className="metric-value">
											{currentProject.category}
										</div>
									</div>
								</div>

								<div className="tech-tags">
									{currentProject.technologies.map((tech, index) => (
										<span key={index} className="tech-tag">
											{tech}
										</span>
									))}
								</div>

								<div className="action-buttons">
									<motion.a
										href={currentProject.link}
										className="github-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<FiGithub /> View on GitHub
									</motion.a>

									<motion.button
										className={`view-btn ${isModelView ? 'active' : ''}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={toggleModelView}
									>
										<FiCpu /> {isModelView ? 'Hide Model' : 'View Model'}
									</motion.button>

									<motion.button
										className={`code-btn ${isCodeView ? 'active' : ''}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={toggleCodeView}
									>
										<FiCode /> {isCodeView ? 'Hide Code' : 'View Code'}
									</motion.button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="preview-container">
						<AnimatePresence mode="wait">
							{isModelView && (
								<motion.div
									className="model-visualization"
									key="model"
									variants={modelVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="visualization-header">
										<div className="viz-title">Neural Network Architecture</div>
										<div className="accuracy-badge">
											<FiAlertCircle /> {currentProject.accuracy} Accuracy
										</div>
									</div>
									<NetworkVisualization
										architecture={currentProject.modelArchitecture}
									/>
								</motion.div>
							)}
							{isCodeView && (
								<motion.div
									className="code-display"
									key="code"
									variants={codeVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="code-header">
										<div className="file-name">model.py</div>
										<div className="language-tag">Python</div>
									</div>
									<pre className="code-content">
										<code>{currentProject.codeSnippet}</code>
									</pre>
								</motion.div>
							)}
							{!isModelView && !isCodeView && (
								<motion.div
									className="project-image-container"
									key="image"
									variants={modelVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="pulse-overlay"></div>
									<img
										src={currentProject.image}
										alt={currentProject.title}
										className="project-main-image"
									/>
									<div className="image-overlay">
										<div className="ai-badge">
											<FiCpu /> AI PROJECT
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>

			<div className="project-thumbnails">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						className={`project-thumbnail ${
							index === activeProject ? 'active' : ''
						}`}
						whileHover={{
							scale: 1.1,
							boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
							borderColor: project.color,
						}}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.05, duration: 0.3 }}
						onClick={() => selectProject(index)}
						onMouseEnter={() => setIsHovering(index)}
						onMouseLeave={() => setIsHovering(null)}
					>
						<div className="thumbnail-image-container">
							<img
								src={project.image}
								alt={project.title}
								className="thumbnail-image"
							/>
							{isHovering === index && (
								<motion.div
									className="thumbnail-overlay"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									<div className="overlay-content">
										<span
											className="project-icon small"
											style={{ backgroundColor: project.color }}
										>
											{project.icon}
										</span>
										<span className="thumbnail-title">{project.title}</span>
									</div>
								</motion.div>
							)}
						</div>
						{index === activeProject && (
							<motion.div
								className="active-indicator"
								layoutId="activeIndicator"
								style={{ backgroundColor: project.color }}
							/>
						)}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default AIMLDevPage;
