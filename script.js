document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
    updatingAboutMeSection();
});

const updatingAboutMeSection = () => {
    const button = document.querySelector('.clickedOrNot');
    const paragraph = document.getElementById('containerPara');

    button.addEventListener('click', () => {
        paragraph.textContent = 'Welcome to the other World!';

        paragraph.style.color = 'blue';
        paragraph.style.fontWeight = 'bold';

        const newPara = document.createElement('p');
        newPara.id = 'extraPara';
        newPara.textContent = "Amazon Elastic Kubernetes Service (Amazon EKS) streamlines your cloud operations by managing Kubernetes on AWS for you. Think of Kubernetes as your application's conductor - it's an open-source system that coordinates containerized applications, ensuring they work harmoniously at any scale. When your business runs multiple containers (imagine them as specialized workers, each handling specific tasks), Amazon EKS acts as the supervisor, overseeing these containers and maintaining smooth operations. It saves your team valuable time and resources by eliminating the need to handle the complex backend infrastructure, letting you focus on what matters most - your applications.";
        newPara.style.color = 'green';
        paragraph.parentElement.appendChild(newPara);
    });
};
