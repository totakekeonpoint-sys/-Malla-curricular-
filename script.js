// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Definición de la estructura de la malla curricular por semestres
    const curriculum = {
        'Semestre 1': [
            'Biología básica',
            'Laboratorio de biología básica',
            'Orientación institucional',
            'Introducción a la filosofía',
            'Física básica',
            'Laboratorio de física',
            'Lengua Española Básica I',
            'Matemática Básica',
            'Química Básica',
            'Introducción a las ciencias sociales'
        ],
        'Semestre 2': [
            'Biofísica',
            'Laboratorio de biofísica',
            'Educación física',
            'Fundamentos de Historia Social Dominicana',
            'Lengua Española Básica II',
            'Fundamentos de Desarrollo Cognitivo',
            'Química Orgánica',
            'Vida en Comunidad'
        ],
        'Semestre 3': [
            'Estructura y sistemas anatómicos',
            'Laboratorio de estructura y sistemas anatómicos',
            'Fundamentos de ética general',
            'Antropología aplicada en medicina',
            'Historia de la cultura universal',
            'Inglés técnico en salud I',
            'Introducción a la informática',
            'Bases para el análisis biométrico'
        ],
        'Semestre 4': [
            'Fisiología celular',
            'Bases histológicas del organismo',
            'Laboratorio bases histológicas del organismo',
            'Inglés técnico en salud II',
            'Salud y conducta humana',
            'Laboratorio de salud y conducta humana',
            'Introducción a la metodología investigación en salud',
            'Fundamentos de soporte vital básico',
            'Tecnología información e investigación en salud'
        ],
        'Semestre 5': [
            'Genética médica',
            'Laboratorio genética médica',
            'Bioquímica I',
            'Laboratorio bioquímica I',
            'Embriología',
            'Histología grl del org y sist human',
            'Laboratorio de Histología grl del org y sist human',
            'Anatomía humana I',
            'Laboratorio de anatomía humana I',
            'Introducción a la clínica',
            'Microbiología',
            'Laboratorio de microbiología',
            'Promoción en salud'
        ],
        'Semestre 6': [
            'Bioquímica II',
            'Laboratorio de bioquímica II',
            'Fisiología humana I',
            'Laboratorio de fisiología humana I',
            'Anatomía humana II',
            'Laboratorio de anatomía humana II',
            'Psicología médica',
            'Semiología Médica',
            'Laboratorio semiología médica',
            'Parasitología',
            'Salud colectiva',
            'Laboratorio salud colectiva'
        ],
        'Semestre 7': [
            'Fisiopatología I',
            'Fisiología humana II',
            'Laboratorio fisiología humana II',
            'Anatomía patológica I',
            'Laboratorio anatomía patológica I',
            'Neuroanatomía',
            'Laboratorio Neuroanatomía',
            'Semiología quirúrgica',
            'Laboratorio semiología quirúrgica',
            'Epidemiología',
            'Laboratorio epidemiología',
            'Gerencia y políticas de salud'
        ],
        'Semestre 8': [
            'Inmunología general',
            'Fisiopatología II',
            'Laboratorio fisiopatología II',
            'Farmacología',
            'Laboratorio farmacología',
            'Anatomía patológica II',
            'Laboratorio anatomía patológica II',
            'Sexología médica',
            'Asignatura optativa',
            'Evolución sociohistórica medica'
        ],
        'Semestre 9': [
            'Imagenología',
            'Hematología médica',
            'Laboratorio hematología médica',
            'Farmacoterapeutica',
            'Laboratorio farmacoterapeutica',
            'Cirugía general',
            'Infectología',
            'Asignatura optativa',
            'Bioética y normativas en salud'
        ],
        'Semestre 10': [
            'Endocrinología',
            'Laboratorio endocrinología',
            'Nefrología',
            'Psiquiatría',
            'Laboratorio psiquiatría',
            'Dermatología',
            'Oftalmología',
            'Laboratorio oftalmología',
            'Neurología',
            'Laboratorio neurología',
            'Cardiología',
            'Laboratorio cardiología',
            'Pneumopatología',
            'Laboratorio pneumopatología',
            'Gastroenterología',
            'Laboratorio gastroenterología',
            'Medicina forense',
            'Laboratorio medicina forense'
        ],
        'Semestre 11': [
            'Nutrición',
            'Neurocirugía',
            'Anestesiología',
            'Otorrinolaringología',
            'Laboratorio otorrinolaringología',
            'Traumatología y ortopedia',
            'Laboratorio traumatología y ortopedia',
            'Urología',
            'Laboratorio urología',
            'Oncología',
            'Asignatura optativa'
        ],
        'Semestre 12 - PREINTERNADO': [
            'Pediatría y neonatología',
            'Gineco-obstetricia',
            'Emergencias médicas',
            'Metodología de la investigación en salud',
            'Optativas', // Esta es una categoría de optativas, no un ramo único.
            'Toxicología grl',
            'Introducción terapia en pareja y familiar',
            'Medicina de urgencias y desastres',
            'Genética clínica',
            'Sustancias psicoactivas y adic',
            'Medicina del deporte',
            'Medicina física y rehabilitación',
            'Salud ocupacional y ambiental',
            'Internado rotatorio', // Esta es una categoría, no un ramo único.
            'Clínica médico psiquiátrica',
            'Clínica pediátrica',
            'Clínica gineco-obstétrica',
            'Salud pública',
            'Medicina quirúrgica y traumatología',
            'Medicina interna'
        ]
    };

    // Definición de los requisitos para cada ramo
    const requirements = {
        'Biofísica': ['Biología básica', 'Laboratorio de biología básica', 'Física básica', 'Laboratorio de física'],
        'Laboratorio de biofísica': ['Biología básica', 'Laboratorio de biología básica', 'Física básica', 'Laboratorio de física'],
        'Lengua Española Básica II': ['Lengua Española Básica I'],
        'Química Orgánica': ['Química Básica', 'Laboratorio de química básica'],
        'Laboratorio de química orgánica': ['Química Básica', 'Laboratorio de química básica'],
        'Vida en Comunidad': ['Introducción a las ciencias sociales'],
        'Estructura y sistemas anatómicos': ['Biología básica', 'Laboratorio de biología básica'],
        'Laboratorio de estructura y sistemas anatómicos': ['Biología básica', 'Laboratorio de biología básica'],
        'Fundamentos de ética general': ['Introducción a la filosofía'],
        'Antropología aplicada en medicina': ['Introducción a las ciencias sociales'],
        'Historia de la cultura universal': ['Fundamentos de Historia Social Dominicana'],
        'Inglés técnico en salud I': ['Lengua Española Básica II'],
        'Introducción a la informática': ['Matemática Básica'],
        'Bases para el análisis biométrico': ['Matemática Básica'],
        'Fisiología celular': ['Química Orgánica', 'Biología básica', 'Laboratorio de biología básica', 'Biofísica', 'Laboratorio de biofísica'],
        'Bases histológicas del organismo': ['Biología básica', 'Laboratorio de biología básica'],
        'Laboratorio bases histológicas del organismo': ['Biología básica', 'Laboratorio de biología básica'],
        'Inglés técnico en salud II': ['Inglés técnico en salud I'],
        'Salud y conducta humana': ['Introducción a las ciencias sociales'],
        'Laboratorio de salud y conducta humana': ['Introducción a las ciencias sociales'],
        'Fundamentos de soporte vital básico': ['Estructura y sistemas anatómicos', 'Laboratorio de estructura y sistemas anatómicos'],
        'Tecnología información e investigación en salud': ['Introducción a la informática'],
        'Genética médica': ['Biología básica', 'Laboratorio de biología básica', 'Química Orgánica', 'Fisiología celular'],
        'Laboratorio genética médica': ['Biología básica', 'Laboratorio de biología básica', 'Química Orgánica', 'Fisiología celular'],
        'Bioquímica I': ['Biología básica', 'Laboratorio de biología básica', 'Química Orgánica'],
        'Laboratorio bioquímica I': ['Biología básica', 'Laboratorio de biología básica', 'Química Orgánica'],
        'Promoción en salud': ['Introducción a la clínica'],
        'Bioquímica II': ['Bioquímica I', 'Laboratorio bioquímica I'],
        'Laboratorio de bioquímica II': ['Bioquímica I', 'Laboratorio bioquímica I'],
        'Fisiología humana I': ['Fisiología celular', 'Biofísica'],
        'Laboratorio de fisiología humana I': ['Fisiología celular', 'Biofísica'],
        'Anatomía humana II': ['Anatomía humana I', 'Laboratorio de anatomía humana I'],
        'Laboratorio de anatomía humana II': ['Anatomía humana I', 'Laboratorio de anatomía humana I'],
        'Psicología médica': ['Salud y conducta humana', 'Laboratorio de salud y conducta humana'],
        'Parasitología': ['Microbiología', 'Anatomía humana I', 'Laboratorio de anatomía humana I'],
        'Salud colectiva': ['Introducción a las ciencias sociales'],
        'Laboratorio salud colectiva': ['Introducción a las ciencias sociales'],
        'Fisiopatología I': ['Fisiología humana I', 'Laboratorio de fisiología humana I', 'Bioquímica II', 'Laboratorio de bioquímica II'],
        'Fisiología humana II': ['Fisiología humana I', 'Laboratorio de fisiología humana I'],
        'Laboratorio fisiología humana II': ['Fisiología humana I', 'Laboratorio de fisiología humana I'],
        'Anatomía patológica I': ['Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Laboratorio anatomía patológica I': ['Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Neuroanatomía': ['Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Laboratorio Neuroanatomía': ['Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Semiología quirúrgica': ['Semiología Médica', 'Laboratorio semiología médica'],
        'Laboratorio semiología quirúrgica': ['Semiología Médica', 'Laboratorio semiología médica'],
        'Epidemiología': ['Salud colectiva', 'Laboratorio salud colectiva'],
        'Laboratorio epidemiología': ['Salud colectiva', 'Laboratorio salud colectiva'],
        'Gerencia y políticas de salud': ['Salud colectiva', 'Laboratorio salud colectiva'],
        'Inmunología general': ['Bioquímica II', 'Laboratorio de bioquímica II', 'Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Fisiopatología II': ['Fisiopatología I'],
        'Laboratorio fisiopatología II': ['Fisiopatología I'],
        'Farmacología': ['Bioquímica II', 'Laboratorio de bioquímica II', 'Fisiología humana II', 'Laboratorio fisiología humana II'],
        'Laboratorio farmacología': ['Bioquímica II', 'Laboratorio de bioquímica II', 'Fisiología humana II', 'Laboratorio fisiología humana II'],
        'Anatomía patológica II': ['Anatomía patológica I', 'Laboratorio anatomía patológica I'],
        'Laboratorio anatomía patológica II': ['Anatomía patológica I', 'Laboratorio anatomía patológica I'],
        'Sexología médica': ['Psicología médica', 'Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Evolución sociohistórica medica': ['Epidemiología', 'Laboratorio epidemiología'],
        'Farmacoterapeutica': ['Farmacología', 'Laboratorio farmacología'],
        'Laboratorio farmacoterapeutica': ['Farmacología', 'Laboratorio farmacología'],
        'Endocrinología': ['Fisiopatología I', 'Fisiopatología II', 'Laboratorio fisiopatología II', 'Bioquímica II', 'Laboratorio de bioquímica II', 'Fisiología humana I', 'Laboratorio de fisiología humana I'],
        'Laboratorio endocrinología': ['Fisiopatología I', 'Fisiopatología II', 'Laboratorio fisiopatología II', 'Bioquímica II', 'Laboratorio de bioquímica II', 'Fisiología humana I', 'Laboratorio de fisiología humana I'],
        'Nefrología': ['Imagenología', 'Infectología'],
        'Dermatología': ['Infectología'],
        'Oftalmología': ['Imagenología', 'Cirugía general'],
        'Laboratorio oftalmología': ['Imagenología', 'Cirugía general'],
        'Neurología': ['Imagenología'],
        'Laboratorio neurología': ['Imagenología'],
        'Cardiología': ['Imagenología', 'Cirugía general'],
        'Laboratorio cardiología': ['Imagenología', 'Cirugía general'],
        'Pneumopatología': ['Imagenología', 'Cirugía general'],
        'Laboratorio pneumopatología': ['Imagenología', 'Cirugía general'],
        'Gastroenterología': ['Imagenología'],
        'Laboratorio gastroenterología': ['Imagenología'],
        'Nutrición': ['Bioquímica II', 'Laboratorio de bioquímica II', 'Fisiología humana II', 'Laboratorio fisiología humana II'],
        'Neurocirugía': ['Imagenología', 'Cirugía general'],
        'Anestesiología': ['Pneumopatología', 'Laboratorio pneumopatología'],
        'Otorrinolaringología': ['Imagenología', 'Cirugía general'],
        'Laboratorio otorrinolaringología': ['Imagenología', 'Cirugía general'],
        'Traumatología y ortopedia': ['Imagenología', 'Cirugía general'],
        'Laboratorio traumatología y ortopedia': ['Imagenología', 'Cirugía general'],
        'Urología': ['Nefrología', 'Imagenología', 'Cirugía general'],
        'Laboratorio urología': ['Nefrología', 'Imagenología', 'Cirugía general'],
        'Oncología': ['Imagenología', 'Cirugía general'],
        'Pediatría y neonatología': ['Nutrición'],
        'Gineco-obstetricia': ['Anestesiología', 'Oncología'],
        'Emergencias médicas': ['Anestesiología', 'Imagenología', 'Cirugía general'],
        'Metodología de la investigación en salud': ['Medicina forense', 'Bioética y normativas en salud'],
        'Toxicología grl': ['Epidemiología', 'Laboratorio epidemiología'],
        'Introducción terapia en pareja y familiar': ['Psiquiatría', 'Laboratorio psiquiatría'],
        'Medicina de urgencias y desastres': ['Fisiología humana I', 'Salud colectiva', 'Anatomía humana II', 'Laboratorio de anatomía humana II'],
        'Sustancias psicoactivas y adic': ['Semiología Médica', 'Laboratorio semiología médica', 'Fisiología humana II', 'Laboratorio fisiología humana II'],
        'Medicina del deporte': ['Imagenología', 'Traumatología y ortopedia', 'Laboratorio traumatología y ortopedia'],
        'Medicina física y rehabilitación': ['Imagenología', 'Traumatología y ortopedia', 'Laboratorio traumatología y ortopedia'],
        'Salud ocupacional y ambiental': ['Salud colectiva', 'Epidemiología', 'Laboratorio epidemiología']
    };

    // Mensajes motivacionales para el semestre 10
    const motivationalMessages = [
        '¡KEEP GOING! Estás muy cerca de la meta 🌿📚',
        '¡LO ESTÁS LOGRANDO! Tu esfuerzo está dando frutos 🌻📖',
        'Un paso más hacia tu sueño. ¡Sigue así! 🏡✨',
        '¡Casi lo tienes! El camino es largo, pero tu fuerza es mayor 💖☕'
    ];

    const curriculumGrid = document.getElementById('curriculum-grid');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    // Cargar el estado de los ramos desde el almacenamiento local
    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    /**
     * Guarda el estado actual de los ramos aprobados en el almacenamiento local.
     */
    function saveCoursesState() {
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
    }

    /**
     * Verifica si un ramo está aprobado.
     * @param {string} courseName - El nombre del ramo a verificar.
     * @returns {boolean} - True si el ramo está aprobado, false en caso contrario.
     */
    function isCourseApproved(courseName) {
        return approvedCourses.includes(courseName);
    }

    /**
     * Verifica si todos los requisitos de un ramo están cumplidos.
     * @param {string} courseName - El nombre del ramo.
     * @returns {boolean} - True si todos los requisitos están cumplidos o no tiene requisitos, false en caso contrario.
     */
    function areRequirementsMet(courseName) {
        const requiredCourses = requirements[courseName];
        if (!requiredCourses) {
            return true; // El ramo no tiene requisitos
        }
        return requiredCourses.every(req => isCourseApproved(req));
    }

    /**
     * Obtiene los ramos que faltan por aprobar para un determinado ramo.
     * @param {string} courseName - El nombre del ramo.
     * @returns {Array<string>} - Un array con los nombres de los ramos requeridos que faltan.
     */
    function getMissingRequirements(courseName) {
        const requiredCourses = requirements[courseName];
        if (!requiredCourses) {
            return [];
        }
        return requiredCourses.filter(req => !isCourseApproved(req));
    }

    /**
     * Muestra el modal con un mensaje específico.
     * @param {string} message - El mensaje a mostrar en el modal.
     */
    function showModal(message) {
        modalMessage.innerHTML = message;
        modal.style.display = 'flex'; // Usar flex para centrar
    }

    /**
     * Oculta el modal.
     */
    function hideModal() {
        modal.style.display = 'none';
    }

    // Cierra el modal al hacer clic en el botón de cierre
    closeButton.addEventListener('click', hideModal);

    // Cierra el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    /**
     * Renderiza la malla curricular en el DOM.
     * Genera las columnas por semestre y los ramos dentro de cada uno.
     * Aplica las clases 'approved' y 'blocked' según el estado.
     */
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Limpiar el contenido existente

        for (const semesterName in curriculum) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = semesterName;
            semesterDiv.appendChild(semesterTitle);

            const courseList = document.createElement('ul');
            courseList.classList.add('semester-list');

            curriculum[semesterName].forEach(course => {
                const courseItem = document.createElement('li');
                courseItem.classList.add('course-item');
                courseItem.dataset.course = course; // Almacena el nombre del ramo en un atributo de datos
                courseItem.textContent = course;

                // Aplicar clases según el estado
                if (isCourseApproved(course)) {
                    courseItem.classList.add('approved');
                } else if (!areRequirementsMet(course)) {
                    courseItem.classList.add('blocked');
                }

                // Manejar el clic en el ramo
                courseItem.addEventListener('click', () => {
                    handleCourseClick(course, courseItem);
                });

                courseList.appendChild(courseItem);
            });

            semesterDiv.appendChild(courseList);
            curriculumGrid.appendChild(semesterDiv);

            // Añadir mensaje motivacional al semestre 10
            if (semesterName === 'Semestre 10') {
                const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('motivational-message');
                messageDiv.textContent = randomMessage;
                semesterDiv.appendChild(messageDiv);
            }
        }
    }

    /**
     * Maneja el evento de clic en un ramo.
     * Marca/desmarca el ramo como aprobado, verifica requisitos y muestra mensajes.
     * @param {string} courseName - El nombre del ramo que fue clicado.
     * @param {HTMLElement} courseItemElement - El elemento DOM del ramo.
     */
    function handleCourseClick(courseName, courseItemElement) {
        if (isCourseApproved(courseName)) {
            // Si ya está aprobado, desaprobarlo
            approvedCourses = approvedCourses.filter(c => c !== courseName);
            saveCoursesState();
            renderCurriculum(); // Volver a renderizar para actualizar los estados de los ramos
            showModal(`El ramo "${courseName}" ha sido desmarcado.`);
        } else {
            // Si no está aprobado, verificar requisitos
            if (areRequirementsMet(courseName)) {
                approvedCourses.push(courseName);
                saveCoursesState();
                renderCurriculum(); // Volver a renderizar para actualizar los estados de los ramos
                showModal(`¡Felicidades! Has aprobado "${courseName}" 🎉`);
            } else {
                const missing = getMissingRequirements(courseName);
                let message = `No puedes aprobar "${courseName}" aún. Primero necesitas aprobar los siguientes ramos: <br><br>`;
                message += '<ul>' + missing.map(req => `<li>${req}</li>`).join('') + '</ul>';
                showModal(message);
            }
        }
    }

    // Renderizar la malla curricular al cargar la página
    renderCurriculum();
});
