import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import {
	FiActivity,
	// FiAlertCircle,
	FiAward,
	FiBarChart,
	FiBell,
	FiBox,
	FiCalendar,
	FiCheckSquare,
	FiChevronLeft,
	FiChevronRight,
	FiChrome,
	FiClock,
	FiCloud,
	FiCode,
	FiCodepen,
	FiCpu,
	FiDatabase,
	FiDownload,
	FiEdit,
	FiEdit2,
	FiExternalLink,
	FiFileText,
	FiGitBranch,
	FiGithub,
	FiGlobe,
	FiHeart,
	FiHelpCircle,
	FiKey,
	FiLayers,
	FiLayout,
	// FiLink,
	FiLock,
	FiMap,
	FiMaximize,
	FiMenu,
	FiMessageCircle,
	FiMessageSquare,
	FiMonitor,
	FiPackage,
	FiPieChart,
	FiRadio,
	FiRefreshCw,
	FiSave,
	FiServer,
	FiShield,
	FiShoppingBag,
	FiSliders,
	FiSmartphone,
	FiSquare,
	FiTerminal,
	FiTrendingUp,
	FiUsers,
} from 'react-icons/fi';

// Using only Feather icons (Fi) which are more reliable
import './webDevPage.scss';

const WebDevPage = () => {
	const [activeProject, setActiveProject] = useState(0);
	const [isConsoleOpen, setIsConsoleOpen] = useState(true);
	const [isCodeView, setIsCodeView] = useState(false);
	const [isArchView, setIsArchView] = useState(false);
	const [isHovering, setIsHovering] = useState(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const consoleRef = useRef(null);

	// Enhanced web development projects
	const projects = [
		//1
		{
			title: 'Interactive Portfolio with Rive',
			description:
				'A dynamic portfolio built using Rive animations, showcasing skills and projects with fluid transitions and engaging interactive elements to create an immersive user experience.',
			// image: '/assets/images/web/portfolio.jpg',
			image: '/assets/images/web/port.jpeg',

			link: 'https://github.com/Meghan31/Rive-Portfolio.git',
			technologies: ['React', 'Rive', 'GSAP', 'Tailwind CSS'],
			color: '#61DAFB',
			icon: <FiMonitor />,
			category: 'Frontend Development',
			performance: '98/100',
			codeSnippet: `
	// Animation controller for Rive integration
	import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
	
	const AnimatedHero = () => {
	  const { rive, RiveComponent } = useRive({
		src: '/animations/portfolio_character.riv',
		stateMachines: 'Character_State',
		artboard: 'Hero',
		autoplay: true,
	  });
	
	  // State machine inputs
	  const hoverInput = useStateMachineInput(
		rive, 'Character_State', 'isHovering'
	  );
	  
	  const scrollInput = useStateMachineInput(
		rive, 'Character_State', 'scrollPercent', 0
	  );
	  
	  // Update animation based on scroll position
	  useEffect(() => {
		const handleScroll = () => {
		  const scrollPosition = window.scrollY;
		  const maxScroll = document.body.scrollHeight - window.innerHeight;
		  const scrollPercent = Math.min(scrollPosition / maxScroll, 1);
		  
		  if (scrollInput) {
			scrollInput.value = scrollPercent;
		  }
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	  }, [scrollInput]);
	  
	  return (
		<div 
		  className="hero-animation-container"
		  onMouseEnter={() => hoverInput && (hoverInput.value = true)}
		  onMouseLeave={() => hoverInput && (hoverInput.value = false)}
		>
		  <RiveComponent className="rive-hero" />
		</div>
	  );
	};
	
	export default AnimatedHero;
		  `,
			architecture: [
				{
					type: 'Client',
					components: [
						{
							name: 'React Frontend',
							icon: <FiMonitor />,
						},
						{ name: 'Rive Animations', icon: <FiLayout /> },
						{ name: 'Router', icon: <FiServer /> },
					],
				},
				{
					type: 'Optimizations',
					components: [
						{ name: 'Code Splitting', icon: <FiCode /> },
						{ name: 'Asset Preloading', icon: <FiCloud /> },
						{ name: 'Lazy Loading', icon: <FiExternalLink /> },
					],
				},
				{
					type: 'Deployment',
					components: [
						{
							name: 'CI/CD Pipeline',
							icon: <FiPackage />,
						},
						{
							name: 'CDN Distribution',
							icon: <FiCloud />,
						},
						{ name: 'Analytics', icon: <FiServer /> },
					],
				},
			],
		},
		{
			title: 'Chrome Extension',
			description: 'A lightweight Chrome extension build with React',
			image: '/assets/images/web/extension.jpg',
			link: 'https://github.com/Meghan31/nostalgia-copy-paste-extension',
			technologies: ['React', 'Chrome API', 'JavaScript', 'CSS'],
			color: '#4285F4',
			icon: <FiChrome />,
			category: 'Browser Extension',
			performance: '97/100',
			codeSnippet: `
// Chrome Extension - Background Script
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyToNostalgia",
    title: "Save to Nostalgia",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyToNostalgia" && info.selectionText) {
    chrome.storage.local.get(['savedItems'], (result) => {
      const savedItems = result.savedItems || [];
      const newItem = {
        text: info.selectionText,
        source: tab.url,
        timestamp: new Date().toISOString()
      };
`,
			architecture: [
				{
					type: 'Components',
					components: [
						{
							name: 'Popup UI',
							icon: <FiSquare />,
						},
						{ name: 'Background Script', icon: <FiCode /> },
						{ name: 'Content Script', icon: <FiFileText /> },
					],
				},
				{
					type: 'Features',
					components: [
						{ name: 'Storage API', icon: <FiSave /> },
						{ name: 'Context Menu', icon: <FiMenu /> },
						{ name: 'Notifications', icon: <FiBell /> },
					],
				},
				{
					type: 'Distribution',
					components: [
						{
							name: 'Chrome Web Store',
							icon: <FiShoppingBag />,
						},
						{
							name: 'Version Control',
							icon: <FiGitBranch />,
						},
						{ name: 'User Analytics', icon: <FiPieChart /> },
					],
				},
			],
		},
		{
			title: 'Mind-Bloom',
			description:
				'A full-stack mental wellness application featuring mood tracking, journaling, and personalized affirmations that increased user engagement by 45%.',
			image: '/assets/images/web/mindbloom.jpeg',
			link: 'https://github.com/Meghan31/Mind-Bloom',
			technologies: [
				'React',
				'Node.js',
				'PostgreSQL',
				'Prisma',
				'JWT',
				'Google Cloud',
			],
			color: '#8E44AD',
			icon: <FiHeart />,
			category: 'Full Stack Development',
			performance: '97/100',
			codeSnippet: `
// Mind-Bloom - Mood Tracking Feature
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const MoodTracker = () => {
  const [moodData, setMoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/api/moods', {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        setMoodData(response.data);
`,
			architecture: [
				{
					type: 'Frontend',
					components: [
						{
							name: 'React UI',
							icon: <FiMonitor />,
						},
						{ name: 'Journal Dashboard', icon: <FiCalendar /> },
						{ name: 'Mood Tracker', icon: <FiActivity /> },
					],
				},
				{
					type: 'Backend',
					components: [
						{ name: 'Node.js API', icon: <FiServer /> },
						{ name: 'Prisma ORM', icon: <FiDatabase /> },
						{ name: 'JWT Auth', icon: <FiLock /> },
					],
				},
				{
					type: 'Deployment',
					components: [
						{
							name: 'Google Cloud Platform',
							icon: <FiCloud />,
						},
						{
							name: 'PostgreSQL Database',
							icon: <FiDatabase />,
						},
						{ name: 'Analytics', icon: <FiBarChart /> },
					],
				},
			],
		},
		{
			title: 'Slick-Chat',
			description:
				'A tokenized chat application with secure authentication and real-time messaging capabilities.',
			image: '/assets/images/web/slickchat.jpeg',
			link: 'https://github.com/Meghan31/Slick-Chat',
			technologies: [
				'Next.js',
				'NextAuth',
				'Kafka',
				'Redis',
				'PostgreSQL',
				'JWT',
				'Google Auth',
			],
			color: '#E74C3C',
			icon: <FiMessageCircle />,
			category: 'Full Stack Development',
			performance: '96/100',
			codeSnippet: `
// Slick-Chat - Message Service
import { Kafka } from 'kafkajs';
import { prisma } from '../lib/prisma';
import { redis } from '../lib/redis';

export class MessageService {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'slick-chat',
      brokers: process.env.KAFKA_BROKERS.split(',')
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'chat-group' });
  }
  
  async initialize() {
    await this.producer.connect();
    await this.consumer.connect();
`,
			architecture: [
				{
					type: 'Frontend',
					components: [
						{
							name: 'Next.js UI',
							icon: <FiMonitor />,
						},
						{ name: 'Real-time Chat', icon: <FiMessageSquare /> },
						{ name: 'Authentication', icon: <FiLock /> },
					],
				},
				{
					type: 'Backend',
					components: [
						{ name: 'NextAuth', icon: <FiShield /> },
						{ name: 'Kafka Streaming', icon: <FiActivity /> },
						{ name: 'Redis Cache', icon: <FiDatabase /> },
					],
				},
				{
					type: 'Database',
					components: [
						{
							name: 'PostgreSQL',
							icon: <FiDatabase />,
						},
						{
							name: 'Token Management',
							icon: <FiKey />,
						},
						{ name: 'User Profiles', icon: <FiUsers /> },
					],
				},
			],
		},
		{
			title: 'CodeSketch',
			description:
				'An innovative real-time, collaborative code editor and drawing board that allows seamless collaboration on both code and visuals in a shared environment.',
			image: '/assets/images/web/codesketch.jpeg',
			link: 'https://github.com/Meghan31/Code-Sketch',
			technologies: ['React', 'WebSockets', 'Canvas API', 'Node.js', 'MongoDB'],
			color: '#3498DB',
			icon: <FiCodepen />,
			category: 'Full Stack Development',
			performance: '95/100',
			codeSnippet: `
// CodeSketch - Collaborative Canvas
import { useRef, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const CollaborativeCanvas = ({ roomId, userId }) => {
  const canvasRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [drawing, setDrawing] = useState(false);
  
  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
    newSocket.emit('join-room', { roomId, userId });
    setSocket(newSocket);
    
    return () => newSocket.disconnect();
  }, [roomId, userId]);
  
  useEffect(() => {
`,
			architecture: [
				{
					type: 'Frontend',
					components: [
						{
							name: 'Code Editor',
							icon: <FiCode />,
						},
						{ name: 'Drawing Canvas', icon: <FiEdit2 /> },
						{ name: 'WebSocket Client', icon: <FiRefreshCw /> },
					],
				},
				{
					type: 'Backend',
					components: [
						{ name: 'Node.js Server', icon: <FiServer /> },
						{ name: 'WebSockets', icon: <FiRadio /> },
						{ name: 'Session Management', icon: <FiKey /> },
					],
				},
				{
					type: 'Features',
					components: [
						{
							name: 'Real-time Collaboration',
							icon: <FiUsers />,
						},
						{
							name: 'Version Control',
							icon: <FiGitBranch />,
						},
						{ name: 'Export Options', icon: <FiDownload /> },
					],
				},
			],
		},
		{
			title: 'Decentralized Voting System',
			description: 'A secure and scalable voting platform hosted on AWS.',
			image: '/assets/images/web/voting.jpg',
			link: 'https://github.com/Meghan31/Voting-System-AWS.git',
			technologies: ['AWS', 'Blockchain', 'Node.js', 'React'],
			color: '#FF9900',
			icon: <FiCheckSquare />,
			category: 'Cloud Computing',
			performance: '95/100',
			codeSnippet: `
// MongoDB Cache Server - Caching Middleware
import mongoose from 'mongoose';
import { createHash } from 'crypto';

const CacheSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true },
  expiresAt: { type: Date, required: true }
});

const Cache = mongoose.model('Cache', CacheSchema);

export const cacheMiddleware = (durationInSeconds) => {
  return async (req, res, next) => {
    const keyString = req.originalUrl || req.url;
    const cacheKey = createHash('md5').update(keyString).digest('hex');
    
    try {
      const cachedData = await Cache.findOne({ key: cacheKey, expiresAt: { $gt: new Date() } });
      if (cachedData) {
        return res.status(200).json(cachedData.data);
`,
			architecture: [
				{
					type: 'Client',
					components: [
						{
							name: 'React Frontend',
							icon: <FiMonitor />,
						},
						{ name: 'Authentication', icon: <FiLock /> },
						// { name: 'Blockchain Interface', icon: <FiLink /> },
					],
				},
				{
					type: 'Server',
					components: [
						{ name: 'AWS Lambda', icon: <FiServer /> },
						{ name: 'MongoDB', icon: <FiDatabase /> },
						{ name: 'API Gateway', icon: <FiGlobe /> },
						{ name: 'S3 Storage', icon: <FiCloud /> },
					],
				},
				{
					type: 'Security',
					components: [
						{
							name: 'Encryption',
							icon: <FiShield />,
						},
						{
							name: 'IAM',
							icon: <FiUsers />,
						},
						// { name: 'MongoDB', icon: <FiDatabase /> },
					],
				},
			],
		},
		{
			title: 'Redis Cache Server',
			description:
				'A high-performance server setup using Redis for caching data efficiently.',
			image: '/assets/images/web/redis.jpg',
			link: 'https://github.com/Meghan31/Redis-Cache-Server.git',
			technologies: ['Redis', 'Node.js', 'Express', 'Docker'],
			color: '#DC382D',
			icon: <FiDatabase />,
			category: 'Backend Development',
			performance: '99/100',
			codeSnippet: `// Redis Cache Server - Caching Middleware
import Redis from 'ioredis';
import { promisify } from 'util';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

export const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    const cacheKey = \`api:\${req.originalUrl || req.url}\`;
    
    try {
      const cachedResponse = await redis.get(cacheKey);
      if (cachedResponse) {
        return res.status(200).json(JSON.parse(cachedResponse));`,
			architecture: [
				{
					type: 'Server',
					components: [
						{
							name: 'Node.js Backend',
							icon: <FiServer />,
						},
						{ name: 'Redis Cache', icon: <FiDatabase /> },
						{ name: 'API Layer', icon: <FiLayers /> },
					],
				},
				{
					type: 'Infrastructure',
					components: [
						{ name: 'Docker Containers', icon: <FiBox /> },
						{ name: 'Load Balancer', icon: <FiSliders /> },
						{ name: 'Monitoring', icon: <FiActivity /> },
					],
				},
				{
					type: 'Performance',
					components: [
						{
							name: 'Cache Strategies',
							icon: <FiCpu />,
						},
						{
							name: 'Memory Optimization',
							icon: <FiMaximize />,
						},
						{ name: 'Benchmarking', icon: <FiBarChart /> },
					],
				},
			],
		},
		{
			title: 'Real-time Markdown Editor',
			description: 'A collaborative markdown editor with live previews.',
			image: '/assets/images/web/editor.jpg',
			link: 'https://github.com/Meghan31/Real-time-Markdown-Editor.git',
			technologies: ['React', 'Socket.io', 'Marked', 'Express'],
			color: '#0A0A0A',
			icon: <FiEdit />,
			category: 'Full Stack Development',
			performance: '96/100',
			codeSnippet: `
// Real-time Markdown Editor - Document Sync
import { Server } from 'socket.io';
import { marked } from 'marked';
import { saveDocument, getDocument } from '../models/document';

export default function initializeSocket(server) {
  const io = new Server(server);
  
  io.on('connection', (socket) => {
    socket.on('join-document', async (documentId) => {
      socket.join(documentId);
      
      const document = await getDocument(documentId);
      socket.emit('load-document', document);
      
      socket.on('edit-document', async (content) => {
        await saveDocument(documentId, content);
`,
			architecture: [
				{
					type: 'Client',
					components: [
						{
							name: 'React Editor',
							icon: <FiEdit />,
						},
						{ name: 'Preview Panel', icon: <FiMonitor /> },
						{ name: 'WebSocket Client', icon: <FiRefreshCw /> },
					],
				},
				{
					type: 'Server',
					components: [
						{ name: 'Express.js', icon: <FiServer /> },
						{ name: 'Socket.io', icon: <FiRadio /> },
						{ name: 'Document Store', icon: <FiFileText /> },
					],
				},
				{
					type: 'Features',
					components: [
						{
							name: 'Syntax Highlighting',
							icon: <FiCode />,
						},
						{
							name: 'Real-time Collaboration',
							icon: <FiUsers />,
						},
						{ name: 'Version History', icon: <FiClock /> },
					],
				},
			],
		},

		{
			title: 'Educational Quiz App',
			description:
				'A gamified app for learning and testing knowledge in various subjects.',
			image: '/assets/images/web/quiz.jpg',
			link: 'internship/project',
			technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
			color: '#5FAD56',
			icon: <FiHelpCircle />,
			category: 'Mobile Development',
			performance: '94/100',
			codeSnippet: `
// Educational Quiz App - Game Logic
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchQuestions, submitAnswer, completeQuiz } from '../redux/actions';

const QuizGame = ({ route, navigation }) => {
  const { quizId, category } = route.params;
  const dispatch = useDispatch();
  const { questions, currentIndex, score, loading } = useSelector(state => state.quiz);
  
  useEffect(() => {
    dispatch(fetchQuestions(quizId, category));
  }, [dispatch, quizId, category]);
  
  const handleAnswer = (selectedOption) => {`,
			architecture: [
				{
					type: 'Mobile',
					components: [
						{
							name: 'React Native UI',
							icon: <FiSmartphone />,
						},
						{ name: 'Redux Store', icon: <FiPackage /> },
						{ name: 'Navigation', icon: <FiMap /> },
					],
				},
				{
					type: 'Backend',
					components: [
						{ name: 'Firebase Auth', icon: <FiLock /> },
						{ name: 'Firestore', icon: <FiDatabase /> },
						{ name: 'Cloud Functions', icon: <FiCloud /> },
					],
				},
				{
					type: 'Features',
					components: [
						{
							name: 'Leaderboards',
							icon: <FiAward />,
						},
						{
							name: 'Progress Tracking',
							icon: <FiTrendingUp />,
						},
						{ name: 'Push Notifications', icon: <FiBell /> },
					],
				},
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

	const toggleArchView = () => {
		setIsCodeView(false);
		setIsArchView(!isArchView);
	};

	const toggleCodeView = () => {
		setIsArchView(false);
		setIsCodeView(!isCodeView);
	};

	const toggleConsole = () => {
		setIsConsoleOpen(!isConsoleOpen);
	};

	// Animation variants
	const codeVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	};

	const archVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
		exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
	};

	// Current active project
	const currentProject = projects[activeProject] || projects[0];

	// Architecture visualization component
	const ArchitectureVisualization = ({ architecture }) => {
		return (
			<div className="architecture-visualization">
				{architecture.map((section, sectionIndex) => (
					<div key={sectionIndex} className="arch-section">
						<div className="section-header">
							<span className="section-type">{section.type}</span>
						</div>
						<div className="section-components">
							{section.components.map((component, compIndex) => (
								<motion.div
									key={compIndex}
									className="component"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: sectionIndex * 0.1 + compIndex * 0.1 }}
								>
									<div className="component-icon">{component.icon}</div>
									<div className="component-name">{component.name}</div>
								</motion.div>
							))}
						</div>
						{sectionIndex < architecture.length - 1 && (
							<div className="section-connector">
								<svg width="40" height="40" viewBox="0 0 40 40">
									<motion.path
										d="M20 5 L20 35 M10 25 L20 35 L30 25"
										stroke="rgba(10, 153, 209, 0.8)"
										strokeWidth="2"
										fill="none"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
									/>
								</svg>
							</div>
						)}
					</div>
				))}
			</div>
		);
	};

	// PropTypes for ArchitectureVisualization
	ArchitectureVisualization.propTypes = {
		architecture: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string.isRequired,
				components: PropTypes.arrayOf(
					PropTypes.shape({
						name: PropTypes.string.isRequired,
						icon: PropTypes.element,
					})
				).isRequired,
			})
		).isRequired,
	};

	return (
		<div className="webdev-page">
			<motion.div
				className="webdev-header"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="header-content">
					<h1>Web Development</h1>
					<p>
						Explore my portfolio of modern web applications, cloud solutions,
						and interactive interfaces created with cutting-edge technologies
					</p>
					<div className="tech-indicators">
						<div className="tech-badge react">
							<FiMonitor /> React
						</div>
						<div className="tech-badge node">
							<FiServer /> Node.js
						</div>
						<div className="tech-badge aws">
							<FiCloud /> AWS
						</div>
						<div className="tech-badge tailwind">
							<FiLayers /> Tailwind
						</div>
					</div>
				</div>
			</motion.div>

			<div className="showcase-container">
				<div className="console-toggle">
					<motion.button
						className={`toggle-btn ${isConsoleOpen ? 'active' : ''}`}
						whileTap={{ scale: 0.95 }}
						onClick={toggleConsole}
					>
						<FiTerminal /> {isConsoleOpen ? 'Hide Console' : 'Show Console'}
					</motion.button>
				</div>

				<AnimatePresence>
					{isConsoleOpen && (
						<Draggable
							handle=".console-header"
							defaultPosition={{ x: 0, y: 0 }}
							bounds=".showcase-container"
						>
							<motion.div
								className="console-window"
								ref={consoleRef}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3 }}
							>
								<div className="console-header">
									<div className="console-title">
										<FiTerminal className="console-icon" />
										<span>Development Console - {currentProject.title}</span>
									</div>
									<div className="console-controls">
										<div className="console-button minimize"></div>
										<div className="console-button maximize"></div>
										<div
											className="console-button close"
											onClick={toggleConsole}
										></div>
									</div>
								</div>
								<div className="console-content">
									<div className="console-line">
										$ cd ~/projects/
										{currentProject.title.toLowerCase().replace(/\s+/g, '-')}
									</div>
									<div className="console-line">$ npm run dev</div>
									<div className="console-output">
										<div>{'>'} portfolio@0.1.0 dev</div>
										<div>{'>'} vite</div>
										<div className="vite-output">
											<div className="success">VITE v4.4.5 ready in 152 ms</div>
											<div>➜ Local: http://localhost:5173/</div>
											<div>➜ Network: use --host to expose</div>
											<div className="module-info">
												<div className="module-item">
													<span className="module-status">✓</span>
													<span className="module-name">React</span>
													<span className="module-version">v18.2.0</span>
												</div>
												<div className="module-item">
													<span className="module-status">✓</span>
													<span className="module-name">Rive Runtime</span>
													<span className="module-version">v3.8.1</span>
												</div>
												<div className="module-item">
													<span className="module-status">✓</span>
													<span className="module-name">Tailwind CSS</span>
													<span className="module-version">v3.3.3</span>
												</div>
											</div>
											<div className="import-info">
												<div>page load optimization completed</div>
												<div>initial chunk size reduced by 43%</div>
												<div>assets optimized with Brotli compression</div>
											</div>
											<div className="build-success">
												Ready! App running at http://localhost:5173/
											</div>
										</div>
									</div>
									<div className="console-line cursor">$</div>
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
										<div className="metric-label">Performance</div>
										<div className="metric-value">
											{currentProject.performance}
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
										className={`arch-btn ${isArchView ? 'active' : ''}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={toggleArchView}
									>
										<FiServer />{' '}
										{isArchView ? 'Hide Architecture' : 'View Architecture'}
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
							{isArchView && (
								<motion.div
									className="architecture-view"
									key="architecture"
									variants={archVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="arch-header">
										<div className="arch-title">System Architecture</div>
										<div className="performance-badge">
											<FiCloud /> {currentProject.performance} Performance
										</div>
									</div>
									<ArchitectureVisualization
										architecture={currentProject.architecture}
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
										<div className="file-name">AnimatedHero.jsx</div>
										<div className="language-tag">React</div>
									</div>
									<pre className="code-content">
										<code>{currentProject.codeSnippet}</code>
									</pre>
								</motion.div>
							)}
							{!isArchView && !isCodeView && (
								<motion.div
									className="project-image-container"
									key="image"
									variants={archVariants}
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
										<div className="web-badge">
											<FiLayout /> WEB PROJECT
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

export default WebDevPage;
