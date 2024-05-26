describe("Teste TDD", function () {
  it("Deve retornar o tipo do triângulo ou se não é um triângulo", () => {
    const FALSE_TRIANGLE = new Triangle('x', 100, '10');
    expect(FALSE_TRIANGLE.verifyType()).toBe("Parametro incorreto");
    
    const IMPOSSIBLE_TRIANGLE = new Triangle(1, 100, 10);
    expect(IMPOSSIBLE_TRIANGLE.verifyType()).toBe("Não é um triângulo");

    const EQUILATERAL_TRIANGLE = new Triangle(100, 100, 100);
    expect(EQUILATERAL_TRIANGLE.verifyType()).toBe("Equilátero");

    const ISOSCELES_TRIANGLE = new Triangle(10, 15, 10);
    expect(ISOSCELES_TRIANGLE.verifyType()).toBe("Isósceles");
    
    const SCALENE_TRIANGLE = new Triangle(20, 30, 40);
    expect(SCALENE_TRIANGLE.verifyType()).toBe("Escaleno");
  });
});
