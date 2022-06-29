let form = document.getElementById("loginForm");

// Ecouter la modification de l'email
form.email.addEventListener("input", function () {
  validEmail(this);
});

// Ecouter la modification du mot de passe
form.password.addEventListener("input", function () {
  validPassword(this);
});

// Ecouter la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validEmail(form.email) && validPassword(form.password)) {
    form.submit();
  }
});

// Validation email
const validEmail = function (inputEmail) {
  // Création de la reg exp pour validation email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // Récuperation de la balise small
  let small = inputEmail.nextElementSibling;

  // On test l'expression régulière
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = "Adresse valide";
    return true;
  } else {
    small.innerHTML = "Adresse non valide";
    return false;
  }
};

// Validation du mot de passe
const validPassword = function (inputPassword) {
  let msg = document.getElementById("msg");
  let valid = false;
  // Au moins 3 caractères
  if (inputPassword.value.length < 8) {
    msg.innerHTML = "Le mot de passe doit contenir au moins 8 caractères";
  }
  // Au moins 1 majuscule
  else if (!/[A-Z]/.test(inputPassword.value)) {
    msg.innerHTML = "Le mot de passe doit contenir au moins une majuscule";
  }
  // Au moins 1 minuscule
  else if (!/[a-z]/.test(inputPassword.value)) {
    msg.innerHTML = "Le mot de passe doit contenir au moins une minuscule";
  }
  // Au moins 1 chiffre
  else if (!/[0-9]/.test(inputPassword.value)) {
    msg.innerHTML = "Le mot de passe doit contenir au moins un chiffre";
  }
  // Mot de passe valide
  else {
    msg.innerHTML = "Le mot de passe est valide";
    valid = true;
  }

  // Affichage
  // Récuperation de la balise small
  let small = inputPassword.nextElementSibling;

  // On test l'expression régulière
  if (valid) {
    small.innerHTML = "Mot de passe valide";
    return true;
  } else {
    small.innerHTML = "Mot de passe non valide";
    return false;
  }
};
