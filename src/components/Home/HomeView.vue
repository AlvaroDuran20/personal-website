<template>
    <h2>Presentation</h2>
    <p>Hello! My name is Luis Duran, and I am an HBO-ICT Software Engineering student at the Hogeschool van Amsterdam (HvA). Passionate about crafting innovative solutions, I specialize in creating web applications, diving into both the frontend and backend with equal enthusiasm.
I thrive on challenges and enjoy dedicating my time to projects that push my boundaries and allow me to grow as a developer. Whether it’s designing intuitive user interfaces or building robust backend systems, I find joy in turning ideas into reality.
Welcome to my portfolio—feel free to explore and see what I've been working on!</p>

  <h2 class="mt-5">Skills</h2>
  <p>
    I have experience programming in various languages, enabling me to build versatile and functional solutions. My expertise includes:
  </p>
  <ul>
    <li><strong>Programming Languages:</strong>
      <ul>
        <li v-for="language in programmingLanguages" :key=language>
            {{ language }}
        </li>
      </ul>
    </li>
    <li><strong>Frameworks and Libraries:</strong>
      <ul>
        <li v-for="framework in frameworks" :key=framework>
        {{ framework }}
        </li>
      </ul>
    </li>
  </ul>
  <p>
    Additionally, I’ve explored foundational concepts in <strong>C++</strong>, including pointers, references, and object-oriented programming (OOP). 
    While my journey in C++ is just beginning, I have a solid grasp of its basics and enjoy expanding my understanding of low-level programming.
  </p>
  <p>
    These skills empower me to create dynamic, efficient, and visually appealing applications, balancing both design and functionality.
  </p>
</template>

<script>
export default {
    data() {
        return {
            programmingLanguages: ["HTML, CSS, JS", "Java", "MySQL", "Typescript"],
            frameworks: ["Node.js (with Express.js)", "Spring Framework", "Vue.js", "Tailwind CSS and Bootstrap"]
        }
    }
}
</script>
