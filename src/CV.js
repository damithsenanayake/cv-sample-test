import React from 'react';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="profile-section">
          <h1 className="name">Damith Senanayake</h1>
          <h2 className="title">PhD Engineering, BSc. Eng. Honours (Computer Science and Engineering)</h2>
          <div className="contact-info">
            <p>📧 damithsenanayake90@gmail.com</p>
            <p>📱 +61 468634200</p>
            <p>🌐 linkedin.com/in/damithsenanayake</p>
            <p>📍 Melbourne, VIC, AUS</p>
          </div>
        </div>
      </header>

      <section className="cv-section">
        <h3>Professional Summary</h3>
        <p>
          PhD qualified AI/ML Engineer with extensive experience in software engineering, algorithm design, 
          and systems administration. Specializing in AI applications for biomedicine and computational biology 
          with prestigious publications in top-tier conferences and journals.
        </p>
      </section>

      <section className="cv-section">
        <h3>Work Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <h4>AI Engineer</h4>
            <span className="company">Move37 Consultants</span>
            <span className="date">Mar 2025 - Present</span>
          </div>
          <ul>
            <li>Developing AI solutions and consulting on machine learning projects</li>
            <li>Implementing cutting-edge AI technologies for client applications</li>
            <li>Providing technical expertise in artificial intelligence and data science</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4>Software Engineer / AI/ML Scientist</h4>
            <span className="company">ISN Innovations PTY LTD</span>
            <span className="date">Nov 2023 - Mar 2025</span>
          </div>
          <ul>
            <li>Developing AI-driven web applications for educational services automation</li>
            <li>Leading VISNA project - Virtual ISN Assistant platform using RAG and LLMs</li>
            <li>Building VIP (Virtual Interactive Patients) using Unreal Engine for therapist training</li>
            <li>Implementing Django/Wagtail based platforms with distributed Azure hosting</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4>Research Fellow in Engineering, Biomedicine and AI</h4>
            <span className="company">University of Melbourne</span>
            <span className="date">Jan 2020 - Oct 2023</span>
          </div>
          <ul>
            <li>AI/ML Engineer working on biomechanics/biomedical engineering projects</li>
            <li>Developed neural networks for real-time IMU to joint angle conversion</li>
            <li>Created graph neural networks for childhood disease prediction from genetics</li>
            <li>Published research in top-tier AI conferences (AAAI, ICML, ICCV)</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4>Software Engineer</h4>
            <span className="company">Flory Institute for Neuroscience and Mental Health</span>
            <span className="date">Jun 2016 - Jun 2019</span>
          </div>
          <ul>
            <li>Built data analysis pipelines using MATLAB/Python for scientific reports</li>
            <li>Integrated Patchclamp Micro-Electrode Array systems (HEKA)</li>
            <li>Developed automated scientific report generation systems</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h4>Software Engineer</h4>
            <span className="company">WSO2 Lanka PVT LTD</span>
            <span className="date">Apr 2015 - Feb 2016</span>
          </div>
          <ul>
            <li>WSO2 Identity Server team - identity, authentication and access control</li>
            <li>Worked on new releases and customer support/dev ops</li>
            <li>Handled identity management for all WSO2 products</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>PhD in Engineering (AI/ML and Computer Science in Computational Biology)</h4>
          <span className="school">University of Melbourne</span>
          <span className="date">Feb 2016 - Jan 2020</span>
        </div>
        <div className="education-item">
          <h4>BSc Eng (Hons) - Computer Science and Engineering</h4>
          <span className="school">University of Moratuwa, Sri Lanka</span>
          <span className="date">Jun 2010 - Apr 2015</span>
        </div>
      </section>

      <section className="cv-section">
        <h3>Awards & Recognition</h3>
        <div className="project-item">
          <h4>Prestigious Publications</h4>
          <p>Top-tier conferences (AAAI, ICML, ICCV) and journals (IEEE-TNNLS) in AI/ML, Bioinformatics, and Biomedical Engineering</p>
        </div>
        <div className="project-item">
          <h4>Runner Up Young Researcher of the Year 2021</h4>
          <p>Australia and New-Zealand Orthopaedic Research Symposium</p>
        </div>
        <div className="project-item">
          <h4>Melbourne International Research Scholarship</h4>
          <p>For PhD in Engineering</p>
        </div>
        <div className="project-item">
          <h4>Melbourne Travel Scholarship</h4>
          <p>For research travel in computational genomics</p>
        </div>
      </section>

      <section className="cv-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <p>Java, C#, C++, Python, R, JavaScript, CSS, Shell Scripting</p>
          </div>
          <div className="skill-category">
            <h4>AI/ML Frameworks</h4>
            <p>Sklearn, PyTorch, TensorFlow, Numpy/Numba, Scipy, Langchain, Huggingface</p>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <p>Flask, FastAPI, Django, Wagtail, REST APIs</p>
          </div>
          <div className="skill-category">
            <h4>Data & Visualization</h4>
            <p>Pandas, Seaborn, Matplotlib, Jupyter Notebook</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h3>Projects</h3>
        <div className="project-item">
          <h4>VISNA — Virtual ISN Assistant</h4>
          <p>Django/Wagtail platform for content-driven chat agents using RAG, LLMs, and vector stores for institutional Q&A</p>
        </div>
        <div className="project-item">
          <h4>VIP — Virtual Interactive Patients</h4>
          <p>Unreal Engine application for training therapists with AI-powered patient simulation using fine-tuned LLMs</p>
        </div>
        <div className="project-item">
          <h4>Neuralkinematics</h4>
          <p>Real-time neural network conversion of IMU readings to clinically relevant joint angle data using GANs</p>
        </div>
        <div className="project-item">
          <h4>Graph NNs for DEE Genetics</h4>
          <p>Graph neural networks for predicting childhood diseases based on genetic profiles using PyTorch</p>
        </div>
      </section>
    </div>
  );
};

export default CV;