class Triangle {
  constructor(side1, side2, side3) {
    this.hypotenuse = side1;
    this.oppositeSide = side2;
    this.adjacentSide = side3;
  }
    
  verifyType() {
    if(typeof this.hypotenuse != "number" || typeof this.oppositeSide != "number" || typeof this.adjacentSide != "number") { // Caso de não ser um número
      return "Parametro incorreto";
    }
    else if (this.hypotenuse + this.oppositeSide <= this.adjacentSide || this.hypotenuse + this.adjacentSide <= this.oppositeSide || this.adjacentSide + this.oppositeSide <= this.hypotenuse) { // Caso as medidas não sejam naturais
      return "Não é um triângulo";
    }
    if (this.hypotenuse == this.oppositeSide && this.oppositeSide == this.adjacentSide) { // Todos os lados iguais 
      return "Equilátero";
    }
    else if (this.hypotenuse == this.oppositeSide || this.oppositeSide == this.adjacentSide || this.hypotenuse == this.adjacentSide) { // Dois lados iguais
        return "Isósceles";
    }
    else if (this.hypotenuse != this.oppositeSide && this.oppositeSide != this.adjacentSide && this.hypotenuse != this.adjacentSide) { // Nenhum lado igual
      return "Escaleno";
    }
  }
}
