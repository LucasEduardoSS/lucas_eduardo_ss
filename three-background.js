/**
 * Three.js Interactive Background para a seção #home
 * Não altera nenhum código existente
 */

class ThreeJSBackground {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = [];
        this.container = null;
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Aguardar o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Encontrar a seção #home
        const homeSection = document.querySelector('#home');
        if (!homeSection) return;

        // Criar container para o canvas
        this.container = document.createElement('div');
        this.container.id = 'three-background-container';
        this.container.style.cssText = `
            position: fixed;
            top: 86px;
            left: 0;
            width: 100vw;
            height: calc(100vh - 86px);
            z-index: 0;
            pointer-events: none;
        `;

        // Inserir container no início da seção home
        homeSection.insertAdjacentElement('afterbegin', this.container);

        // Configurar Three.js
        this.setupScene();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }

    setupScene() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = null; // Transparente para não sobrescrever o gradiente

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = 30;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Iluminação
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(10, 10, 20);
        this.scene.add(pointLight);
    }

    createParticles() {
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const sizes = [];

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const z = (Math.random() - 0.5) * 100;
            positions.push(x, y, z);

            // Star colors: white, yellow, and light blue
            const color = new THREE.Color();
            const colorType = Math.random();
            if (colorType < 0.6) {
                color.setHSL(0.1, 0.6, 0.9); // Yellow-white stars
            } else if (colorType < 0.85) {
                color.setHSL(0, 0, 1); // Pure white stars
            } else {
                color.setHSL(0.6, 0.5, 0.85); // Light blue stars
            }
            colors.push(color.r, color.g, color.b);

            // Varied star sizes for depth effect
            sizes.push(Math.random() * 1.5 + 0.3);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(new Float32Array(sizes), 1));

        const material = new THREE.PointsMaterial({
            size: 1,
            vertexColors: true,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.9,
            fog: false
        });

        const particles = new THREE.Points(geometry, material);
        this.scene.add(particles);
        this.particles = particles;
    }

    addEventListeners() {
        // Mouse move para interatividade
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Resize handler
        window.addEventListener('resize', () => this.onWindowResize());
    }

    onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotacionar partículas
        if (this.particles) {
            this.particles.rotation.x += 0.0001;
            this.particles.rotation.y += 0.0002;

            // Mover câmera baseado na posição do mouse
            this.camera.position.x = this.mouse.x * 5;
            this.camera.position.y = this.mouse.y * 5;
            this.camera.lookAt(this.scene.position);
        }

        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        if (this.renderer) {
            this.renderer.dispose();
            this.container?.remove();
        }
    }
}

// Inicializar quando o script for carregado
const threeBG = new ThreeJSBackground();
