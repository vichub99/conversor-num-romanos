const input = document.querySelector(".card__input");
const button = document.querySelector(".card__button");
const solution = document.querySelector(".card__solution");
let numUser, solutionRoman;
let errorMinMaxText =
  "Los valores introducidos no son válidos. Introduce valores del 1 al 3999";

button.addEventListener("click", function () {
  numUser = input.value;
  if (numUser == "") {
    solution.classList.remove("card__solution__error");
    solution.classList.add("card__solution");
    solution.textContent = "";
  } else if (numUser <= 0 || numUser >= 4000) {
    solution.classList.remove("card__solution");
    solution.classList.add("card__solution__error");
    solution.textContent = errorMinMaxText;
  } else {
    solution.classList.remove("card__solution__error");
    solution.classList.add("card__solution");
    solutionRoman = conversion_num_romanos(numUser);
    solution.textContent = solutionRoman;
  }
});

/* Enter simula clic en el botón */
input.addEventListener("keyup", function(e) {
  //keyCode == 13 === key == "Enter"
  if(e.keyCode == 13 && !e.shiftKey) {
    button.click();
  }
})

function conversion_num_romanos(numeroAux) {
  let stringRomano = "";
  let resto;

  /* 1000 = "M" */
  resto = numeroAux % 1000;
  numeroAux = Math.trunc(numeroAux / 1000);
  stringRomano = introducirM(numeroAux, stringRomano);

  if (resto >= 900) {
    /* 900 = "CM" */
    resto = resto % 900;
    stringRomano = introducirC(1, stringRomano);
    stringRomano = introducirM(1, stringRomano);
  } else if (resto >= 500) {
    /* 500 = "D" */
    numeroAux = Math.trunc(resto / 500);
    resto = resto % 500;
    stringRomano = introducirD(numeroAux, stringRomano);
  } else if (resto >= 400 && resto <= 499) {
    /* 400 = "CD" */
    resto = resto % 400;
    stringRomano = introducirC(1, stringRomano);
    stringRomano = introducirD(1, stringRomano);
  }

  /* 100 = "C" */
  numeroAux = Math.trunc(resto / 100);
  resto = resto % 100;
  stringRomano = introducirC(numeroAux, stringRomano);

  if (resto >= 90) {
    /* 90 = "XC" */
    resto = resto % 90;
    stringRomano = introducirX(1, stringRomano);
    stringRomano = introducirC(1, stringRomano);
  } else if (resto >= 50) {
    /* 50 = "L" */
    numeroAux = Math.trunc(resto / 50);
    resto = resto % 50;
    stringRomano = introducirL(numeroAux, stringRomano);
  } else if (resto >= 40 && resto <= 49) {
    /* 40 = "XL" */
    resto = resto % 40;
    stringRomano = introducirX(1, stringRomano);
    stringRomano = introducirL(1, stringRomano);
  }

  /* 10 = "X" */
  numeroAux = Math.trunc(resto / 10);
  resto = resto % 10;
  stringRomano = introducirX(numeroAux, stringRomano);

  if (resto >= 9) {
    /* 9 = "XC" */
    resto = resto % 9;
    stringRomano = introducirI(1, stringRomano);
    stringRomano = introducirX(1, stringRomano);
  } else {
    /* 5 = "V" */
    numeroAux = Math.trunc(resto / 5);
    resto = resto % 5;
    stringRomano = introducirV(numeroAux, stringRomano);
  }

  /* 1 = "I" */
  if (resto == 4) {
    stringRomano = introducirI(1, stringRomano);
    stringRomano = introducirV(1, stringRomano);
  } else {
    stringRomano = introducirI(resto, stringRomano);
  }

  return stringRomano;
}

function introducirM(cantidadM, stringRomano) {
  for (let i = 0; i < cantidadM; i++) {
    stringRomano += "M";
  }
  return stringRomano;
}

function introducirD(cantidadD, stringRomano) {
  for (let i = 0; i < cantidadD; i++) {
    stringRomano += "D";
  }
  return stringRomano;
}

function introducirC(cantidadC, stringRomano) {
  for (let i = 0; i < cantidadC; i++) {
    stringRomano += "C";
  }
  return stringRomano;
}

function introducirL(cantidadL, stringRomano) {
  for (let i = 0; i < cantidadL; i++) {
    stringRomano += "L";
  }
  return stringRomano;
}

function introducirX(cantidadX, stringRomano) {
  for (let i = 0; i < cantidadX; i++) {
    stringRomano += "X";
  }
  return stringRomano;
}

function introducirV(cantidadV, stringRomano) {
  for (let i = 0; i < cantidadV; i++) {
    stringRomano += "V";
  }
  return stringRomano;
}

function introducirI(cantidadI, stringRomano) {
  for (let i = 0; i < cantidadI; i++) {
    stringRomano += "I";
  }
  return stringRomano;
}
