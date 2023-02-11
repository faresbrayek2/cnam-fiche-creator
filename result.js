window.addEventListener('load', () => {
    
    const Prenom = sessionStorage.getItem('PRENOM');
    const surname = sessionStorage.getItem('SURNAME');
	const Ville = sessionStorage.getItem('VILLE');
	const Codepostal = sessionStorage.getItem('Codepostal');
	const Etatcivil = sessionStorage.getItem('Etatcivil');
	const telephone = sessionStorage.getItem('telephone');
	const Email = sessionStorage.getItem('Email');
	const date = sessionStorage.getItem('date');
    
    document.getElementById('result-Prenom').innerHTML = Prenom;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-Ville').innerHTML = Ville;
    document.getElementById('result-Codepostal').innerHTML = Codepostal;
    document.getElementById('result-Etatcivil').innerHTML = Etatcivil;
    document.getElementById('result-telephone').innerHTML = telephone;
    document.getElementById('result-Email').innerHTML = Email;
    document.getElementById('result-date').innerHTML = date;
})