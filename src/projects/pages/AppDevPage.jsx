//AppDevPage.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import {
	FiChevronLeft,
	FiChevronRight,
	FiCode,
	// FiExternalLink,
	FiGithub,
	FiLayers,
	FiTerminal,
} from 'react-icons/fi';
import {
	SiFirebase,
	SiFlutter,
	// SiReact,
	// SiTensorflow,
	SiTypescript,
} from 'react-icons/si';
import './appDevPage.scss';

const AppDevPage = () => {
	const [activeProject, setActiveProject] = useState(0);
	const [isPhoneView, setIsPhoneView] = useState(false);
	const [isCodeView, setIsCodeView] = useState(false);
	const [isHovering, setIsHovering] = useState(null);
	const [setWindowWidth] = useState(window.innerWidth);
	const [isTerminalOpen, setIsTerminalOpen] = useState(true);
	const terminalRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [setWindowWidth]);

	// Enhanced projects with additional details
	const projects = [
		{
			title: 'Crypto App',
			description:
				'Track cryptocurrency prices and trends in real-time with interactive charts and price alerts.',
			image: '/assets/images/app/crypto.jpg',
			link: 'https://github.com/Meghan31/Crypto-App.git',
			technologies: ['Flutter', 'API Integration', 'Real-time Data'],
			color: '#2A71D0',
			icon: <SiFlutter />,
			codeSnippet: `
	// Crypto price fetching function
	Future<List<CryptoData>> fetchCryptoData() async {
	  final response = await http.get(
		Uri.parse('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
	  );
	  
	  if (response.statusCode == 200) {
		List<dynamic> data = json.decode(response.body);
		return data.map((item) => CryptoData.fromJson(item)).toList();
	  } else {
		throw Exception('Failed to load crypto data');
	  }
	}
			`,
		},
		{
			title: 'FlutterGPT',
			description:
				'An intelligent mobile app powered by ChatGPT for natural conversations and smart assistance.',
			image: '/assets/images/app/gpt.jpg',
			link: 'https://github.com/Meghan31/FlutterGPT.git',
			technologies: ['Flutter', 'ChatGPT API', 'NLP'],
			color: '#19C37D',
			icon: <SiFlutter />,
			codeSnippet: `
	// OpenAI API integration
	Future<String> generateResponse(String prompt) async {
	  final response = await http.post(
		Uri.parse('https://api.openai.com/v1/completions'),
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': 'Bearer $apiKey'
		},
		body: jsonEncode({
		  'model': 'gpt-3.5-turbo',
		  'messages': [{'role': 'user', 'content': prompt}],
		  'temperature': 0.7,
		  'max_tokens': 150
		}),
	  );
	  
	  Map<String, dynamic> data = jsonDecode(response.body);
	  return data['choices'][0]['message']['content'];
	}
			`,
		},
		{
			title: 'Foodie App',
			description:
				'Discover and share delicious food recipes with an intuitive interface and beautiful visuals.',
			image: '/assets/images/app/food.jpg',
			link: 'https://github.com/Meghan31/Foodie_app.git',
			technologies: ['Flutter', 'Firebase', 'UI/UX Design'],
			color: '#FF6B6B',
			icon: <SiFlutter />,
			codeSnippet: `
	// Recipe card widget
	class RecipeCard extends StatelessWidget {
	  final Recipe recipe;
	  final VoidCallback onTap;
	
	  const RecipeCard({
		Key? key,
		required this.recipe,
		required this.onTap,
	  }) : super(key: key);
	
	  @override
	  Widget build(BuildContext context) {
		return GestureDetector(
		  onTap: onTap,
		  child: Container(
			margin: EdgeInsets.symmetric(vertical: 10),
			decoration: BoxDecoration(
			  borderRadius: BorderRadius.circular(15),
			  boxShadow: [
				BoxShadow(
				  color: Colors.black12,
				  blurRadius: 10,
				  offset: Offset(0, 5),
				),
			  ],
			),
			child: Column(
			  crossAxisAlignment: CrossAxisAlignment.start,
			  children: [
				ClipRRect(
				  borderRadius: BorderRadius.vertical(top: Radius.circular(15)),
				  child: Image.network(
					recipe.imageUrl,
					height: 200,
					width: double.infinity,
					fit: BoxFit.cover,
				  ),
				),
				Container(
				  padding: EdgeInsets.all(15),
				  decoration: BoxDecoration(
					color: Colors.white,
					borderRadius: BorderRadius.vertical(
					  bottom: Radius.circular(15),
					),
				  ),
				  child: Column(
					crossAxisAlignment: CrossAxisAlignment.start,
					children: [
					  Text(
						recipe.title,
						style: TextStyle(
						  fontSize: 18,
						  fontWeight: FontWeight.bold,
						),
					  ),
					  SizedBox(height: 5),
					  Text(
						recipe.description,
						style: TextStyle(
						  color: Colors.grey[600],
						),
					  ),
					],
				  ),
				),
			  ],
			),
		  ),
		);
	  }
	}
			`,
		},
		{
			title: 'Note Store & File Share',
			description:
				'Store notes and files securely while sharing them effortlessly across devices and users.',
			image: '/assets/images/app/file.jpg',
			link: 'https://github.com/Meghan31/Note-Store-File-Share.git',
			technologies: ['Flutter', 'Cloud Storage', 'Encryption'],
			color: '#FFD166',
			icon: <SiFlutter />,
			codeSnippet: `
	// File encryption and upload
	Future<String> encryptAndUploadFile(File file, String password) async {
	  // Generate a random encryption key
	  final key = encrypt.Key.fromSecureRandom(32);
	  final iv = encrypt.IV.fromSecureRandom(16);
	  
	  // Encrypt the file
	  final encrypter = encrypt.Encrypter(encrypt.AES(key));
	  final fileBytes = await file.readAsBytes();
	  final encrypted = encrypter.encryptBytes(fileBytes, iv: iv);
	  
	  // Create encrypted file
	  final encryptedFile = File('\${file.path}.enc');
	  await encryptedFile.writeAsBytes(encrypted.bytes);
	  
	  // Upload to Firebase Storage
	  final storageRef = FirebaseStorage.instance
		  .ref()
		  .child('encrypted_files/\${DateTime.now().millisecondsSinceEpoch}');
	  
	  final uploadTask = storageRef.putFile(encryptedFile);
	  final snapshot = await uploadTask.whenComplete(() => null);
	  
	  // Store the key and IV securely
	  await FirebaseFirestore.instance.collection('file_keys').add({
		'userId': FirebaseAuth.instance.currentUser!.uid,
		'fileUrl': await snapshot.ref.getDownloadURL(),
		'key': key.base64,
		'iv': iv.base64,
		'fileName': file.path.split('/').last,
		'timestamp': DateTime.now(),
	  });
	  
	  return await snapshot.ref.getDownloadURL();
	}
			`,
		},
		{
			title: 'Personal Expenses',
			description:
				'Track expenses with beautiful visualizations and tools to manage your budget effectively.',
			image: '/assets/images/app/expense.jpg',
			link: 'https://github.com/Meghan31/personal-expenses-app',
			technologies: ['Flutter', 'SQLite', 'Charts'],
			color: '#06D6A0',
			icon: <SiFlutter />,
			codeSnippet: `
	// Expense chart generation
	Widget buildChart(List<Transaction> recentTransactions) {
	  final groupedTransactionValues = Map<String, double>();
	  
	  recentTransactions.forEach((tx) {
		final weekDay = DateFormat.E().format(tx.date);
		
		if (groupedTransactionValues.containsKey(weekDay)) {
		  groupedTransactionValues[weekDay] = 
			  groupedTransactionValues[weekDay]! + tx.amount;
		} else {
		  groupedTransactionValues[weekDay] = tx.amount;
		}
	  });
	  
	  return Card(
		elevation: 6,
		margin: EdgeInsets.all(20),
		child: Padding(
		  padding: EdgeInsets.all(10),
		  child: Row(
			mainAxisAlignment: MainAxisAlignment.spaceAround,
			children: groupedTransactionValues.entries.map((entry) {
			  return Flexible(
				fit: FlexFit.tight,
				child: ChartBar(
				  label: entry.key,
				  spendingAmount: entry.value,
				  spendingPctOfTotal: totalSpending == 0.0
					  ? 0.0
					  : entry.value / totalSpending,
				),
			  );
			}).toList(),
		  ),
		),
	  );
	}
			`,
		},
		{
			title: 'Shoppers App',
			description:
				'A complete E-Commerce solution with product browsing, cart management, and payments.',
			image: '/assets/images/app/shop.jpg',
			link: 'https://github.com/Meghan31/Shoppers.git',
			technologies: ['Flutter', 'E-Commerce API', 'Payment Gateway'],
			color: '#118AB2',
			icon: <SiFlutter />,
			codeSnippet: `
	// Cart management system
	class CartProvider with ChangeNotifier {
	  Map<String, CartItem> _items = {};
	
	  Map<String, CartItem> get items {
		return {..._items};
	  }
	
	  int get itemCount {
		return _items.length;
	  }
	
	  double get totalAmount {
		var total = 0.0;
		_items.forEach((key, cartItem) {
		  total += cartItem.price * cartItem.quantity;
		});
		return total;
	  }
	
	  void addItem(String productId, double price, String title) {
		if (_items.containsKey(productId)) {
		  // Change quantity
		  _items.update(
			productId,
			(existingCartItem) => CartItem(
			  id: existingCartItem.id,
			  title: existingCartItem.title,
			  price: existingCartItem.price,
			  quantity: existingCartItem.quantity + 1,
			),
		  );
		} else {
		  _items.putIfAbsent(
			productId,
			() => CartItem(
			  id: DateTime.now().toString(),
			  title: title,
			  price: price,
			  quantity: 1,
			),
		  );
		}
		notifyListeners();
	  }
	
	  void removeItem(String productId) {
		_items.remove(productId);
		notifyListeners();
	  }
	}
			`,
		},
		{
			title: 'Superman Space Attack Game',
			description:
				'A thrilling space attack game featuring Superman with exciting gameplay and awesome graphics.',
			image: '/assets/images/app/superman.jpg',
			link: 'https://github.com/Meghan31/Superman-Space-Attack.git',
			technologies: ['Flutter', 'Game Development', 'Animation'],
			color: '#EF476F',
			icon: <SiFlutter />,
			codeSnippet: `
	// Game controller for Superman movements
	class SupermanController extends GameComponent {
	  final Player superman;
	  final double speed = 5.0;
	  final Vector2 velocity = Vector2.zero();
	  
	  SupermanController(this.superman);
	  
	  @override
	  void update(double dt) {
		if (joystick.direction != JoystickDirection.idle) {
		  // Calculate movement based on joystick direction
		  final angle = joystick.delta.direction;
		  velocity.x = speed * cos(angle);
		  velocity.y = speed * sin(angle);
		  
		  // Apply movement to Superman
		  superman.position.add(velocity * dt);
		  
		  // Handle animation state
		  if (velocity.x.abs() > 0) {
			superman.animation.play('flying');
			superman.flipHorizontally = velocity.x < 0;
		  }
		} else {
		  // Stop animation when idle
		  superman.animation.play('idle');
		}
		
		// Handle boundaries
		_keepInBounds();
		
		super.update(dt);
	  }
	  
	  void _keepInBounds() {
		final size = gameRef.size;
		final position = superman.position;
		final supermanSize = superman.size;
		
		if (position.x < 0) {
		  position.x = 0;
		} else if (position.x > size.x - supermanSize.x) {
		  position.x = size.x - supermanSize.x;
		}
		
		if (position.y < 0) {
		  position.y = 0;
		} else if (position.y > size.y - supermanSize.y) {
		  position.y = size.y - supermanSize.y;
		}
	  }
	}
			`,
		},
		{
			title: 'Taxi Cab App',
			description:
				'An app that connects riders and drivers seamlessly with GPS tracking and payment integration.',
			image: '/assets/images/app/taxi.jpg',
			link: 'https://github.com/Meghan31/Cab-rider-app.git',
			technologies: ['Flutter', 'GPS Integration', 'Real-time Updates'],
			color: '#073B4C',
			icon: <SiFlutter />,
			codeSnippet: `
	// Driver location tracking and matching
	Future<void> findNearestDriver(LatLng userLocation) async {
	  // Get all available drivers within 5km radius
	  final driversSnapshot = await FirebaseFirestore.instance
		  .collection('drivers')
		  .where('status', isEqualTo: 'available')
		  .get();
		  
	  List<DriverData> availableDrivers = driversSnapshot.docs
		  .map((doc) => DriverData.fromFirestore(doc))
		  .toList();
		  
	  // Calculate distance to each driver
	  List<Map<String, dynamic>> driversWithDistance = [];
	  
	  for (var driver in availableDrivers) {
		final driverLocation = LatLng(driver.latitude, driver.longitude);
		final distanceInMeters = await calculateDistance(
		  userLocation.latitude, 
		  userLocation.longitude,
		  driverLocation.latitude,
		  driverLocation.longitude
		);
		
		if (distanceInMeters <= 5000) { // Within 5km
		  driversWithDistance.add({
			'driver': driver,
			'distance': distanceInMeters
		  });
		}
	  }
	  
	  // Sort by distance
	  driversWithDistance.sort((a, b) => 
		(a['distance'] as double).compareTo(b['distance'] as double)
	  );
	  
	  if (driversWithDistance.isEmpty) {
		throw NoDriversAvailableException('No drivers available nearby');
	  }
	  
	  // Match with nearest driver
	  final nearestDriver = driversWithDistance.first['driver'] as DriverData;
	  final rideRequest = RideRequest(
		userId: currentUser.uid,
		driverId: nearestDriver.id,
		pickupLocation: userLocation,
		status: 'pending',
		createdAt: DateTime.now(),
	  );
	  
	  // Send ride request
	  await FirebaseFirestore.instance
		  .collection('ride_requests')
		  .add(rideRequest.toMap());
		  
	  // Start listening for driver response
	  startDriverResponseListener(nearestDriver.id);
	}
			`,
		},
		{
			title: 'Telegram Bitcoin Bot',
			description:
				'A sophisticated bot for tracking Bitcoin trends and providing real-time notifications on Telegram.',
			image: '/assets/images/app/bitcoin.jpg',
			link: 'https://github.com/Meghan31/Telegram_Bitcoin_Bot_flutter.git',
			technologies: ['Flutter', 'Telegram API', 'Cryptocurrency API'],
			color: '#F77F00',
			icon: <SiFlutter />,
			codeSnippet: `
	// Bitcoin price alert system
	class BitcoinAlertService {
	  final TelegramBot bot;
	  final List<UserAlert> activeAlerts = [];
	  Timer? _timer;
	  
	  BitcoinAlertService(this.bot) {
		// Start periodic price check
		_timer = Timer.periodic(Duration(minutes: 5), (_) => _checkAlerts());
	  }
	  
	  void addPriceAlert(int chatId, double targetPrice, AlertType type) {
		activeAlerts.add(UserAlert(
		  chatId: chatId,
		  targetPrice: targetPrice,
		  type: type,
		  createdAt: DateTime.now(),
		));
	  }
	  
	  Future<void> _checkAlerts() async {
		if (activeAlerts.isEmpty) return;
		
		try {
		  // Fetch current Bitcoin price
		  final currentPrice = await _getCurrentBitcoinPrice();
		  
		  // Check each alert
		  final alertsToRemove = <UserAlert>[];
		  
		  for (final alert in activeAlerts) {
			bool shouldTrigger = false;
			
			switch (alert.type) {
			  case AlertType.above:
				shouldTrigger = currentPrice >= alert.targetPrice;
				break;
			  case AlertType.below:
				shouldTrigger = currentPrice <= alert.targetPrice;
				break;
			}
			
			if (shouldTrigger) {
			  // Send alert notification
			  await bot.sendMessage(
				ChatId(alert.chatId),
				'🚨 *Bitcoin Alert* 🚨\\n'
				'Bitcoin \${alert.type == AlertType.above ? 'rose above' : 'fell below'} '
				'$\${alert.targetPrice.toStringAsFixed(2)}\\n'
				'Current price: $\${currentPrice.toStringAsFixed(2)}',
				parseMode: ParseMode.markdown,
			  );
			  
			  // Remove triggered alert
			  alertsToRemove.add(alert);
			}
		  }
		  
		  // Remove triggered alerts
		  activeAlerts.removeWhere((a) => alertsToRemove.contains(a));
		  
		} catch (e) {
		  print('Error checking Bitcoin alerts: $e');
		}
	  }
	  
	  Future<double> _getCurrentBitcoinPrice() async {
		final response = await http.get(
		  Uri.parse('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
		);
		
		if (response.statusCode == 200) {
		  final data = jsonDecode(response.body);
		  return data['bitcoin']['usd'].toDouble();
		} else {
		  throw Exception('Failed to fetch Bitcoin price');
		}
	  }
	  
	  void dispose() {
		_timer?.cancel();
	  }
	}
			`,
		},
		{
			title: 'TensorFlow Lite with Flutter',
			description:
				'An advanced image recognition app using TensorFlow Lite for real-time object classification.',
			image: '/assets/images/app/tensorflow.jpg',
			link: 'https://github.com/Meghan31/TensorFlow-Lite-with-Flutter.git',
			technologies: ['Flutter', 'TensorFlow Lite', 'ML'],
			color: '#F9844A',
			icon: <SiFlutter />,
			codeSnippet: `
	// Image classification using TensorFlow Lite
	class TensorFlowService {
	  Interpreter? _interpreter;
	  List<String>? _labels;
	  
	  Future<void> loadModel() async {
		// Load model
		final modelFile = await _getModel();
		_interpreter = Interpreter.fromBuffer(modelFile);
		
		// Load labels
		final labelData = await rootBundle.loadString('assets/labels.txt');
		_labels = labelData.split('\\n');
	  }
	  
	  Future<Uint8List> _getModel() async {
		final modelPath = 'assets/mobilenet_v1_1.0_224_quant.tflite';
		final modelData = await rootBundle.load(modelPath);
		return modelData.buffer.asUint8List();
	  }
	  
	  Future<List<Recognition>> classifyImage(File imageFile) async {
		if (_interpreter == null || _labels == null) {
		  throw Exception('Model not loaded');
		}
		
		// Preprocess image to match model input size (224x224)
		img.Image? image = img.decodeImage(imageFile.readAsBytesSync());
		if (image == null) {
		  throw Exception('Failed to decode image');
		}
		
		img.Image resizedImage = img.copyResize(
		  image,
		  width: 224,
		  height: 224,
		);
		
		// Convert to bytes and normalize (0-255)
		final imageBytes = Float32List(1 * 224 * 224 * 3);
		int pixelIndex = 0;
		
		for (int y = 0; y < 224; y++) {
		  for (int x = 0; x < 224; x++) {
			final pixel = resizedImage.getPixel(x, y);
			imageBytes[pixelIndex++] = img.getRed(pixel) / 255.0;
			imageBytes[pixelIndex++] = img.getGreen(pixel) / 255.0;
			imageBytes[pixelIndex++] = img.getBlue(pixel) / 255.0;
		  }
		}
		
		// Reshape input tensor
		final input = [imageBytes.reshape([1, 224, 224, 3])];
		
		// Define output buffer
		final output = [List<int>.filled(1000, 0)];
		
		// Run inference
		_interpreter!.run(input, output);
		
		// Process results
		final List<Recognition> recognitions = [];
		
		for (int i = 0; i < output[0].length; i++) {
		  // Skip low confidence predictions
		  if (output[0][i] > 0.05) {
			recognitions.add(Recognition(
			  id: i.toString(),
			  label: _labels![i],
			  confidence: output[0][i],
			));
		  }
		}
		
		// Sort by confidence
		recognitions.sort((a, b) => (b.confidence).compareTo(a.confidence));
		
		// Return top 5 results
		return recognitions.take(5).toList();
	  }
	  
	  void dispose() {
		_interpreter?.close();
	  }
	}
			`,
		},
		{
			title: 'Vi-Me App',
			description:
				'A comprehensive video meeting app with modern features like screen sharing and virtual backgrounds.',
			image: '/assets/images/app/vime.jpg',
			link: 'https://github.com/Meghan31/Video-Meet-App.git',
			technologies: ['Flutter', 'WebRTC', 'Agora SDK'],
			color: '#3D348B',
			icon: <SiFlutter />,
			codeSnippet: `
	// Video conferencing room setup
	class VideoRoom extends StatefulWidget {
	  final String roomId;
	  final String userName;
	  
	  const VideoRoom({
		Key? key,
		required this.roomId,
		required this.userName,
	  }) : super(key: key);
	  
	  @override
	  _VideoRoomState createState() => _VideoRoomState();
	}
	
	class _VideoRoomState extends State<VideoRoom> {
	  final _engine = RtcEngine.createWithContext(RtcEngineContext(appId));
	  bool _localUserJoined = false;
	  bool _muted = false;
	  bool _videoOff = false;
	  
	  @override
	  void initState() {
		super.initState();
		_initializeAgora();
	  }
	  
	  Future<void> _initializeAgora() async {
		// Set event handlers
		_engine.setEventHandler(RtcEngineEventHandler(
		  joinChannelSuccess: (channel, uid, elapsed) {
			setState(() {
			  _localUserJoined = true;
			});
		  },
		  userJoined: (uid, elapsed) {
			setState(() {
			  // Add remote user to view
			});
		  },
		  userOffline: (uid, reason) {
			setState(() {
			  // Remove remote user from view
			});
		  },
		));
		
		// Enable video
		await _engine.enableVideo();
		
		// Set channel profile and client role
		await _engine.setChannelProfile(ChannelProfile.Communication);
		await _engine.setClientRole(ClientRole.Broadcaster);
		
		// Join the channel
		await _engine.joinChannel(
		  null, // Token
		  widget.roomId, // Channel name
		  null, // Optional info
		  0, // Optional uid
		);
	  }
	  
	  @override
	  void dispose() {
		// Clean up
		_engine.leaveChannel();
		_engine.destroy();
		super.dispose();
	  }
	  
	  // UI widgets and controls...
	}
			`,
		},
	];

	const nextProject = () => {
		setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const prevProject = () => {
		setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const selectProject = (index) => {
		setActiveProject(index);
	};

	const togglePhoneView = () => {
		setIsCodeView(false);
		setIsPhoneView(!isPhoneView);
	};

	const toggleCodeView = () => {
		setIsPhoneView(false);
		setIsCodeView(!isCodeView);
	};

	const toggleTerminal = () => {
		setIsTerminalOpen(!isTerminalOpen);
	};

	const phoneVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
		exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
	};

	const codeVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	};

	// Current active project
	const currentProject = projects[activeProject];

	return (
		<div className="app-dev-page">
			<motion.div
				className="app-header"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="header-content">
					<h1>Mobile App Development</h1>
					<p>
						Explore my collection of innovative mobile applications built with
						cutting-edge technologies
					</p>
					<div className="tech-indicators">
						<div className="tech-badge flutter">
							<SiFlutter /> Flutter
						</div>
						<div className="tech-badge firebase">
							<SiFirebase /> Firebase
						</div>
						<div className="tech-badge typescript">
							<SiTypescript /> TypeScript
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
										<span>App Development - {currentProject.title}.sh</span>
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
									<div className="terminal-line">$ ls -la</div>
									<div className="terminal-output">
										<div>drwxr-xr-x 12 meghan staff 384 Oct 12 14:32 .</div>
										<div>drwxr-xr-x 21 meghan staff 672 Oct 12 14:30 ..</div>
										<div>
											-rw-r--r-- 1 meghan staff 284 Oct 12 14:32 .gitignore
										</div>
										<div>
											-rw-r--r-- 1 meghan staff 932 Oct 12 14:32 README.md
										</div>
										<div>
											-rw-r--r-- 1 meghan staff 493 Oct 12 14:32 pubspec.yaml
										</div>
										<div>drwxr-xr-x 8 meghan staff 256 Oct 12 14:32 lib</div>
										<div>drwxr-xr-x 5 meghan staff 160 Oct 12 14:32 test</div>
										<div>drwxr-xr-x 7 meghan staff 224 Oct 12 14:32 assets</div>
									</div>
									<div className="terminal-line">$ flutter run</div>
									<div className="terminal-output">
										<div>
											Launching {currentProject.title} on iPhone 14 Pro...
										</div>
										<div>Running Gradle task &apos;assembleDebug&apos;...</div>
										<div className="success">
											✓ Built build/app/outputs/flutter-apk/app-debug.apk
											(12.4MB).
										</div>
										<div className="success">
											✓ Installing build/app/outputs/flutter-apk/app.apk...
										</div>
										<div className="success">
											✓ {currentProject.title} successfully installed!
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
										className={`view-btn ${isPhoneView ? 'active' : ''}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={togglePhoneView}
									>
										<FiLayers /> {isPhoneView ? 'Hide Preview' : 'View App'}
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
							{isPhoneView && (
								<motion.div
									className="phone-frame"
									key="phone"
									variants={phoneVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="phone-header">
										<div className="phone-notch"></div>
									</div>
									<div className="phone-screen">
										<img
											src={currentProject.image}
											alt={currentProject.title}
											className="phone-screen-content"
										/>
									</div>
									<div className="phone-footer">
										<div className="home-indicator"></div>
									</div>
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
										<div className="file-name">main.dart</div>
										<div className="language-tag">Flutter</div>
									</div>
									<pre className="code-content">
										<code>{currentProject.codeSnippet}</code>
									</pre>
								</motion.div>
							)}
							{!isPhoneView && !isCodeView && (
								<motion.div
									className="project-image-container"
									key="image"
									variants={phoneVariants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<img
										src={currentProject.image}
										alt={currentProject.title}
										className="project-main-image"
									/>
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

export default AppDevPage;
