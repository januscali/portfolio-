/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
    background: #f9f9f9;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 0 1rem;
}

/* Hero Section */
.hero {
    background: linear-gradient(120deg, #6a11cb, #2575fc);
    color: white;
    text-align: center;
    padding: 5rem 1rem;
}

.hero h1 {
    font-size: 2.5rem;
}

.hero .highlight {
    color: #ffd700;
}

.hero .btn {
    display: inline-block;
    margin-top: 1rem;
    background: #ffd700;
    color: #333;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
}

.hero .btn:hover {
    background: #ffac33;
}

/* Navbar */
.navbar {
    background: #444;
    color: white;
    padding: 1rem 0;
}

.navbar ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar ul li {
    margin: 0 15px;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.navbar ul li a:hover {
    color: #ffd700;
}

/* Sections */
section {
    padding: 4rem 1rem;
    text-align: center;
}

/* About Section */
.about {
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 3rem;
    margin-top: -2rem;
}

/* Projects Section */
.projects .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
}

.project-card img {
    width: 100%;
    border-radius: 8px 8px 0 0;
}

.project-card h3 {
    color: #6a11cb;
    margin: 1rem 0;
}

.project-card p {
    font-size: 0.9rem;
    color: #555;
}

.project-card .btn {
    background: #2575fc;
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    display
